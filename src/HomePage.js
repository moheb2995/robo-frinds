import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Cardlist from "./card list"
import Searchbox from "./searchbox"
import './App.css'
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
// import VenueLocationIcon from './VenueLocationIcon'
// import {robots} from "./robots"


class App extends React.Component { 
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfild: '',
      ismodaldisplayed:false,
      currentUser:{},
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(item => this.setState({robots: item}),
    ) 
  }  
  
  showModal = (user) => this.setState({ismodaldisplayed:true, currentUser: user})
  hideModal = () => this.setState({ismodaldisplayed:false} )
        
  roboname = () =>this.setState({roboname:this.props.name}) 
  


  onSearchChange = (e) => {
    this.setState({searchfild: e.target.value})
  }
   
  
  render() {
    const {robots,searchfild,currentUser} = this.state
    // const  {name}=this.props
    const filterRobot = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchfild.toLowerCase())
    })

    
    return !robots.length 
      ? 
      <h1 className="loading"> loading <div className="load"></div></h1>
      :
      (<div>
        <div className="class">
          <h1 className="title">ROBO FRINDS</h1>
          <Searchbox searchChange={this.onSearchChange} />
          <hr/>
          <Cardlist  robots={filterRobot} showModal={this.showModal}/>
        </div>
        {
          this.state.ismodaldisplayed===true
          ?
          ( <div style={{position: 'relative'}}>

              <div className="black" onClick={() => this.hideModal()} ></div>

              <div className="modal">
                <button className="exit" onClick={() => this.hideModal()}>X</button>
                <Link to={`/robot/${currentUser.id}`}>
                  <button id="read">read more</button>
                </Link>
                <h4>HI {currentUser.name}</h4>
                
                <div>
                  <MapContainer
                    center={currentUser.address ? currentUser.address.geo : [37, 52]} 
                    zoom={2}
                    scrollWheelZoom={true}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />                
                    <Marker
                      // icon={VenueLocationIcon}
                      position={currentUser.address.geo}>
                      <Popup>
                       <b>I'm here</b> 
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
              </div>
          )
          :
          null
        }
        </div>
      ) 

  }
}
export default App