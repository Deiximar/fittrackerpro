import Logo from "../components/icons/Logo";
import RecordComponent from "../components/records/RecordComponent";
import CalendarButton from "../components/buttons/CalendarButton";
function History() {
  return (
    <div className="main-container">
      <Logo />
      <CalendarButton />
      <RecordComponent />
    </div>
  );
}

export default History;
