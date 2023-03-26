import { useCallback, useEffect } from "react";
import { useState } from "react";

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [expirationTime, setExpirationTime] = useState();
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setExpirationTime(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expirationToken: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setExpirationTime(null);
    setUserId(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (token && expirationTime) {
      const remainingTime = expirationTime.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, expirationTime]);

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem("userData"));
    if (
      storedToken &&
      storedToken.token &&
      new Date(storedToken.expirationToken) > new Date()
    ) {
      login(
        storedToken.userId,
        storedToken.token,
        new Date(storedToken.expirationToken)
      );
    }
  }, [login]);

  return { token, userId, login, logout };
};
