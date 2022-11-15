import Jobs from "./Jobs";
const experience = [
  {
    id:1,
    pos: "Software Technician Volunteer",
    comp: "RefCode",
    des: ["Collaborated on a website for ASPCI.org using Webflow.","Helped mentoring students with HTML, CSS and JavaScript projects"]
  },
  {
    id:2,
    pos: "Store Manager",
    comp: "Zz Mattress outlet / Zz beds and furniture / Home furniture outlet",
    des: ["Balancing the books using Excel to accurately report income, profit, and expenses to owners.","Selling furniture and finalizing sales for customers.", `Managing inventory, generating sales reports and researching new vendors to reduce costs
    and manage merchandise availability.`]
  }
]

const Experience = (props) => {
  return ( 
    <div>
      <h2 style={{color: props.color}}>Experience</h2>
      {experience.map(job => {
        return (
          <Jobs key={job.id} jobs={job} />
        )
      })}
    </div>

  );
}

export default Experience;