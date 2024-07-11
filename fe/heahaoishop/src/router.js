import { ROUTERS } from "./utils/router";
import HomePage from "./page/users/homePage";
import { Route, Routes } from "react-router-dom";
import Masterlayout from "./page/users/theme/masterlayout";
import ProfilePage from "./page/users/profilePage";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePage />,
    },
  ];

  return (
    <Masterlayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </Masterlayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
