import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ user, setUser }) {
  const navigate = useNavigate();
  /*   const sendUser = () => {
    navigate(`/User/`);
  }; */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(        "https://dev.deskmanager.app/v1.0/account/login/ios",
        user
      );

      alert("Inicio de sesión exitoso");
     // console.log(res.data);
      setUser(res.data);
      navigate(`/User`);
    } catch (error) {
      if (error.response.status === 401) {
        alert("Usuario o contraseña incorrectos");
      } else {
        alert("Error desconocido");
      }
    }
  };

  return (
    <div className="container-fluid h-custom justify-content-center">
      <div className="text-center">
        <h1> Iniciar sesión </h1>
        <div className="row d-flex mt-8 row align-items-center justify-content-center justify-content-lg-start">
          <form>
            <div className="flex flex-col mb-2 align-items-center">
              <div className="flex relative">
                <input
                  type="text"
                  id="sign-in-email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Ingresa tu correo"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className="flex relative">
                <input
                  type="password"
                  id="sign-in-email"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Ingresa tu contraseña"
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-floating mx-1"
              onClick={handleSubmit}
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
