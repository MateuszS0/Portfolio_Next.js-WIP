"use client"

const Animation  = () => {
  return (
    <div className="wrapper w-full h-full">
        <div className="">
        <img
        src="P5-Animation.gif"
        width={500}
        height={500}
        alt="GIF"
        loading="lazy"
        />
        </div> <small className="flex justify-center">Made in p5.js</small>
        {/* maybe make it a hover over text ? */}
    </div>
  );
};

export default Animation;