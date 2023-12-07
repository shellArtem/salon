export default function Yandex() {
  return (
    <div>
      <div style={{ position: "relative", overflow: "hidden"}}>
        <a
          href="https://yandex.ru/maps/org/mne_nravitsya/27933329123/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "0px",
          }}
        >
          Мне нравится
        </a>
        <a
          href="https://yandex.ru/maps/213/moscow/category/hairdresser/184105812/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
        >
          Парикмахерская в Москве
        </a>
        <a
          href="https://yandex.ru/maps/213/moscow/category/nail_salon/20476284572/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "28px",
          }}
        >
          Ногтевая студия в Москве
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=37.529134%2C55.840736&mode=poi&poi%5Bpoint%5D=37.529552%2C55.841361&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D27933329123&z=18.57"
          width="80%"
          height="600px"
        //   frameBorder="1"
          allowFullScreen={true}
          style={{ position: "relative" }}
        ></iframe>
      </div>
    </div>
  );
}
