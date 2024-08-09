import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ data, openModal }) => {
  return (
    <ul className={css.galleryList}>
      {data.map((datum) => {
        return (
          <li className={css.item} key={datum.id}>
            <div>
              <ImageCard
                url={datum.urls.small}
                name={datum.alt_description}
                datum={datum}
                openModal={openModal}
                pictureDescription={datum.alt_description}
                author={datum.user.name}
                likes={datum.likes}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
