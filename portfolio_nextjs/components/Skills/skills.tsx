"use client"
import { useEffect, useState } from "react";
import "./skills.css";

const Skills = () => {
  const [showButtonWrapper, setShowButtonWrapper] = useState(true);
  const [selectedButton, setSelectedButton] = useState(null);
  // const [showContent, setShowContent] = useState(false);

  const handleButtonClick = (buttonName: any) => {
    setShowButtonWrapper(false);
    setSelectedButton(buttonName);
    // console.log(buttonName);
    transition();
  };
  //hides buttons after 1seconds and shows other elements
  function transition() {
    setTimeout(() => {
      const button = document.querySelector(`.button-wrapper`);
      const details = document.querySelector(`.skills-details`)
      if (button) {
        button.classList.add('none');
        // setShowContent(prevShowContent => !prevShowContent);
        details?.classList.remove('none')
        // console.log(showContent);
      }
    }, 1000);
  }
  // useEffect(() => {
  //   setShowContent(false);
  //   console.log(showContent);
  // }, [selectedButton]); //reset showContent on button change
  

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
              <div className="none flex justify-center items-center flex-col skills-details">
              <h1>Web Development</h1>
                <div className="details-wrapper grid grid-cols-3 gap-4">
                  <div className="skill">
                    <div className="together flex col-span-2">
                      <img src="skills/JavaScript_logo.png" alt="JavaScript" width={150}/>
                      <img src="skills/TypeScript_logo.jpg" alt="TypeScript" width={150}/>
                    </div>
                  </div>
                  {/* add hovers/focus on them */}
                  <div className="skill col-span-1"> 
                    <img src="skills/react.png" alt="React" width={150}/>
                  </div>
                  <div className="skill col-span-1">
                    <img src="skills/tailwind.png" alt="Tailwind" width={200} className="border-2 border-green-500/50 rounded-lg p-6"/>
                  </div>
                  <div className="skill col-span-1">
                    <img src="skills/next.png" alt="Next.js" width={150}/>
                  </div>
                  <div className="skill col-span-1">
                    <img src="skills/node.png" alt="Nodejs" width={150}/>
                  </div>
                  <div className="skill col-span-1">
                    <img src="skills/java.png" alt="Java" width={150}/>
                  </div>
                  <div className="skill col-span-1">
                    <img src="skills/git.webp" alt="Git" width={150}/>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedButton === "Other" && (
            <div>
              <div className="none flex justify-center skills-details">Other</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Skills;