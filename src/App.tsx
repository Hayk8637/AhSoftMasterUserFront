import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
// import { useSelector } from 'react-redux';
// import { IRootState, useAppDispatch } from './store';
// import { useEffect } from 'react';
// import { getProfile } from './store/auth/actionCreators';
import Admin from './page/Admin/Admin';


function App() {
  // const isLoggedIn = useSelector(
  //   (state: IRootState) => !!state.auth.authData.accessToken
  // );
  // const dispatch = useAppDispatch();
  // useEffect(() => {,
  //   dispatch(getProfile);
  // }, [dispatch]);

  return <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/admin'element={true ? <Admin /> : <Navigate to="/" />}>
          <Route path='/admin/*' element={<Admin/>}></Route>
        </Route>
        <Route path='*' element={<Home/>} />
      </Routes>
  </Router>;
}
export default App;
