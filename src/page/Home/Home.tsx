import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../store";
import { getProfile } from "../../store/auth/actionCreators";
import Login from "../../components/Main/Login/Login";

const Home = () => {
    const dispatch = useAppDispatch();

  const profile = useSelector(
    (state: IRootState) => state.auth.profileData.profile
  );
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  const renderProfile = () => (
    <div>
      <div>Вы успушно авторизовались, {profile}</div>
      <button onClick={() => dispatch(getProfile())}>update profile</button>
    </div>
  );
    return  <div>
    {/* <h1>Home</h1> */}
    {isLoggedIn ? renderProfile() : ""}
    <Login />
  </div>

}
export default Home;