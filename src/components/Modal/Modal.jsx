import { Component } from "react";
import { GrClose } from "react-icons/gr";
import s from "./Modal.module.css";

const svgStyle = {
  position: "absolute",
  fill: "black",
  top: "10px",
  right: "10px",
};

class Modal extends Component {
  render() {
    const { closeModal, children } = this.props;
    return (
      <>
        <div className={s.container}>
          <GrClose style={svgStyle} onClick={closeModal} />
          {children}
        </div>
      </>
    );
  }
}

export default Modal;
