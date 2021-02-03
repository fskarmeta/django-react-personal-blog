import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../util/axios";
import "../styles/navbar.css";
import { useForm } from "react-hook-form";

const Navbar = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const { register, handleSubmit, watch, errors } = useForm();

  const closeModal = useRef(null);

  const onSubmit = (data, e) => {
    instance
      .post("api/blog/suscribe", data)
      .then((res) => {
        console.log(res.status);
        setErrorMsg("");
        e.target.reset();
        closeModal.current.click();
      })
      .catch((err) => setErrorMsg(err.response.data.msg));
  };

  return (
    <>
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <span type="button" data-toggle="modal" data-target="#subscription">
              Suscribete
            </span>
          </div>
          <div className="col-4 text-center">
            <Link className="blog-header-logo text-dark" to="/">
              El Milenial
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="text-muted" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-3"
              >
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
              </svg>
            </a>
            {/* <Link className="btn btn-sm btn-outline-secondary" href="#">
              Sign up
            </Link> */}
          </div>
        </div>
      </header>

      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <Link className="p-2 text-muted" to="/">
            Home
          </Link>
          <Link className="p-2 text-muted" to="/categoria/programacion">
            Programación
          </Link>
          <Link className="p-2 text-muted" to="/categoria/musica">
            Música
          </Link>
          <Link className="p-2 text-muted" to="/categoria/cronicas">
            Crónicas
          </Link>
          <Link className="p-2 text-muted" to="/categoria/articulos">
            Artículos
          </Link>
          <Link className="p-2 text-muted" to="/categoria/literatura">
            Literatura
          </Link>
          <Link className="p-2 text-muted" to="/categoria/opinion">
            Opinion
          </Link>
          <Link className="p-2 text-muted" to="/categoria/politica">
            Politica
          </Link>
          <Link className="p-2 text-muted" to="/categoria/otros">
            Miscelaneo
          </Link>
        </nav>
      </div>
      <div
        className="modal fade"
        id="subscription"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="subscriptionLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-content">
              <div className="modal-head m-2 text-center">
                Gracias por preferirnos :)
              </div>
              <div className="modal-body">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  className="form-control"
                  ref={register({ required: true, maxLength: 80 })}
                />
                {errors.name && (
                  <span className="text-danger">
                    Por favor ingresa tu nombre
                  </span>
                )}
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="form-control"
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />

                {errors.email && (
                  <span className="text-danger">Ingresa un correo válido</span>
                )}

                <div className="modal-footer">
                  {errorMsg ? (
                    <span className="text-danger">{errorMsg}</span>
                  ) : null}
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    ref={closeModal}
                  >
                    Cerrar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
