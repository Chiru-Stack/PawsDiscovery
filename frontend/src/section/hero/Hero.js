
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

import classes from "./Hero.module.css";

const Hero = () => {

 return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <div className={classes.pawprint}>
          <FontAwesomeIcon className={classes.paw} icon={faPaw} />
          <FontAwesomeIcon className={classes.paw} icon={faPaw} />
          <FontAwesomeIcon className={classes.paw} icon={faPaw} />
          <FontAwesomeIcon className={classes.paw} icon={faPaw} />
          <FontAwesomeIcon className={classes.paw} icon={faPaw} />
          <FontAwesomeIcon className={classes.paw} icon={faPaw} />
          <FontAwesomeIcon className={classes.paw} icon={faPaw} />
          <FontAwesomeIcon className={classes.paw} icon={faPaw} />
        </div>
      </div>
    </div>
 );
};

export default Hero;