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

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  render() {
    const { title } = this.props;
    const { onChangeInput, onSubmitForm } = this;
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
                  placeholder={key}
                  onChange={onChangeInput}
                  value={this.state[key]}
                />
              </label>
            ))}

          {TYPES.CITY && <></>}

          {TYPES.FILIAL && <></>}

          <Button type="submit" name="ПРИГЛАСИТЬ" />
        </form>
      </Paper>
    );
  }
}

export default Form;
