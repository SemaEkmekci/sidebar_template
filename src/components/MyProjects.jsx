import React from 'react'

function MyProjects(props) {

  console.log(props);
  const {image,projectName} = props;
  
  return (
  <div>
    <img src={image} alt="" />
    <div>{projectName}</div>
  </div>

);
}

export default MyProjects;