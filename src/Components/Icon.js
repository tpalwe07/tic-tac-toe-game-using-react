import React from "react";
import { BsCircle,BsFillPencilFill } from 'react-icons/bs';
import {ImCross}from 'react-icons/im';

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <BsCircle size={40} />;
    case "cross":
      return <ImCross size={40} />;
    default:
      return <BsFillPencilFill size={40} />;
  }
};

export default Icon;