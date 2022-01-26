import React from 'react'



class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showButton: false

        }
        this.setShowButton = this.setShowButton.bind(this)
        this.scrollToTop = this.scrollToTop.bind(this)

    }

    setShowButton(){
        this.setState({
            showButton: !this.state.showButton
        })
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
          });
    }
    componentDidMount(){
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                this.setState({
                    showButton: true
                })
            } else {
                this.setState({
                    showButton: false
                })
            }
          });
    }

    render(){
        return(
            <div className="row chini">
                    <div className="col-sm-3">
                        
                    </div>
                    <div className="col-sm-8 footer">
                        
                            <div className="row footertxt"> 
                
                                <a  href="https://www.w3schools.com"
                                    id="fineprint">PRQ, Box 1092, S-172 22 Sundbyberg / info@prq.se </a>   
                
                                <a  href="https://www.w3schools.com"
                                    id="fineprint">TinyHats, Cube 1092, S-172 22 Sweden / money@tinyhats.se</a>
                
                                
                               
                                {this.state.showButton && (
        <button onClick={this.scrollToTop} id="back-to-top" className="back-to-top btn btn-light btn-lg">
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
                            </div>
                
             
                            
                          
                        
                    </div>
                    
                </div>
        )
    }
}

export default Footer