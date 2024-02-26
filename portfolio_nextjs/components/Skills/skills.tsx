"use client"
import { useState } from "react";
import "./skills.css";

const Skills = () => {
  const [showButtonWrapper, setShowButtonWrapper] = useState(true);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName: any) => {
    setShowButtonWrapper(false);
    setSelectedButton(buttonName);
    // console.log(buttonName);
  };

  return (
    <div className="skills-wrapper">
      <h2 className="flex justify-center text-4xl">Skills</h2>
      <div className={`button-wrapper ${showButtonWrapper ? 'show' : 'hide'} flex justify-center`}>
        <div className="w-1/4 flex justify-center p-6">
          <div className="text-2xl text-center">
            Web Development
            <img
              className="button my-6"
              src="/web-dev-photo.jpg"
              alt="Web Dev"
              loading="lazy"
              onClick={() => handleButtonClick("Web Development")}
            />
          </div>
        </div>
        <div className="w-1/4 flex justify-center p-6">
          <div className="text-2xl text-center">
            Other
            <img
              className="button my-6"
              src="/web-dev-photo.jpg"
              alt="Other"
              onClick={() => handleButtonClick("Other")}
            />
          </div>
        </div>
      </div>
      {selectedButton && (
        <div className={`fade-container ${showButtonWrapper ? 'hide' : 'show'}`}>
          {selectedButton === "Web Development" && (
            <div>
              <div>Clicked Web Development</div>
            </div>
          )}
          {selectedButton === "Other" && (
            <div>
              <div>Clicked Other</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Skills;