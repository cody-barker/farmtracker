import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditFarm({ allFarms, setAllFarms }) {
  let { id } = useParams();
  id = parseInt(id);
  let navigate = useNavigate();

  const farm = allFarms.find((f) => f.id === id);

  const [inputState, setInputState] = useState({
    farmName: "",
    farmCity: "",
    farmState: "",
    render: false,
  });

  const { farmName, farmCity, farmState, render } = inputState;

  const updatedFarm = {
    name: farmName,
    city: farmCity,
    state: farmState,
  };

  if (farm && !render) {
    setInputState({
      ...inputState,
      farmName: farm.name,
      farmCity: farm.city,
      farmState: farm.state,
      render: !render,
    });
  }

  function onInputChange(e) {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  }

  function onUpdateFarm(e) {
    e.preventDefault();
    fetch(`/farms/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFarm),
    })
      .then((r) => r.json())
      .then((patchedFarm) => {
        const updatedFarms = allFarms.map((farm) => {
          if (farm.id === id) {
            return patchedFarm;
          } else {
            return farm;
          }
        });
        setAllFarms(updatedFarms);
      })
      .then(navigate(`/farms/${id}`));
  }

  if (!farm) {
    return <p className="alert warning">"Loading..."</p>;
  }

  return (
    <div>
      <h3>Edit {farm.name}</h3>
      <div className="update-a-farm-container">
        <form onSubmit={onUpdateFarm}>
          <label>
            Farm Name
            <input
              required
              onChange={onInputChange}
              name="farmName"
              value={farmName}
              type="text"
            ></input>
          </label>

          <label>
            City
            <input
              onChange={onInputChange}
              name="farmCity"
              value={farmCity}
              type="text"
            ></input>
          </label>

          <label>
            State
            <input
              onChange={onInputChange}
              name="farmState"
              value={farmState}
              type="text"
            ></input>
          </label>

          <button className="update-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditFarm;
