import React from 'react';



function ProgramingLanguage(props) {
  return (
    <div className="card">
        <img className="programing--language" src={props.img} alt="programing language" />
        <h2>{props.language}</h2>
        <p>{props.description}</p>
        <button>asdgads</button>
    </div>
  )
}

export default ProgramingLanguage;
