import "./Modal.css";

const Modal = (props) => {
  return (
    <div className={"modal " + props.visible}>
      <div>
        <header>
          <h4>Title</h4>
          <span onClick={props.onCloseModal}>close</span>
        </header>
      </div>
    </div>
  );
};

export default Modal;
