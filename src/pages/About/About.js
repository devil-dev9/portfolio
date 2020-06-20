import React from 'react';
import { Container } from 'react-bootstrap';

 const About = ()=>{
    return(
        <Container fluid >
            <div> 
                <span>Hello 👋 I'm Mate a gatsby starter which is focus on simplicity and extensibility. It's build with Gatsby(duh), Rebass (styled-component system) and Contentful.

                    The starter provides 4 customizable sections:

                    Landing: Displays a nice greeting with your name, also your roles (what you are) and all your social links.
                    About: Show the about section where you can write about who you are, what you like to do, etc. Also you can add a photo next to it!
                    Project: Displays a card for all your project that you've made and also the posibility to link with github or and external link.
                    Writting: Take the information about your medium user and show up to 6 stories as cards with the link to Medium.
                    In case you want to have your own instance of this Starter, check the Github repository! It's free 😄
                    </span>
            </div>
        </Container>
    )
}

export default About;