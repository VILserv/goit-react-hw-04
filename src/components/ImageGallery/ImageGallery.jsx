import css from "./ImageGallery.module.css";
import PhotoCard from "../ImageCard/ImageCard";

export default function PhotoList({ items, onPhotoClick }) {
  return (
    <ul className={css.photoList}>
      {items.map((item) => (
        <li key={item.id}>
          <PhotoCard
            src={item.urls.small}
            alt={item.alt_description}
            onClick={() => onPhotoClick(item.urls.regular)}
          />
        </li>
      ))}
    </ul>
  );
}
