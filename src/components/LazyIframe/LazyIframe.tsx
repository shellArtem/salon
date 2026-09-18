import { useEffect, useRef, useState, type CSSProperties } from 'react';

type LazyIframeProps = {
  src: string;
  title: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: CSSProperties;
  /** Показать кнопку вместо автозагрузки (лучше для мобильных) */
  clickToLoad?: boolean;
  buttonLabel?: string;
};

/**
 * Не грузит iframe сразу: либо по клику, либо когда блок попал в viewport.
 * Снижает число параллельных TLS-соединений на слабом nginx/мобильном.
 */
export default function LazyIframe({
  src,
  title,
  width = '100%',
  height = 280,
  className,
  style,
  clickToLoad = false,
  buttonLabel = 'Показать карту',
}: LazyIframeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (clickToLoad || shouldLoad) return;
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [clickToLoad, shouldLoad]);

  if (!shouldLoad) {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          width,
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.06)',
          borderRadius: 12,
          ...style,
        }}
      >
        {clickToLoad ? (
          <button
            type="button"
            onClick={() => setShouldLoad(true)}
            style={{
              fontFamily: 'inherit',
              fontSize: 14,
              fontWeight: 600,
              padding: '10px 16px',
              borderRadius: 999,
              border: '1px solid rgba(0,0,0,0.2)',
              background: '#fff',
              cursor: 'pointer',
            }}
          >
            {buttonLabel}
          </button>
        ) : (
          <span style={{ fontSize: 13, opacity: 0.7 }}>Загрузка карты…</span>
        )}
      </div>
    );
  }

  return (
    <iframe
      title={title}
      src={src}
      width={width}
      height={height}
      className={className}
      style={{ border: 0, ...style }}
      allowFullScreen
      loading="lazy"
    />
  );
}
