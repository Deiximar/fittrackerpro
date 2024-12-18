import Logo from "../icons/Logo";
import RulerButton from "../buttons/RulerButton";
import LogOutButton from "../buttons/LogOutButton";
import "./_UserProfile.scss";
import WeightChart from "../charts/WeightChart";
import WorkoutPerWeek from "../charts/WorkoutPerWeek";

function UserProfile() {
  return (
    <div>
      <Logo />
      <div className="user-profile-container">
        <div className="button-container">
          <RulerButton />
          <LogOutButton />
        </div>
        <div className="user-info-container">
          <img
            src="images/profile-example.jpg"
            alt="user-profile"
            className="profile-image"
          />
          <div className="user-info">
            <div>
              <h3>Monica Smith</h3>
              <h4>monica@gmail.com</h4>
            </div>
            <div className="user-measure">
              <p>
                70,0 <span>KG</span>
              </p>
              &#124;
              <p>
                167 <span>CM</span>
              </p>
              &#124;
              <p>
                00,0 <span>IMC</span>
              </p>
            </div>
          </div>
        </div>
        <h2 className="title-text">Dashboard</h2>
        <WorkoutPerWeek />
        <WeightChart />
      </div>
    </div>
  );
}

export default UserProfile;
