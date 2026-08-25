import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import { useMediaQuery } from '@mui/material';
import './HowToGet.css';

export default function HowToGet() {
  const isMobile = useMediaQuery('(max-width:480px)');

  return (
    <section className="howto" aria-label="Как добраться">
      <div className="howto-info">
        <div className="howto-row">
          <AccessTimeIcon fontSize="small" />
          <div>
            <strong>Часы работы</strong>
            <p>Ежедневно с 10:00 до 20:30</p>
          </div>
        </div>
        <div className="howto-row">
          <PlaceIcon fontSize="small" />
          <div>
            <strong>Адрес</strong>
            <p>г. Москва, проезд Черепановых, д. 32</p>
          </div>
        </div>
        <div className="howto-row">
          <DirectionsWalkIcon fontSize="small" />
          <div>
            <strong>От МЦК «Коптево»</strong>
            <p>
              Пешком ≈ 6–8 минут (~500 м). Выходите со станции в сторону проезда
              Черепановых и идите вдоль домов до д. 32.
            </p>
          </div>
        </div>
        <a
          className="howto-route-link"
          href="https://yandex.ru/maps/?rtext=55.8397,37.5205~55.841361,37.529552&rtt=pd"
          target="_blank"
          rel="noopener noreferrer"
        >
          Открыть маршрут в Яндекс.Картах →
        </a>
      </div>

      <div className="howto-map">
        <img
          className="howto-map-img"
          src="/route-mcc.jpg"
          alt="Карта: путь от МЦК Коптево до салона на проезде Черепановых, 32"
          width={650}
          height={350}
          loading="lazy"
        />
        <iframe
          title="Маршрут пешком от МЦК Коптево"
          src="https://yandex.ru/map-widget/v1/?rtext=55.8397%2C37.5205~55.841361%2C37.529552&rtt=pd&ll=37.525026%2C55.84053&z=15"
          width="100%"
          height={isMobile ? 240 : 280}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
}
