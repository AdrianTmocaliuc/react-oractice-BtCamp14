import { useSelector, useDispatch } from "react-redux";
import tutorSlice from "redux/tutors/tutorsReducer";
import Tutor from "components/Tutor/Tutor";
import Button from "components/Button/Button";
import tutorsList from "db/tutors.json";
import { HiPlusCircle } from "react-icons/hi";
import { useEffect, useState } from "react";
import Modal from "components/Modal/Modal";
import Form from "components/Form/Form";
import s from "./TutorList.module.css";

export default TutorsList;

function TutorsList() {
  // const [tutors, setTutors] = useState([]);
  const tutors = useSelector((state) => state.tutors.tutors);
  console.log("🚀 ~ tutors", tutors);
  const [isShown, setIsShown] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tutorSlice.actions.actionInitTutors(tutorsList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTutor = (tutor) => {
    dispatch(tutorSlice.actions.actionAddTutor(tutor));
    // setTutors((prevTutors) => [...prevTutors, tutor]);
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
  );
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
