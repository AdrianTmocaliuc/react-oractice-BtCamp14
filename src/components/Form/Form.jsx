import Button from "components/Button/Button";
import Paper from "components/Paper/Paper";
import { Component } from "react";
import s from "./Forms.module.css";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  patronymic: "",
  phone: "",
  email: "",
  city: "",
  options: "",
};

const TYPES = {
  TUTORS: "tutor",
  CITY: "city",
  FILIAL: "filial",
};

class Form extends Component {
  state = {
    ...INITIAL_STATE,
  };

  onChangeInput = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  checkIsActive = () => {
    return Object.values(this.state).every((value) => !!value);
  };

  // componentDidUpdate(prevProps, prevState) {}

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.addTutor({ id: this.state.email, ...this.state });
    this.setState(INITIAL_STATE);
  };

  render() {
    const { title } = this.props;
    const { onChangeInput, onSubmitForm, checkIsActive } = this;
    return (
      <Paper>
        <form className={s.form} onSubmit={onSubmitForm}>
          <h3>{title}</h3>

          {TYPES.TUTORS &&
            Object.keys(INITIAL_STATE).map((key) => (
              <label key={key} className={s.inputLabel}>
                <input
                  className={s.input}
                  name={key}
                  placeholder=" "
                  onChange={onChangeInput}
                  value={this.state[key]}
                  required
                />
                <span className={s.text}>{key}</span>
              </label>
            ))}

          {TYPES.CITY && <></>}

          {TYPES.FILIAL && <></>}

          <Button type="submit" name="ПРИГЛАСИТЬ" isActive={!checkIsActive()} />
        </form>
      </Paper>
    );
  }
}

export default Form;
