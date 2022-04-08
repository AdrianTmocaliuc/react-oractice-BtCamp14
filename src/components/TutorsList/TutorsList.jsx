import Tutor from "components/Tutor/Tutor";

const TutorsList = ({ tutors = [] }) => {
  return (
    <ul>
      {tutors.map((tutor) => (
        <Tutor tutor={tutor} key={tutor.email} />
      ))}
    </ul>
  );
};

export default TutorsList;
