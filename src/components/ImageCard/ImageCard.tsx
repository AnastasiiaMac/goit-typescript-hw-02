import React from "react";
import css from "./ImageCard.module.css";
import { Image } from "../App/App.types";

type Props = {
  imageItem: Image;
  openModal: (datum: Image) => void;
};

const ImageCard = ({ imageItem, openModal }: Props) => {
  return (
    <div className={css.imageContainer}>
      <img
        className={css.image}
        src={imageItem.urls.small}
        alt={imageItem.alt_description}
        onClick={() => openModal(imageItem)}
      />
      <div className={css.imageBottom}>
        <p className={css.description}>{imageItem.alt_description}</p>
        <p>Author: {imageItem.user.name}</p>
        <p>Likes: {imageItem.likes}</p>
      </div>
    </div>
  );
};

export default ImageCard;
