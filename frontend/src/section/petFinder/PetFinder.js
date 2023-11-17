import React from 'react';
import classes from './PetFinder.module.css';
import { useNavigate } from "react-router-dom";

import Button from "../../shared/UI/Button/Button";


const PetFinder = () => {

  const navigate = useNavigate();
  const lostPetFormHandler = () =>
  navigate("/lostPetForm");
   
  const findPetHandler = () =>
  navigate("/findPet");

 return (
    <div className={classes.textContainer}>
        <h1>Find Your Pet</h1>
        <p>
          Have you lost your pet, or have found one? Post it at
          <br />
          <b>
            <i> Lost & Found,</i>
          </b>
          <br />
          its free, and very easy to use!
        </p>
        <div className={classes.button}>
          <Button className="light" onClick={lostPetFormHandler}>
            Lost
          </Button>
          <Button className="dark" onClick={findPetHandler}>
            Find
          </Button>
        </div>
      </div>
 );
};

export default PetFinder;