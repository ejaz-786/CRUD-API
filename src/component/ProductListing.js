import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductListing.css";

const ProductListing = () => {
  const [userdata, setUserdata] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((response) => response.json())
      .then((data) => setUserdata(data));
  }, []);

  console.log(userdata);
  return (
    <div>
      <h1>CRUD OPERATION ON JSON SERVER API </h1>
      <h2>GET , POST , PUT , DELETE METHOD </h2>
      <div className="wrapper">
        <button
        onClick = {()=> navigate("/product/create")}
        >
          add new +
        </button>
        <table className="mytable" style={{ width: "100%" }}>
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>email</td>
              <td>phone</td>
              <td>action</td>
            </tr>
          </thead>
          <tbody>
            {userdata &&
              userdata.map((val) => {
                return (
                    <tr key={val.id}>
                      <td>{val.id}</td>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.phone}</td>
                      <td>
                        <button>edit</button>
                        <button>remove</button>
                        <button>details</button>
                      </td>
                    </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductListing;
