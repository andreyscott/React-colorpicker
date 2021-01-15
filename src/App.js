import React from "react"
import './App.css';

 class App extends React.Component {

  state = {
    color: 'purple'
  }
  onChangeHander = e => {
   this .setState({
     color: e.target.value
   })
  }
  render () {
    const styleObj = {
      background: this.state.color
    }
    return (
      <div 
      style={styleObj}
      className="container">
      <div className="ui card">
        <div className="content">
          <div className="header">
           Pick a Color : {this.state.color}
          </div>
          <div className="ssearch">
          <input type="text" 
          className="search"
        onChange={this.onChangeHander}
        value={this.state.color}
        type="text"
      />
          </div>
        </div>
      </div>
      
      </div>
    );
  }
  
}

export default App;