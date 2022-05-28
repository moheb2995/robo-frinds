import React from "react";

 const Card =({showModal, robot})=>{

  const {name, id , email} = robot

  return (
    <div className="card" onClick={() => showModal(robot)}>
      <img src={`https://robohash.org/${id}?200x200" alt="robot`} />
      <div> 
        <h2>{name} </h2>
        <p>{email} </p>
      </div>
    </div>
  );
}

export default Card   