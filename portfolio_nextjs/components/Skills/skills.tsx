const Skills = () => {
    return(
        <div className="skills-wrapper">
            <h2 className="flex justify-center text-4xl">Skills</h2>
            <div className=" w-full flex justify-center">
            <div className="w-1/4 flex justify-center">
                <div className="text-2xl">Web Development
                <img 
                src="" 
                alt="" 
                />
                </div>
            </div>
            <div className="w-1/4 flex justify-center">
            <div className="text-2xl">Other
                <img 
                src="" 
                alt="" 
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