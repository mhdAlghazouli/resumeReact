import Portfolio from "./Portfolio";
const projects = [
  {
    id:1,
    name: "To-do List",
    skills: ["Node.js,", "Express,", "JavaScript,", "MongoDB,", "Mongoose,", "EJS,", "Bulma,", "CSS,", "JWT"],
    link: "#",
    Description : "A simple to-do list app for simple lives."
  },
  {
    id:2,
    name: "K.M.E Real-Estate",
    skills: ["JavaScript,", "HTML,", "CSS,", "Bulma,", "REST API"],
    link: "#",
    Description : "Lets users search for a property and view estimated property values (group project)"
  }
]

const Projects = (props) => {

  return ( 
    <div>
      <h2 style={{color: props.color}}>Projects</h2>
      {projects.map(project => {
        return(
          <Portfolio key={project.id} project={project} />
        )
      })}
    </div>
  );
}

export default Projects;