import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header style={styles.header}>
      <h1>🕒 Time Tracker</h1>
      {isAuthenticated && (
        <div style={styles.userInfo}>
          <span>{user?.email}</span>
          <button onClick={handleLogout} style={styles.button}>Cerrar sesión</button>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    background: "#282c34",
    color: "#fff",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  button: {
    background: "#61dafb",
    border: "none",
    padding: "0.5rem 1rem",
    cursor: "pointer",
  },
};

export default Header;
