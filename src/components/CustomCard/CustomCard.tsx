import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const CustomCard = ({ img, title, description }: any) => {
  const isMobile = useMediaQuery('(max-width:480px)');

  return (
    <Card
      style={{
        width: '80%',
        height: isMobile? '100vh' : '50vh',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        borderRadius: '1%',
      }}
    >
      <CardMedia
        component="img"
        alt="Image"
        image={img}
        style={{
          width: isMobile ? '50%' : '30%',
          height: '90%',
          marginLeft: '2%',
          borderRadius: '10%',
          marginTop: isMobile ? '10%' : '0%',
        }}
      />
      <div
        style={{
          width: isMobile? '95%' : '2px',
          background: 'black',
          height: isMobile? '2px' : '95%',
          margin: isMobile? '10px 0' : '0 10px',
        }}
      />{' '}
      {/* Вертикальная линия */}
      <CardContent style={{ width: '60%', height: '100%', padding: '7%' }}>
        <Typography
          variant="h3"
          component="div"
          style={{ marginTop: '2%', color: 'grey', fontSize: isMobile? '30px' : '40px', marginRight: isMobile? '5%' : '0%' }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="black" style={{ marginTop: '2%', fontSize: isMobile ? '12px' : '17px' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
