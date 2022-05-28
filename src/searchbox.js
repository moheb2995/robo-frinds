import React from "react";


const searchbox =({searchfild,searchChange})=>{
  return(
    <div className="searchbox">
      <input 
      type={"text"} 
      placeholder="searchbox"
      onChange={searchChange}/>
    </div>
  )
}
export default searchbox