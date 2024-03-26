import "./projects.css"

const Projects = () => {
    return(
        <>
        <h2 className="flex justify-center mt-40 text-4xl">Projects</h2>
        <div className="projects-wrapper flex justify-center">
            <div className="project">
                <a href="https://github.com/MateuszS0/PriceAlert">
                <img src="otherSkills.jpg"
                alt="PriceAlert" 
                />
                <h2 className="project-title">PriceAlert: placeholder</h2>
                </a>
            </div>
            <div className="project">
                <a href="https://github.com/MateuszS0/Map">
                <img src="otherSkills.jpg" 
                alt="Map" 
                />
                <h2 className="project-title">Map: placeholder</h2>
                </a>
            </div>
            <div className="project">
                <a href="https://github.com/MateuszS0/Random/tree/main/p5-project">
                    <img src="P5-Animation.gif" 
                    alt="FlowField" 
                    />
                    <h2 className="project-title">Flow field</h2>
                </a>
            </div>
            <div className="project">
                <a href="https://github.com/MateuszS0/Webflix">
                    <img src="otherSkills.jpg" 
                    alt="Webflix" 
                    />
                    <h2 className="project-title">Webflix: placeholder</h2>
                </a>
            </div>
            <div className="project">
                <a href="https://github.com/MateuszS0/React-Portfolio">
                    <img src="otherSkills.jpg" 
                    alt="React-portfolio" 
                    />
                    <h2 className="project-title">Portfolio V1: placeholder</h2>
                </a>
            </div>

        </div>
        </>
    )
}
export default Projects;