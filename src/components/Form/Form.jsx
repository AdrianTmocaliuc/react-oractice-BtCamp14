import { type } from "@testing-library/user-event/dist/type";
import Button from "components/Button/Button";
import Paper from "components/Paper/Paper";
import { Component, useEffect, useState, useReducer } from "react";
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

export default Form;

const reset = () => ({ type: "reset" });

const formReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "firstName":
      return { ...state, firstName: payload };
    case "lastName":
      return { ...state, lastName: payload };
    case "patronymic":
      return { ...state, patronymic: payload };
    case "phone":
      return { ...state, phone: payload };
    case "email":
      return { ...state, email: payload };
    case "city":
      return { ...state, city: payload };
    case "options":
      return { ...state, options: payload };
    case "reset":
      return INITIAL_STATE;

    default:
      return state;
  }
};

function Form({ addTutor, title }) {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const { firstName, lastName, patronymic, phone, email, city, options } =
    state;

  const onChangeInput = ({ target }) => {
    const { value, name } = target;
    dispatch({ type: name, payload: value });
  };

  const checkIsActive = () => {
    return !!(
      firstName &&
      lastName &&
      patronymic &&
      phone &&
      email &&
      city &&
      options
    );
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    addTutor({
      id: email,
      firstName,
      lastName,
      patronymic,
      phone,
      email,
      city,
      options,
    });

    dispatch(reset());
  };

  return (
    <Paper>
      <form className={s.form} onSubmit={onSubmitForm}>
        <h3>{title}</h3>

        {TYPES.TUTORS &&
          Object.keys(state).map((key) => (
            <label key={key} className={s.inputLabel}>
              <input
                className={s.input}
                name={key}
                placeholder=""
                onChange={onChangeInput}
                value={state[key]}
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

// class Form extends Component {
//   state = {
//     ...INITIAL_STATE,
//   };

//   onChangeInput = ({ target }) => {
//     const { value, name } = target;
//     this.setState({ [name]: value });
//   };

//   checkIsActive = () => {
//     return Object.values(this.state).every((value) => !!value);
//   };

//   // componentDidUpdate(prevProps, prevState) {}

//   onSubmitForm = (e) => {
//     e.preventDefault();
//     this.props.addTutor({ id: this.state.email, ...this.state });
//     this.setState(INITIAL_STATE);
//   };

//   render() {
//     const { title } = this.props;
//     const { onChangeInput, onSubmitForm, checkIsActive } = this;
//     return (
//       <Paper>
//         <form className={s.form} onSubmit={onSubmitForm}>
//           <h3>{title}</h3>

//           {TYPES.TUTORS &&
//             Object.keys(INITIAL_STATE).map((key) => (
//               <label key={key} className={s.inputLabel}>
//                 <input
//                   className={s.input}
//                   name={key}
//                   placeholder=" "
//                   onChange={onChangeInput}
//                   value={this.state[key]}
//                   required
//                 />
//                 <span className={s.text}>{key}</span>
//               </label>
//             ))}

//           {TYPES.CITY && <></>}

//           {TYPES.FILIAL && <></>}

//           <Button type="submit" name="ПРИГЛАСИТЬ" isActive={!checkIsActive()} />
//         </form>
//       </Paper>
//     );
//   }
// }
