import React  from 'react';
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import Mainfaqss from "./Mainfaqss";
import Blog from "./Blog";
import BlogArticle from "./BlogArticle";
import cardsdata from "./cardsdata";
import AboutBrian from "./AboutBrian";
import newart from "./newart";
import Newarticle from "./Newarticle";

import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';





class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: cardsdata, 
      cards: newart


  }
    this.tuja = this.tuja.bind(this)

  }

  tuja(smtxt){
      var moto = encodeURIComponent(smtxt)


      var uri  = `/${moto}`
     
      return uri


  }
  
  render(){
   
    return ( 
    
      
       
        
         <Router>
           
        
           <Routes>
          
           {this.state.posts.map(post => (
                         
                        
                         <Route key={post.id} exact path={this.tuja(post.title)} element={<BlogArticle key={post.id} title={post.title} body={post.body} author={post.author} date={post.date} src={post.src}/>} />
                     

                     
                 ))}
            

       
      <Route exact path="/blog" element={<Blog/>} />
       <Route exact path="/faqs"  element={<Mainfaqss/>} /> 
        <Route exact path="/"   element={<Home /> } />
        <Route exact path="/signup"  element={< Signup />} />
        
        <Route exact path="/signin"  element={<Signin />} />
        <Route exact path="/aboutbrian"  element={<AboutBrian/>} />


        {this.state.cards.map(card => ( <Route key={card.id} exact path={this.tuja(card.title)} element={<Newarticle key={card.id} title={card.title} body={card.body}  src={card.src}/>} />))}

        
       </Routes>
        </Router>
      
    
    )
  }
}

export default App;
