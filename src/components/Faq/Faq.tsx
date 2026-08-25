import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Faq.css';

const items = [
  {
    q: 'Нужна ли запись?',
    a: 'Да, лучше записаться заранее по телефону или в мессенджерах — так мы сможем подобрать удобное время и мастера. Без записи принимаем, если есть свободное окно.',
  },
  {
    q: 'Есть парковка?',
    a: 'Рядом с салоном есть уличная парковка во дворах и вдоль проезда Черепановых. В будни места обычно находятся быстро.',
  },
  {
    q: 'Как добраться от МЦК?',
    a: 'От станции МЦК «Коптево» пешком около 6–8 минут (~500 м). Выходите в сторону проезда Черепановых и идите вдоль домов до д. 32.',
  },
  {
    q: 'Можно с детьми?',
    a: 'Да, можно. Если нужно подстричь ребёнка или он просто придёт с вами — предупредите при записи, подскажем удобное время.',
  },
];

export default function Faq() {
  return (
    <section className="faq" aria-label="Частые вопросы">
      <div className="faq-list">
        {items.map((item) => (
          <Accordion
            key={item.q}
            disableGutters
            elevation={0}
            className="faq-item"
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} className="faq-summary">
              {item.q}
            </AccordionSummary>
            <AccordionDetails className="faq-details">{item.a}</AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
