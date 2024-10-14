/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import SwipeableTextMobileStepper from '../SwipeableTextMobileStepper/SwipeableTextMobileStepper';
import ResponsiveAppBar from '../ResponsiveAppBar/ResponsiveAppBar';
import ImgMediaCard from '../ImgMediaCard/ImgMediaCard';
import Yandex from '../Yandex/Yandex';
import BasicCard from '../BasicCard/BasicCard';
import Divider from '@mui/material/Divider';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { manicurePrice, manPrice, womanPrice, colorPrice } from '../../price';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import './Home.css';

import { useMediaQuery } from '@mui/material';

// import prerender from 'prerender-node';
import { useEffect, useRef, useState } from 'react';

function Home() {
  const isMobile = useMediaQuery('(max-width:480px)');

  useEffect(() => {
    // const fetchPrerenderedPage = async () => {
    //   await prerender?.render({
    //     uri: '/',
    //     token: '9K4AjWeqvqw9U8GnCibg'
    //   });
    // };

    // fetchPrerenderedPage();
    type();
  }, []);

  const div = useRef();
  const imgRef = useRef(null);

  let index = 0;
  const text =
    'Весь октябрь скидка на маникюр и педикюр 25% в счастливые часы по промокоду "ТЕПЛО"';
  function type() {
    if (index < text.length) {
      div.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 200); // Пауза между печатью символов
    }
  }

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsVisible(true);
    };

    window.addEventListener('load', handleLoad);
  
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <h1>SALON_I_LIKE_IT</h1>
      <div className="image-container">
        <img
          src="25.jpg"
          alt="Акция"
          className={`image ${isVisible ? 'visible' : ''}`}
          ref={imgRef}
        />
      </div>
      <div id="animated-text" ref={div}>
        Весь октябрь скидка на маникюр и педикюр <strong>25%</strong> в
        счастливые часы по промокоду "ТЕПЛО"{' '}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '5%',
        }}
      >
        <SwipeableTextMobileStepper />
      </div>
      <Divider>Наши услуги и цены</Divider>
      <div
        id="price"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '5%',
          flexWrap: 'wrap',
          gap: '30px',
          marginBottom: '5%',
        }}
      >
        <ImgMediaCard
          price={manicurePrice()}
          service="Ногтевой сервис"
          img="/маникюр.png"
          alt="маникюр коптево"
          description="Расслабьтесь и подарите своим ногтям гламурный вид с нашим ногтевым сервисом в салоне красоты! Наши опытные мастера сделают вашу маникюр и педикюр безупречными, используя только самые качественные материалы. Приходите в наш салон и получите заряд уверенности и красоты для ваших ногтей!"
        />
        <ImgMediaCard
          price={manPrice()}
          service="Мужские стрижки"
          img="/male haircuts.png"
          alt="парикмахерская коптево"
          description="Устали от однообразных стрижек? Приходите к нам на мужские стрижки и доверьтесь нашим профессиональным стилистам! Мы создадим идеальную стрижку, которая подчеркнет вашу мужественность и индивидуальность. Запишитесь на прием уже сегодня и насладитесь первоклассным обслуживанием!"
        />
        <ImgMediaCard
          price={womanPrice()}
          service="Женские стрижки"
          img="/Women's haircuts.png"
          alt="стрижка коптево"
          description="Хотите обновить свой образ? Приходите к нам на женские стрижки и доверьтесь нашим опытным мастерам. Мы поможем вам найти идеальную стрижку, которая подчеркнет вашу индивидуальность и стиль. Запишитесь на прием уже сегодня и ощутите, как ваша красота расцветает!"
        />
        <ImgMediaCard
          price={colorPrice()}
          service="Окрашивания"
          img="/hair coloring.png"
          alt="салон красоты коптево"
          description="Хотите воплотить свои самые смелые цветовые фантазии? Приходите к нам на сложные окрашивания и доверьтесь нашим талантливым стилистам! Независимо от того, предпочитаете ли вы яркие пастельные оттенки или интенсивные краски радуги, мы создадим для вас неповторимую цветовую гамму, которая сделает вас звездой в любом месте. Запишитесь на прием уже сегодня и сделайте впечатление своим уникальным стилем!"
        />
      </div>
      <Divider>Где мы находимся</Divider>
      <div style={{ marginTop: '5%', marginBottom: '5%' }}>
        <Yandex />
      </div>
      <Divider>Наши преимущества</Divider>
      <iframe
        style={{
          display: isMobile ? 'block' : 'none',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        src="https://yandex.ru/sprav/widget/rating-badge/27933329123?type=rating&theme=dark"
        width="150"
        height="50"
        frameBorder="0"
      ></iframe>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '5%',
          flexWrap: 'wrap',
          gap: '30px',
          marginBottom: '5%',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
          <BasicCard
            img="/стрижка.png"
            alt="салон красоты"
            description="Одним из главных преимуществ нашего салона красоты являются наши профессиональные мастера. Они обладают богатым опытом и знаниями, позволяющими предоставить нашим клиентам высококачественные услуги по уходу за волосами,  услуги ногтевого сервиса и многое другое. Каждый мастер старается подчеркнуть индивидуальные черты и красоту клиента, создавая неповторимые образы."
          />
          <BasicCard
            img="/кошелек.png"
            alt="парикмахерская сао"
            description="Нашим вторым преимуществом являются небольшие цены, позволяющие получить качественные услуги по доступным ценам. Мы гордимся тем, что можем предложить нашим клиентам высокий уровень сервиса без разорения их кошелька. Мы считаем, что красота должна быть доступной каждому."
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
          <BasicCard
            img="/дорога.png"
            alt="мне нравится"
            description="Еще одним преимуществом нашего салона красоты является удобное расположение. Мы расположены недалеко от МЦК и легко доступны для каждого клиента. Благодаря нашему удобному месторасположению, наши клиенты могут быстро и легко добраться к нам, не тратя много времени и сил."
          />
          <BasicCard
            img="/доверие.png"
            alt="салон сао"
            description="Последнее, но не менее важное преимущество нашего салона красоты - это наше уважение и внимание к каждому клиенту. Мы глубоко ценим каждого человека, обращающегося к нам, и стремимся создать в нашем салоне дружественную и комфортную атмосферу. Мы всегда готовы выслушать и учесть пожелания наших клиентов, создавая для них идеальный образ и приятные условия для отдыха и релаксации."
          />
        </div>
      </div>
      <Divider>Связаться с нами</Divider>
      <div style={{ marginTop: '1%' }}>
        <span>
          {' '}
          Мы находимся по адресу: г. Москва, проезд Черепановых, д.32
        </span>
        <div
          id="contacts"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '1%',
          }}
        >
          <a href="https://wa.me/79771076625">
            {' '}
            <WhatsAppIcon />{' '}
          </a>
          <a href="https://t.me/salon_i_like_it">
            {' '}
            <TelegramIcon />{' '}
          </a>
          <a href="tel:+79771076625">
            {' '}
            <LocalPhoneIcon />{' '}
          </a>
          <a href="https://vk.com/salon_i_like_it">
            {' '}
            <img className="vk" src="/vkicon.png" alt="" />
          </a>
        </div>
      </div>
      <div style={{ marginTop: '2%' }}>
        {' '}
        <a href="#top"> © 2023 </a>{' '}
      </div>
    </>
  );
}

export default Home;
