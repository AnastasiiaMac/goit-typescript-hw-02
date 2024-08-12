import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../App/App.types";

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
  image: Image | null;
};

const ImageModal = ({ modalIsOpen, closeModal, image }: Props) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={css.overlay}
      ariaHideApp={false}
    >
      <div className={css.content}>
        <img src={image.urls.regular} alt={image.alt_description || "Image"} />
      </div>
    </Modal>
  );
};

export default ImageModal;
