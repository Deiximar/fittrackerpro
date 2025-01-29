import "./modal.scss";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal isopen">
      <section className="modal-container">{children}</section>
    </div>
  );
};

export default Modal;
