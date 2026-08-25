import './Yandex.css';

export default function Yandex() {
  return (
    <div className="map-wrap">
      <a
        className="map-seo-link"
        href="https://yandex.ru/maps/org/mne_nravitsya/27933329123/?utm_medium=mapframe&utm_source=maps"
      >
        Мне нравится
      </a>
      <iframe
        title="Салон на Яндекс.Картах"
        src="https://yandex.ru/map-widget/v1/?ll=37.529134%2C55.840736&mode=poi&poi%5Bpoint%5D=37.529552%2C55.841361&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D27933329123&z=18.57"
        height="420"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
