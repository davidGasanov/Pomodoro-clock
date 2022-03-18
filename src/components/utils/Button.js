import React from "react";
import { useSpring, animated } from "react-spring";
import { useState, useEffect } from "react";
import { Howl, Howler } from "howler";

// Sounds

import Buttonoff from "../../audio/button-off.mp3";
import Buttonon from "../../audio/button-on.mp3";


// Icons
import { FaPlay, FaStop } from "react-icons/fa";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const Button = ({ color, type, size, func, counterStatus }) => {
  const styles = useSpring({ background: "#808f85" });

  const [clicked, setClicked] = useState(false);

  const clickedFunc = () => {
    Howler.volume(0.4, 0);
    func();
    let sound;
    if (type === "play") {
      setClicked(!clicked);
      sound = new Howl({ src: clicked ? [Buttonoff] : [Buttonon] });
      sound.play();

    } else {
      setClicked(true);
      sound = new Howl({ src: [Buttonon] });
      sound.play();
      setTimeout(() => {
        setClicked(false);
        sound = new Howl({ src: [Buttonoff] });
        sound.play();
      }, 200);
    }
  };

  useEffect(()=>{if(!counterStatus){
    setTimeout(()=>{setClicked(false);},200)

  }},[counterStatus])

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
