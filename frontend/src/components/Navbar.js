import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import NavList from "./NavList";
import SubscriptionModal from "./SubsModal";

const Navbar = () => {
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
            {/* <Link className="btn btn-sm btn-outline-secondary" href="#">
              Sign up
            </Link> */}
          </div>
        </div>
      </header>
      <NavList />
      <SubscriptionModal />
    </>
  );
};

export default Navbar;
