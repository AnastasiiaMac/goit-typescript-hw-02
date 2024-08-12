import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../App/App.types";

type Props = {
  data: Image[];
  openModal: (datum: Image) => void;
};

const ImageGallery = ({ data, openModal }: Props) => {
  return (
    <ul className={css.galleryList}>
      {data.map((datum) => (
        <li className={css.item} key={datum.id}>
          <ImageCard imageItem={datum} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
