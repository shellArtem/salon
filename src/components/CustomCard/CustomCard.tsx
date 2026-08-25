import { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import FullscreenImageViewer from '../FullscreenImageViewer/FullscreenImageViewer';
import './CustomCard.css';

const CustomCard = ({ img, title, description }: any) => {
  const isMobile = useMediaQuery('(max-width:899px)');
  const [viewerOpen, setViewerOpen] = useState(false);

  return (
    <>
      <Card
        sx={{
          width: '100%',
          maxWidth: 900,
          height: 'auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'stretch' : 'center',
          borderRadius: '12px',
          textAlign: 'left',
          mx: 'auto',
        }}
      >
        <button
          type="button"
          className="custom-card-media-btn"
          aria-label={`Открыть фото: ${title}`}
          onClick={() => setViewerOpen(true)}
        >
          <img className="custom-card-media" src={img} alt={title} loading="lazy" />
          <span className="custom-card-media-hint">Нажмите, чтобы рассмотреть</span>
        </button>

        <CardContent sx={{ flex: 1, p: isMobile ? 2 : 3 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              color: 'grey.700',
              fontSize: isMobile ? '1.25rem' : '2rem',
              mb: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{
              fontSize: isMobile ? 14 : 16,
              lineHeight: 1.55,
              whiteSpace: 'pre-line',
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>

      <FullscreenImageViewer
        src={img}
        alt={title}
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
      />
    </>
  );
};

export default CustomCard;
