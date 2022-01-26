import React from "react";
import './Featured.css';
import {Link} from "react-router-dom";

class Featured extends React.Component{
render(){
    return(
        <article className="postcard dark blue">
            <Link className="postcard__img_link" to="/postslist">
                <img className="postcard__img" src={'https://source.unsplash.com/1000x1000/?bitcoin,ethereum,cryptocurrency'} alt="Title" /></Link>
            <div className="postcard__text">
                <span className="postcard__title blue"><Link to="/">Welcome to illeagle</Link></span>
                <div className="postcard__subtitle small">
                    <span >
                    <i className="fa fa-user" aria-hidden="true">  </i> <span>
                          Brian CEO, illeagle
                    </span>
                    </span>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                We are a specialized hosting provider, located in Sweden, a free-speech haven.
We serve a growing community of international clients with special needs.
We are a specialized hosting provider, located in Sweden, a free-speech haven.
We serve a growing community of international clients with special needs.
                </div>
                
            </div>
        </article>
    )
}




}

export default Featured;