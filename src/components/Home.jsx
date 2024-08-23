import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid text-center mt-5">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="jumbotron">
            <h1 className="display-4">Welcome to URL Shortener</h1>
            <p className="lead">
              Effortlessly create and manage your shortened URLs. Get started by
              logging in or registering a new account to shorten long links and
              track their performance.
            </p>
            <div className="btn-grp">
              <Link
                className="btn btn-primary btn-home"
                to="/login"
                role="button"
              >
                Login
              </Link>
              <Link
                className="btn btn-outline-secondary btn-home mx-2"
                to="/register"
                role="button"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
