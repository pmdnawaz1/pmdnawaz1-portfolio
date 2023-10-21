import React from "react";
// import { BsFillTelephoneFill } from "react-icons/bs";
import { 
  // AiOutlineMail,, AiFillInstagram
 AiFillLinkedin ,AiOutlineGithub } from "react-icons/ai";
const TopHeader = () => {
  const items = [
    // { icon: <BsFillTelephoneFill />, description: "+91 9133406362" },
    // { icon: <AiOutlineMail />, description: "pmdnawaz@gmail.com" },
    { icon: <AiOutlineGithub/>, description: "Github" },
    { icon: <AiFillLinkedin/>, description: "Linkedin" },
    // { icon: <AiFillInstagram/>, description: "Instagram" },
  ];
  
  return (
    <div className="mx-3 py-5 text-center">
      <div className="flex flex-wrap justify-between">
        <div className="bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text text-transparent font-bold text-2xl">
          Full stack web developer
        </div>
        <ul className="flex flex-wrap gap-2 md:gap-8 justify-center text-center">
          {items.map(({ icon, description }, index) => (
            <li key={index} className="flex items-center gap-2">
              <span>{icon}</span>
              <span>{description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TopHeader;