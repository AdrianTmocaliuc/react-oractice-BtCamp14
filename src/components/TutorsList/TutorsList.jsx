import Tutor from "components/Tutor/Tutor";
import Button from "components/Button/Button";
import tutorsList from "db/tutors.json";
import { HiPlusCircle } from "react-icons/hi";
import { Component, useEffect, useState } from "react";
import Modal from "components/Modal/Modal";
import Form from "components/Form/Form";
import s from "./TutorList.module.css";

export default TutorsList;

function TutorsList() {
  const [tutors, setTutors] = useState([]);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTutors(tutorsList)
  }, [])

  const addTutor = (tutor) => {
    setTutors(prevTutors => [...prevTutors, tutor]);
  };

  const clickHandler = () => {
    setIsShown(!isShown);
    // this.setState((prevState) => ({
    //   ...prevState,
    //   isShown: !prevState.isShown,
    // }));
  };

  return (
    <>
      {isShown && (
          <Modal closeModal={clickHandler}>
            <Form addTutor={addTutor} />
          </Modal>
        )}
        <ul className={s.list}>
          {tutors.map((tutor) => (
            <Tutor tutor={tutor} key={tutor.email} />
          ))}
        </ul>
        <Button
          type="button"
          name="Добавить преподавателя"
          clickHandler={clickHandler}
          icon={<HiPlusCircle />}
        />
    </>
  )
}

// const TutorsList = ({ tutors = [] }) => {
//   return (
//     <>
//       <ul>
//         {tutors.map((tutor) => (
//           <Tutor tutor={tutor} key={tutor.email} />
//         ))}
//       </ul>
//       <Button />
//     </>
//   );
// };

// class TutorsList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       tutors: [],
//       isShown: false,
//     };
//   }

//   clickHandler = () => {
//     this.setState((prevState) => ({
//       ...prevState,
//       isShown: !prevState.isShown,
//     }));

//     // this.setState({isShown: !this.state.isShown})
//   };

//   componentDidMount() {
//     this.setState({ tutors: tutors });
//   }

//   addTutor = (tutor) => {
//     this.setState((prevState) => {
//       return {
//         tutors: [...prevState.tutors, tutor],
//       };
//     });
//   };

//   render() {
//     const { tutors, isShown } = this.state;
//     // console.log("🚀 ~ isShown", isShown);
//     const { clickHandler, addTutor } = this;

//     return (
//       <>
//         {isShown && (
//           <Modal closeModal={clickHandler}>
//             <Form addTutor={addTutor} />
//           </Modal>
//         )}
//         <ul className={s.list}>
//           {tutors.map((tutor) => (
//             <Tutor tutor={tutor} key={tutor.email} />
//           ))}
//         </ul>
//         <Button
//           type="button"
//           name="Добавить преподавателя"
//           clickHandler={clickHandler}
//           icon={<HiPlusCircle />}
//         />
//       </>
//     );
//   }
// }
// ====================================================
