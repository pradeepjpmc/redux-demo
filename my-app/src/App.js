import React, { Component } from 'react'
import  './App.css';
import {connect} from 'react-redux';
class App extends Component {

  render(props) {
    console.log(this.props);
    return (
     <div className='App'>
       <h1>Hi This is App</h1>
    <h1>Hi This is my name {this.props.myName}</h1>
    <button onClick={()=>{this.props.changeName("Pradeep Gupta")}}>Click Me</button>
       </div>
    )
  }
}
 const mapStateToProps= (state) =>{
   
return {
  
  myName: state.name
}
 }

 const mapDispatchToProps = (dispatch)=>{
   return{
     changeName:(name)=>{dispatch({type:'CHANGE_NAME', payload:name})}
   }
 }
export default connect(mapStateToProps, mapDispatchToProps)(App);
//ReactDOM.render(<App />,  document.getElementById("root"));

