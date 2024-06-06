import React, { useState } from 'react';
import app from "../firebase/firebase";
import { getDatabase, ref, get } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import './mystyles.css'

function Read() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  let [carArray, setCarArray] = useState([]);
  let [locationArray, setLocationArray] = useState([]);

  const fetchCarData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, `users/${currentUser.uid}/cars`);
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      setCarArray(Object.values(snapshot.val()));
    } else {
      alert("error");
    }
  };

  const fetchLocationData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, `users/${currentUser.uid}/locations`);
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      setLocationArray(Object.values(snapshot.val()));
    } else {
      alert("error");
    }
  };

  return (
    <div className='text-2xl font-bold pt-14 flex flex-col items-center justify-center h-full'>
      <h1>My Bucketlist:</h1>
      <br />
      <br />
      <button className='green-button' onClick={fetchCarData}>List my cars</button>
      <ul>
        {carArray.map((item, index) => (
          <li key={index}>
            {item.carMake}: {item.carModel}
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button className='green-button' onClick={fetchLocationData}>List my locations</button>
      <ul>
        {locationArray.map((item, index) => (
          <li key={index}>
            {item.country}: {item.city}
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button className='button1' onClick={() => navigate("/")}>Add To Your List</button>
    </div>
  )
}

export default Read;