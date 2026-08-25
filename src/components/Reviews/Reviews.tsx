import StarIcon from '@mui/icons-material/Star';
import PushPinIcon from '@mui/icons-material/PushPin';
import { salonReviews, YANDEX_RATING, YANDEX_REVIEWS_URL } from '../../reviews';
import './Reviews.css';

function Stars({ rating }: { rating: number }) {
  return (
    <div className="review-stars" aria-label={`${rating} из 5`}>
      {Array.from({ length: rating }).map((_, i) => (
        <StarIcon key={i} fontSize="small" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="reviews" aria-label="Отзывы клиентов">
      <div className="reviews-header">
        <div className="reviews-score">
          <span className="reviews-score-num">{YANDEX_RATING.score}</span>
          <div>
            <Stars rating={5} />
            <p className="reviews-count">
              {YANDEX_RATING.count} отзывов на Яндекс.Картах
            </p>
          </div>
        </div>
        <a
          className="reviews-link"
          href={YANDEX_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Читать все отзывы →
        </a>
      </div>

      <div className="reviews-grid">
        {salonReviews.map((review) => (
          <article
            key={review.id}
            className={`review-card${review.pinned ? ' review-card--pinned' : ''}`}
          >
            {review.pinned ? (
              <div className="review-pinned">
                <PushPinIcon fontSize="inherit" />
                Закреплённый отзыв
              </div>
            ) : null}
            <Stars rating={review.rating} />
            <p className="review-text">«{review.text}»</p>
            <div className="review-footer">
              <span className="review-author">{review.author}</span>
              <span className="review-source">Яндекс.Карты</span>
            </div>
          </article>
        ))}
      </div>

      <p className="reviews-note">
        Отзывы взяты с{' '}
        <a href={YANDEX_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
          карточки салона на Яндекс.Картах
        </a>
        . Первым показан закреплённый отзыв владельца.
      </p>
    </section>
  );
}
