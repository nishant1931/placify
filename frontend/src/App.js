import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";

const Users = React.lazy(() => import("./user/pages/Users"));
const Auth = React.lazy(() => import("./user/pages/Auth"));
const NewPlace = React.lazy(() => import("./places/pages/NewPlace"));
const UpdatePlace = React.lazy(() => import("./places/pages/UpdatePlace"));
const UserPlace = React.lazy(() => import("./places/pages/UserPlace"));

const App = () => {
  const { token, userId, login, logout } = useAuth();

  console.log(window.location);

  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} exact />
        <Route path="/:userId/places" element={<UserPlace />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} exact />
        <Route path="/auth" element={<Auth />} />
        <Route path="/:userId/places" element={<UserPlace />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <BrowserRouter>
        <MainNavigation />
        <main>
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
