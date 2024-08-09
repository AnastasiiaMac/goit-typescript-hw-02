import css from "./ImageCard.module.css";
const ImageCard = ({
  url,
  name,
  author,
  likes,
  pictureDescription,
  openModal,
  datum,
}) => {
  return (
    <div className={css.imageContainer}>
      <img
        className={css.image}
        src={url}
        alt={name}
        onClick={() => openModal(datum)}
      />
      <div className={css.imageBottom}>
        <p className={css.description}> {pictureDescription}</p>
        <p>Author: {author}</p>
        <p>Likes: {likes}</p>
      </div>
    </div>
  );
};
export default ImageCard;
