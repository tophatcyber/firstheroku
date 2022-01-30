import React  from 'react'
 
import './card.css'
import {Link} from 'react-router-dom'



class Cardds extends React.Component{






render()
{
return(

<div className='row yan'> 
<div className="cards">
<div className="card content">
    <div className="card-content">
      <div className="card-img">
        <img src="https://source.unsplash.com/900x300/?cryptocurrency" alt="Gamer"/>
      </div>
      <div className="card-label">Crypto News</div>
      <Link to={this.tuja("initaly i wasnt aware?")}> <div className="card-title">
        stay ahead with latest news in cryptocurrency
      </div> </Link>
    </div>
  </div>
  <div className="card content">
    <div className="card-content">
      <div className="card-img">
        <img src="https://source.unsplash.com/900x300/?bitcoin" alt="bitcoin"/>
      </div>
      <div className="card-label">
        Bitcoin
      </div>
      <Link to={this.tuja("first of all")}>  <div className="card-title">
        Bitcoin Mining: the future
      </div></Link>
    </div>
  </div>
  <div className="card content">
    <div className="card-content">
      <div className="card-img">
        <img src="https://source.unsplash.com/900x300/?ethereum" alt="ethereum"/>
      </div>
      <div className="card-label">
        Ethereum
      </div>
      <Link to={this.tuja("finalwork")}> <div className="card-title">
        Ethereum what lies ahead
      </div> </Link>
    </div>
  </div>
  <div className="card form">
    <Link to="/signup"><div className="form-title">Sign Up</div></Link>
  </div>
</div>


</div>






)}
}


export default Cardds
