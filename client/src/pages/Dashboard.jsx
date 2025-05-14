import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addClient } from "../features/clients/clientsSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.clients);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddClient = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    dispatch(
      addClient({
        id: Date.now(),
        ...formData,
        createdAt: new Date().toISOString(),
      })
    );

    setFormData({ name: "", email: "", phone: "", notes: "" });
  };

  return (
    <div style={styles.container}>
      <h2>Dashboard</h2>

      <form onSubmit={handleAddClient} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="notes"
          placeholder="Notas"
          value={formData.notes}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Agregar cliente
        </button>
      </form>

      <ul style={styles.list}>
        {clients.map((client) => (
          <li key={client.id} style={styles.item}>
            <strong>{client.name}</strong>
            <p>Email: {client.email}</p>
            <p>Tel: {client.phone}</p>
            <p>Notas: {client.notes}</p>
            <p style={{ fontSize: "0.8rem", color: "#666" }}>
              Creado: {new Date(client.createdAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: { padding: "2rem" },
  form: { display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" },
  input: { padding: "0.5rem" },
  button: { padding: "0.5rem", backgroundColor: "#61dafb", border: "none" },
  list: { listStyle: "none", padding: 0 },
  item: {
    background: "#f5f5f5",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "5px",
  },
};

export default Dashboard;
