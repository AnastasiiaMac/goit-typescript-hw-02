import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ modalIsOpen, closeModal, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.content}>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </Modal>
  );
};

export default ImageModal;
