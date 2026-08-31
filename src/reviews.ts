export type SalonReview = {
  id: string;
  author: string;
  date?: string;
  rating: number;
  text: string;
  pinned?: boolean;
  source: 'yandex';
};

/** Подборка реальных отзывов с Яндекс.Карт. Первый — закреплённый на карточке салона. */
export const salonReviews: SalonReview[] = [
  {
    id: 'pinned-1',
    author: 'Павел Добряков',
    rating: 5,
    pinned: true,
    source: 'yandex',
    text: `Настоящая паримахерская,работают специалисты,хожу только туда и супруга тоже,хотя у нее запросов больше и для неё нашелся мастер который полностью ее устраивает!рекомендую посещать по записи!
    И вообще всем рекомендую!!!!`,
  },
  {
    id: 'ulya-1',
    author: 'Nataly L.',
    rating: 5,
    source: 'yandex',
    text: `Очень довольна работой мастера Надежды - подобрала цвет для волос, уход и стрижка. Приятно провела время в салоне! Спасибо!`,
  },
  {
    id: 'haircut-1',
    author: 'Елена Е.',
    rating: 5,
    source: 'yandex',
    text: `Можно ходить к ним уже только ради Елены, отличный мастер и очень внимательная к пожеланиям клиентов.`,
  },
  {
    id: 'tamara-1',
    author: 'Ольга В.',
    rating: 5,
    source: 'yandex',
    text: 'Хожу туда не первый год, очень нравится сервис, всегда пойдут на встречу клиенту. Мастер маникюра Уля очень качественно выполнят свою работу. Ногти держится у меня месяц, это для меня рекорд. Так, что советую!',
  },
  {
    id: 'atmosphere-1',
    author: 'ged1313',
    rating: 5,
    source: 'yandex',
    text: `Подстригли хорошо и быстро. Заранее записался, но пару раз переносил свою запись, администратор терпимо отнеслась к этому и подобрала место.
    Рекомендую! Спасибо.`,
  },
];

export const YANDEX_REVIEWS_URL =
  'https://yandex.ru/maps/org/mne_nravitsya/27933329123/reviews/';

export const YANDEX_RATING = {
  score: 4.8,
  count: 111,
};
