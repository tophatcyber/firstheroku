import React from 'react'
import './newart.css'

class Newarticle extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title: this.props.title,
            body: this.props.body,
            image: this.props.image,
        }
    }

    render(){
        return(
            <div className='container-fluid text-center'>
                <div className="row">
                    <h1>{this.state.title}</h1>
                </div>
                <div className='square'>
                    <div><img className='img-fluid' src={this.state.src} alt="abt image"/></div>
                    {this.state.body.paragraphs.map(para => (
                    <p>{para}</p>


                    ))}


                </div>

            </div>
        )
    }
}


export default Newarticle
