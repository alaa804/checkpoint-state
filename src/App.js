import React from "react";
import './App.css';



class App extends React.Component {

  state ={
    imgSrc: 'https://i.pinimg.com/736x/f8/2f/ba/f82fbac7514f944aacc0257445c1f89e.jpg',
    name: "ALAA TAGUIAA",
    age: 27,
    profession:"WEB DEVELOPPER",
    email: "ALOULOU864@GMAIL.COM",
    address: "NABEUL",
    isShow: true,
    isLoading: true,
  
  };
    
    // setInterval method of the component life cycle

  componentDidMount () {
    setTimeout(( ) =>  {this.setState({ isLoading :false})},3000 ); 
  }

handleshow = () => this.setState({ isShow : ! this.state.isShow });


render() {
if (this.state.isLoading  ) {
   return <h1>loading.....</h1>;
}

  const {imgSrc} = this.state
      return (
        
        <div className="App">
          <button onClick = {()=> this.handleshow()}>  {this.state.isShow ? "HIDE ME" : "SHOW ME"} </button>
        
        {this.state.isShow ?
        <React.Fragment>
        <img className="avatar rotate" src={imgSrc} alt={this.state.name} />
          <div className="text-important" >
             <h2>{this.state.name}</h2>
             <h2>AGE {this.state.age}</h2>
             <h2>{this.state.profession}</h2>
             <h2>{this.state.email}</h2>
             <h2>{this.state.address}</h2>
           </div>
        </React.Fragment>
           : null }

         
          
          
      
        </div> 
    
        
        );
   
  }

}



export default App;
