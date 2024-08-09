import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../App/App.types";

type Props = {
  data: Image[];
  openModal: (datum: Image) => void;
};

const ImageGallery: React.FC<Props> = ({ data, openModal }) => {
  return (
    <ul className={css.galleryList}>
      {data.map((datum) => (
        <li className={css.item} key={datum.id}>
          <ImageCard imageItem={datum} openModal={openModal} datum={datum} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
