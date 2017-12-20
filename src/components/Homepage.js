import React from 'react';
import '../containers/EmoButtons.css';
import {Link} from 'react-router-dom';
const Home = ()=>{
  return [
    <h1>What mood are you in today?</h1>,
    <Link to ="/love"> <button className='mood'><img className='mood'src={"../src/assests/love.png"} alt="love"/></button></Link>,
    <Link to ="/party"><button className='mood'><img className='mood'src={"../src/assests/party.png"} alt="party"/></button></Link>,
    <Link to ="/peace"><button className='mood'><img className='mood'src={"../src/assests/peaceful.png"} alt="peaceful"/></button></Link>,
    <Link to ="/sad"><button className='mood'><img className='mood'src={"../src/assests/sad.png"} alt="sad"/></button></Link>
];
}
export default Home;