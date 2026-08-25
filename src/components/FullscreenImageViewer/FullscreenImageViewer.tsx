import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './FullscreenImageViewer.css';

type FullscreenImageViewerProps = {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
};

const MIN_SCALE = 1;
const MAX_SCALE = 4;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getTouchDistance(touches: React.TouchList | TouchList) {
  if (touches.length < 2) return 0;
  const a = touches[0];
  const b = touches[1];
  return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
}

export default function FullscreenImageViewer({
  src,
  alt,
  open,
  onClose,
}: FullscreenImageViewerProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const scaleRef = useRef(1);
  const positionRef = useRef({ x: 0, y: 0 });
  const pinchStartRef = useRef({ distance: 0, scale: 1 });
  const dragStartRef = useRef({ x: 0, y: 0, posX: 0, posY: 0 });
  const stageRef = useRef<HTMLDivElement>(null);

  const resetView = useCallback(() => {
    scaleRef.current = 1;
    positionRef.current = { x: 0, y: 0 };
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (open) {
      resetView();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open, resetView]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !open) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const nextScale = clamp(
        scaleRef.current + (event.deltaY < 0 ? 0.12 : -0.12),
        MIN_SCALE,
        MAX_SCALE
      );
      scaleRef.current = nextScale;
      setScale(nextScale);
      if (nextScale === 1) {
        positionRef.current = { x: 0, y: 0 };
        setPosition({ x: 0, y: 0 });
      }
    };

    stage.addEventListener('wheel', onWheel, { passive: false });
    return () => stage.removeEventListener('wheel', onWheel);
  }, [open]);

  const handleTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length === 2) {
      pinchStartRef.current = {
        distance: getTouchDistance(event.touches),
        scale: scaleRef.current,
      };
    } else if (event.touches.length === 1 && scaleRef.current > 1) {
      const touch = event.touches[0];
      dragStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        posX: positionRef.current.x,
        posY: positionRef.current.y,
      };
      setIsDragging(true);
    }
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (event.touches.length === 2) {
      event.preventDefault();
      const distance = getTouchDistance(event.touches);
      if (!pinchStartRef.current.distance) return;

      const nextScale = clamp(
        pinchStartRef.current.scale * (distance / pinchStartRef.current.distance),
        MIN_SCALE,
        MAX_SCALE
      );
      scaleRef.current = nextScale;
      setScale(nextScale);
      if (nextScale === 1) {
        positionRef.current = { x: 0, y: 0 };
        setPosition({ x: 0, y: 0 });
      }
    } else if (event.touches.length === 1 && scaleRef.current > 1) {
      event.preventDefault();
      const touch = event.touches[0];
      const nextPosition = {
        x: dragStartRef.current.posX + (touch.clientX - dragStartRef.current.x),
        y: dragStartRef.current.posY + (touch.clientY - dragStartRef.current.y),
      };
      positionRef.current = nextPosition;
      setPosition(nextPosition);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    pinchStartRef.current = { distance: 0, scale: scaleRef.current };
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    if (scaleRef.current <= 1) return;
    dragStartRef.current = {
      x: event.clientX,
      y: event.clientY,
      posX: positionRef.current.x,
      posY: positionRef.current.y,
    };
    setIsDragging(true);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging || scaleRef.current <= 1) return;
    const nextPosition = {
      x: dragStartRef.current.posX + (event.clientX - dragStartRef.current.x),
      y: dragStartRef.current.posY + (event.clientY - dragStartRef.current.y),
    };
    positionRef.current = nextPosition;
    setPosition(nextPosition);
  };

  const stopDragging = () => setIsDragging(false);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  if (!open) return null;

  return createPortal(
    <div
      className="image-viewer-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={handleOverlayClick}
    >
      <div className="image-viewer-header">
        <p className="image-viewer-title">{alt}</p>
        <button
          type="button"
          className="image-viewer-close"
          aria-label="Закрыть"
          onClick={onClose}
        >
          ×
        </button>
      </div>

      <div
        ref={stageRef}
        className={`image-viewer-stage${isDragging ? ' is-dragging' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      >
        <div
          className="image-viewer-frame"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          }}
        >
          <img className="image-viewer-image" src={src} alt={alt} draggable={false} />
        </div>
      </div>

      <div className="image-viewer-hint">
        {scale > 1 ? (
          <button type="button" className="image-viewer-reset" onClick={resetView}>
            Сбросить
          </button>
        ) : null}
      </div>
    </div>,
    document.body
  );
}
