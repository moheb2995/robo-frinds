import React from "react";
import Card from "./card";

const Cardlist = ({robots, showModal}) => {

  const cardcomponets = robots.map((rob, i)=>{
    return <Card key={i} robot={rob} showModal={showModal} />
  })

  return(
    <div >
    {cardcomponets}
    </div>
  )
}
export default Cardlist