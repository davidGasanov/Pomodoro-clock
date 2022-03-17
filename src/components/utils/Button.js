import React from "react";
import { useSpring, animated } from "react-spring";
import { useState } from "react";

//Icons
import { FaPlay, FaStop } from "react-icons/fa";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const Button = ({ color, type, size, func }) => {
  const styles = useSpring({ background: "#808f85" });

  const [clicked, setClicked] = useState(false);

  const clickedFunc = () => {
    func();
    if (type === "play") {
      setClicked(!clicked)
    } else {
      setClicked(true);
      setTimeout(()=>{setClicked(false)},200)
    }
  };

  const buttonType = (type) => {
    switch (type) {
      case "play":
        return <FaPlay size={90} />;
      case "stop":
        return <FaStop size={90} />;
      case "up":
        return <FiChevronUp size={45} />;
      case "down":
        return <FiChevronDown size={45} />;
    }
  };

  return (
    
      <animated.button
        clicked={clicked.toString()}
        style={styles}
        type={type}
        className={size}
        onClick={clickedFunc}
      >
        {buttonType(type)}
      </animated.button>
   
  );
};

export default Button;
