import Button from "components/Button/Button";
import Paper from "components/Paper/Paper";
import { Component, useEffect, useState, } from "react";
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

export default Form;

function Form({addTutor, title}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [options, setOptions] = useState('');

  const onChangeInput = ({ target }) => {
    const { value, name } = target;

    switch (name) {
      case 'firstName':
        setFirstName(value)
        break;
      case 'lastName':
        setLastName(value)
        break;
      case 'patronymic':
        setPatronymic(value)
        break;
      case 'phone':
        setPhone(value)
        break;
      case 'email':
        setEmail(value)
        break;
      case 'city':
        setCity(value)
        break;
      case 'options':
        setOptions(value)
        break;
    
      default:
        break;
    }
  };

  const checkIsActive = () => {
    return !!(firstName && lastName && patronymic && phone && email && city && options);
  };

  const resetUseState = () => {
    setFirstName('');
    setLastName('');
    setPatronymic('');
    setPhone('');
    setEmail('');
    setCity('');
    setOptions('');
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    addTutor({ id: email,  firstName, lastName, patronymic, phone, email, city, options,});

    resetUseState();
  };

  return <Paper>
        <form className={s.form} onSubmit={onSubmitForm}>
          <h3>{title}</h3>

      {TYPES.TUTORS &&
        (<>
        <label className={s.inputLabel}>
                <input
                  className={s.input}
                  name='firstName'
                  placeholder=" "
                  onChange={onChangeInput}
                  value={firstName}
                  required
                />
                {/* <span className={s.text}>{firstName}</span> */}
        </label>
        <label className={s.inputLabel}>
                <input
                  className={s.input}
                  name='lastName'
                  placeholder=" "
                  onChange={onChangeInput}
                  value={lastName}
                  required
                />
                {/* <span className={s.text}>{lastName}</span> */}
              </label>
        <label  className={s.inputLabel}>
                <input
                  className={s.input}
                  name='patronymic'
                  placeholder=" "
                  onChange={onChangeInput}
                  value={patronymic}
                  required
                />
                {/* <span className={s.text}>{patronymic}</span> */}
              </label>
        <label  className={s.inputLabel}>
                <input
                  className={s.input}
                  name='phone'
                  placeholder=" "
                  onChange={onChangeInput}
                  value={phone}
                  required
                />
                {/* <span className={s.text}>{phone}</span> */}
              </label>
        <label  className={s.inputLabel}>
                <input
                  className={s.input}
                  name='email'
                  placeholder=" "
                  onChange={onChangeInput}
                  value={email}
                  required
                />
                {/* <span className={s.text}>{email}</span> */}
        </label>
        <label  className={s.inputLabel}>
                <input
                  className={s.input}
                  name='city'
                  placeholder=" "
                  onChange={onChangeInput}
                  value={city}
                  required
                />
                {/* <span className={s.text}>{city}</span> */}
        </label>
        <label className={s.inputLabel}>
                <input
                  className={s.input}
                  name='options'
                  placeholder=" "
                  onChange={onChangeInput}
                  value={options}
                  required
                />
                {/* <span className={s.text}>{options}</span> */}
        </label>
      </>
      )
      }

          {TYPES.CITY && <></>}

          {TYPES.FILIAL && <></>}

          <Button type="submit" name="ПРИГЛАСИТЬ" isActive={!checkIsActive()} />
        </form>
      </Paper>
}