import Divider from "@mui/material/Divider";

export default function Footer() {

    return (
    <>
    <Divider>Связаться с нами</Divider>
      <div style={{ marginTop: "1%" }}>
        <span>
          {" "}
          Мы находимся по адресу: г. Москва, проезд Черепановых, д.32
        </span>
        <div
          id="contacts"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "1%",
          }}
        >
          <a href="https://wa.me/79771076625">
            {" "}
            <WhatsAppIcon />{" "}
          </a>
          <a href="https://t.me/salon_i_like_it">
            {" "}
            <TelegramIcon />{" "}
          </a>
          <a href="tel:+79771076625">
            {" "}
            <LocalPhoneIcon />{" "}
          </a>
          <a href="https://vk.com/salon_i_like_it">
            {" "}
            <img className="vk" src="/vkicon.png" alt="" />
          </a>
        </div>
      </div>
      <div style={{ marginTop: "2%" }}>
        {" "}
        <a href="#top"> © 2023 </a>{" "}
      </div>
      </>
    )
}