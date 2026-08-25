/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import SwipeableTextMobileStepper from '../SwipeableTextMobileStepper/SwipeableTextMobileStepper';
import ImgMediaCard from '../ImgMediaCard/ImgMediaCard';
import Yandex from '../Yandex/Yandex';
import BasicCard from '../BasicCard/BasicCard';
import HowToGet from '../HowToGet/HowToGet';
import Reviews from '../Reviews/Reviews';
import Faq from '../Faq/Faq';
import Divider from '@mui/material/Divider';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { manicurePrice, manPrice, womanPrice, colorPrice } from '../../price';
import './Home.css';

function Home() {
  return (
    <>
      <header className="hero">
        <h1 className="hero-title">Парикмахерская «Мне нравится!»</h1>
        <p className="hero-subtitle">
          Стрижки, маникюр и окрашивание в Коптево — 6 минут пешком от МЦК
        </p>
      </header>

      <aside className="promo" aria-label="Акция для пенсионеров">
        <p className="promo-main">
          Скидка 50%* для пенсионеров по будням с 10:00 до 12:00
        </p>
        <p className="promo-note">
          * Пенсионные скидки действуют на стрижки по будням с 10:00 до 12:00 и
          составляют 50% от полной стоимости, но не менее 400 ₽.
        </p>
      </aside>

      <div id="yandex_rtb_R-A-11999028-2" />

      <div className="home-carousel-wrap">
        <SwipeableTextMobileStepper />
      </div>

      <Divider>Наши услуги и цены</Divider>
      <div id="price" className="cards-grid">
        <ImgMediaCard
          price={manicurePrice()}
          fromPrice={800}
          service="Ногтевой сервис"
          img="/маникюр-opt.jpg"
          alt="маникюр коптево"
          description="Расслабьтесь и подарите своим ногтям гламурный вид с нашим ногтевым сервисом в салоне красоты! Наши опытные мастера сделают ваш маникюр и педикюр безупречными, используя только самые качественные материалы."
        />
        <ImgMediaCard
          price={manPrice()}
          fromPrice={500}
          service="Мужские стрижки"
          img="/male-haircuts-opt.jpg"
          alt="парикмахерская коптево"
          description="Устали от однообразных стрижек? Приходите к нам на мужские стрижки и доверьтесь нашим профессиональным стилистам! Мы создадим идеальную стрижку, которая подчеркнет вашу индивидуальность."
        />
        <ImgMediaCard
          price={womanPrice()}
          fromPrice={900}
          service="Женские стрижки"
          img="/women-haircuts-opt.jpg"
          alt="стрижка коптево"
          description="Хотите обновить свой образ? Приходите к нам на женские стрижки и доверьтесь нашим опытным мастерам. Мы поможем вам найти идеальную стрижку, которая подчеркнет ваш стиль."
        />
        <ImgMediaCard
          price={colorPrice()}
          fromPrice={1500}
          service="Окрашивания"
          img="/hair-coloring-opt.jpg"
          alt="салон красоты коптево"
          description="Хотите воплотить свои цветовые фантазии? Приходите к нам на сложные окрашивания — наши стилисты создадут для вас неповторимую цветовую гамму."
        />
      </div>

      <Divider>Где мы находимся</Divider>
      <div className="home-section">
        <Yandex />
      </div>

      <Divider>Часы работы и как добраться</Divider>
      <div className="home-section">
        <HowToGet />
      </div>

      <Divider>Наши преимущества</Divider>
      <div className="advantages-grid">
        <BasicCard
          img="/стрижка.png"
          alt="салон красоты"
          description="Одним из главных преимуществ нашего салона красоты являются наши профессиональные мастера. Они обладают богатым опытом и знаниями, позволяющими предоставить нашим клиентам высококачественные услуги."
        />
        <BasicCard
          img="/кошелек.png"
          alt="парикмахерская сао"
          description="Нашим вторым преимуществом являются доступные цены. Мы гордимся тем, что можем предложить нашим клиентам высокий уровень сервиса без разорения их кошелька."
        />
        <BasicCard
          img="/дорога.png"
          alt="мне нравится"
          description="Еще одним преимуществом нашего салона красоты является удобное расположение. Мы расположены недалеко от МЦК и легко доступны для каждого клиента."
        />
        <BasicCard
          img="/доверие.png"
          alt="салон сао"
          description="Мы глубоко ценим каждого человека, обращающегося к нам, и стремимся создать в нашем салоне дружественную и комфортную атмосферу."
        />
      </div>

      <Divider>Отзывы клиентов</Divider>
      <div className="home-section">
        <Reviews />
      </div>

      <Divider>Связаться с нами</Divider>
      <div className="contacts-block">
        <span>Мы находимся по адресу: г. Москва, проезд Черепановых, д. 32</span>
        <br />
        <span>Ежедневно с 10:00 до 20:30</span>
        <div id="contacts" className="contacts-icons">
          <a href="https://wa.me/79771076625" aria-label="WhatsApp">
            <WhatsAppIcon />
          </a>
          <a href="https://t.me/salon_i_like_it" aria-label="Telegram">
            <TelegramIcon />
          </a>
          <a href="tel:+79771076625" aria-label="Позвонить">
            <LocalPhoneIcon />
          </a>
          <a href="https://vk.com/salon_i_like_it" aria-label="ВКонтакте">
            <img className="vk" src="/vkicon.png" alt="" />
          </a>
        </div>
      </div>

      <Divider sx={{ mt: 3 }}>Частые вопросы</Divider>
      <div className="home-section">
        <Faq />
      </div>

      <div className="home-footer">
        <a href="#top">© 2023</a>
      </div>
    </>
  );
}

export default Home;
