import React from "react";
import { useSpring, animated } from 'react-spring'

//Icons
import { FaPlay, FaStop } from "react-icons/fa";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";



const Button = ({ color, type, size, func }) => {

  const styles = useSpring({background: '#808f85'})

  const buttonType = (type) => {
    switch (type) {
      case "play":
        return <FaPlay size={90} />;
      case "stop":
        return <FaStop size={90} />;
      case "up":
        return <FiChevronUp size={60} />;
      case "down":
        return <FiChevronDown size={70} />;
    }
  };

  return (
    <div>
      <animated.button style={styles} type={type} className={size} onClick={func}>
        {buttonType(type)}
      </animated.button>
    </div>
  );
};

export default Button;
