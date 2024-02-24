const Skills = () => {
    return(
        <div className="skills-wrapper">
            <h2 className="flex justify-center text-4xl">Skills</h2>
            <div className=" w-full flex justify-center ">
                <div className="w-1/4 flex justify-center p-6">
                    <div className="text-2xl text-center">Web Development
                    <img className="button my-6"
                    src="/web-dev-photo.jpg" 
                    alt="Web Dev" 
                    loading="lazy"
                    />
                    </div>
                </div>
                <div className="w-1/4 flex justify-center p-6">
                    <div className="text-2xl text-center">Other
                    <img className="button my-6"
                    src="/web-dev-photo.jpg" 
                    alt="Other" 
                    />
                    </div>
                </div>
            </div>

        
        
        
        </div>
        //make blocks "frontend" "backend" "other" which you can click
        //once clicked you see the specific skills
        //the skills go in a slide? from top right and when clicked back they go to top left
    )
}
export default Skills;