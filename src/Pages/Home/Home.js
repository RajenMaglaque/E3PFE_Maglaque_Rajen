//Code for the user profile
import React from 'react';
import Header from '../../Components/Header/Header';
const Home = ({handleLogged}) => {
    return(
        <div>
            <Header isLogged={handleLogged}/>
            <h1>Welcome!</h1>
            <h3> Name: Maglaque, Rajen Hanwel T.</h3>
            <h3> Section: 32E1</h3>
            <h3> Course: Bachelor of Science in Information and Technology</h3>
            <h3> Hobbies: Watching anime, playing video games, listening to music, Watching youtube</h3>
        </div>
    )
}

export default Home;