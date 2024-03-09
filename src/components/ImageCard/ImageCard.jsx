import css from "./ImageCard.module.css";

export default function PhotoCard({ src, alt, onClick }) {
  return (
    <div className={css.imgCard}>
      <img src={src} alt={alt} onClick={onClick} />
    </div>
  );
}
