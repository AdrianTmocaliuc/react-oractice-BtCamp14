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
  closeModalByEsc = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };
  closeByBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };
  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeModalByEsc);
  }
  componentDidMount() {
    window.addEventListener("keydown", this.closeModalByEsc);
  }
  render() {
    const { closeModal, children } = this.props;
    return (
      <>
        <div className={s.container} onClick={this.closeByBackdropClick}>
          <GrClose style={svgStyle} onClick={closeModal} />
          {children}
        </div>
      </>
    );
  }
}

export default Modal;
