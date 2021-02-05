import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import instance from "../util/axios";

const SubscriptionModal = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const { register, handleSubmit, errors } = useForm();

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
              Gracias por preferirnos
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
                <span className="text-danger">Por favor ingresa tu nombre</span>
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
  );
};

export default SubscriptionModal;
