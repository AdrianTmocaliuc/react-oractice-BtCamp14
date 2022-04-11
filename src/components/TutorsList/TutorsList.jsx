import Tutor from "components/Tutor/Tutor";
import Button from "components/Button/Button";
import { tutors } from "db/tutors.json";
import { HiPlusCircle } from "react-icons/hi";
import { Component } from "react";

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

class TutorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutors: props.tutors,
      isShown: false,
    };
  }

  clickHandler = () => {
    this.setState((prevState) => ({
      ...prevState,
      isShown: !prevState.isShown,
    }));

    // this.setState({isShown: !this.state.isShown})
  };

  render() {
    const { tutors, isShown } = this.state;
    console.log("🚀 ~ isShown", isShown);
    const { clickHandler } = this;
    return (
      <>
        <ul>
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
}

export default TutorsList;
