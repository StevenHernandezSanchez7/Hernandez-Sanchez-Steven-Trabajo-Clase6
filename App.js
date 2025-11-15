import { useState } from "react";
import { db } from "./firebase";
import { ref, push } from "firebase/database";

export default function App() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const usersRef = ref(db, "users");

    push(usersRef, form)
      .then(() => {
        alert("Usuario registrado.");
        setForm({ nombre: "", correo: "", telefono: "" });
      })
      .catch((err) => alert("Error: " + err));
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Registro de Usuario
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Nombre:</label>
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Correo:</label>
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Teléfono:</label>
          <input
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px",
            border: "none",
            fontWeight: "bold",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Registrar
        </button>
      </form>
    </div>
  );
}
