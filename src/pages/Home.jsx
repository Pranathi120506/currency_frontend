import React from "react";
import Navbar from "../components/Navbar";
import Login from "./Login";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [send, setSend] = useState({
    senders_id: "rohitkumar@gmail.com",
    receiver_id: "",
    amount: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://127.0.0.1:8000/exchange/tokenexchange/",
      send,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto-mx-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">your email</h5>
            <p className="card-text">example@gmail.com</p>
            <h5 className="card-title">amount</h5>
            <p className="card-text">5000</p>
            <a href="#" className="btn btn-dark">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="container mx-auto-mx-5">
          <h1 className="text-center">send money</h1>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                receivers id
              </label>
              <input
                type="text"
                value={send.receiver_id}
                onChange={(e) =>
                  setSend({ ...send, receiver_id: e.target.value })
                }
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                amount
              </label>
              <input
                type="number"
                value={send.amount}
                onChange={(e) => setSend({ ...send, amount: e.target.value })}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-dark"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="container mx-auto-mx-5">
          <h1 className="text-center">give permission to child</h1>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                child id
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
