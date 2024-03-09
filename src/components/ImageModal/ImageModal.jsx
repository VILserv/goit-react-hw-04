import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

export default function ImageModal({ isOpen, itemUrl, onClose }) {
  return (
    <div className={css.modalOverlay}>
      <ReactModal
        className={css.modal}
        isOpen={isOpen}
        onRequestClose={onClose}
        overlay={css.overlay}
      >
        <img src={itemUrl} alt="Big photo" />
      </ReactModal>
    </div>
  );
}
