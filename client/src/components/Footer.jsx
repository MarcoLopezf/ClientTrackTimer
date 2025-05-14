import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Time Tracker para Abogados</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#f1f1f1",
    color: "#333",
    textAlign: "center",
    padding: "1rem",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
};

export default Footer;
