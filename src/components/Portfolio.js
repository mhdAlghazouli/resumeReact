const Portfolio = (props) => {
  const {name, skills, link, Description } = props.project
  return ( 
    <>
          <h3>{name} ({skills.map(skill => skill)})</h3>
          <a href={link}>Github</a>
          <p>{Description}</p>
    </>
  );
}

export default Portfolio;