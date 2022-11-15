const Jobs = (props) => {
  const {pos, comp, des} = props.jobs
  return ( 
    <>
      <h3>{pos}</h3>
      <h4>{comp}</h4>
      {des.map(des => {
        return (
          <p>{des}</p>
        )
      })}
    </>
  );
}

export default Jobs;