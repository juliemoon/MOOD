import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class BigMood extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return [
      <Link to="/">Home</Link>,
      <h1>{this.props.line1}</h1>,
      <h1>{this.props.line2}</h1>
    ]
  }
}
// const BigMood =({mood, history})=>{
//   console.log('rnrnrnnrnnnrnrnr');
//   return (<h1>{mood}</h1>);
// }

export default BigMood;