import Logo from "../icons/Logo";
import LoginCard from "./LoginCard";

function Login() {
  return (
    <div>
      <img
        src="https://cdn.camberwellshopping.com.au/wp-content/uploads/2021/02/05103117/Guide-to-getting-fit-in-Camberwell_-gyms-fitness-centres-Gym.jpg"
        alt="People doing workout"
        className="login-image"
      />
      <Logo />
      <LoginCard />
    </div>
  );
}

export default Login;
