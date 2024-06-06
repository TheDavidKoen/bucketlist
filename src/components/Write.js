import React, { useState } from 'react';
import app from "../firebase/firebase";
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext/index';
import './mystyles.css'

function Write() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");
  let [inputValue3, setInputValue3] = useState("");
  let [inputValue4, setInputValue4] = useState("");

  const saveCarData = async () => {
    const db = getDatabase(app);
    const userCarRef = ref(db, `users/${currentUser.uid}/cars`);
    const newDocRef = push(userCarRef);
    set(newDocRef, {
      carMake: inputValue1,
      carModel: inputValue2
    }).then(() => {
      alert("Your car has been added.");
      setInputValue1(""); // Reset input value for car make
      setInputValue2(""); // Reset input value for car model
    }).catch((error) => {
      alert("error: ", error.message);
    })
  };

  const saveLocationData = async () => {
    const db = getDatabase(app);
    const userLocationRef = ref(db, `users/${currentUser.uid}/locations`);
    const newDocRef = push(userLocationRef);
    set(newDocRef, {
      country: inputValue3,
      city: inputValue4
    }).then(() => {
      alert("Your location has been added.");
      setInputValue3(""); // Reset input value for country
      setInputValue4(""); // Reset input value for city
    }).catch((error) => {
      alert("error: ", error.message);
    })
  };

  return (
    <div>
      <h1>Add a car to your bucketlist:</h1>
      <br />
      <input placeholder="Car's Make" type='text' value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)} className="underline" />
      <br />
      <br />
      <input placeholder="Car's Model" type='text' value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)} className="underline" /> <br />
      <br />
      <button onClick={saveCarData} className="green-button">Add</button>
      <br />
      <br />
      <h1>Add a place you would like to travel to:</h1>
      <br />
      <input placeholder="Name a country" type='text' value={inputValue3}
        onChange={(e) => setInputValue3(e.target.value)} className="underline" />
      <br />
      <br />
      <input placeholder="Name a city in this country" type='text' value={inputValue4}
        onChange={(e) => setInputValue4(e.target.value)} className="underline" /> <br />
      <br />
      <button onClick={saveLocationData} className="green-button">Add</button>
      <br />
      <br />
      <br />
      <button className='button1' onClick={() => navigate("/read")}>View Your List</button>
    </div>
  )
}

export default Write;