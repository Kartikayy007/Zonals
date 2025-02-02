import React from 'react'
import about from "../about.svg"
import "./About.css"
import SimpleImageSlider from "react-simple-image-slider";
import image1 from '../Images/tt1.jpeg'
import image2 from '../Images/tt2.jpeg'
import image3 from '../Images/tt3.jpeg'
import image4 from '../Images/tt4.jpeg'
import image5 from '../Images/tt5.jpeg'
import image6 from '../Images/tt6.jpeg'
import image7 from '../Images/tt7.jpeg'
import image8 from '../Images/tt8.jpeg'
import image9 from '../Images/tt9.jpeg'
import image10 from '../Images/tt10.jpg'
// import image10 from '../Images/tt10.jpeg'
// import image11 from '../Images/tt11.jpeg'
// import image12 from '../Images/tt12.jpeg'
// import image13 from '../Images/tt13.jpeg'

const About = () => {

    const images = [
        { url: image1 },
        { url: image2 },
        { url: image3 },
        { url: image4 },
        { url: image5 },
        { url: image6 },
        { url: image7 },
        { url: image8 },
        { url: image9 },
        { url: image10 },
        // { url: image11 },
        // { url: image12 },
        // { url: image13 },
      ];

    return (
        <div className='Main-about-data'>
            <div className='about-us-story'>
                <div  className='about-us-heading'>
                    <h1>About Us</h1>
                </div>
                <div className="para">
                    <p className='pa'>The 26<sup>th</sup> annual Ajay Kumar Garg Memorial Table Tennis
                        Tournament is to be conducted on <b>15-16 February 2025</b> at Ajay Kumar Garg Engineering
                        College in association with GATT- Affiliated with UPTTA. This tournament is state level which
                        is held every year for all professional institutions and schools of the state. Various teams mark
                        their participation in 10 different categories for men and women separately in individual and team
                        events. A huge amount is kept as the prize money.
                        Last Year the tournament had top eight State ranked Table Tennis players and 24 teams with a
                        total of 255 participants from the Cities of <b>Allahabad, Lucknow, Moradabad, Meerut, Agra, Noida
                            and Ghaziabad,</b> besides enthusiastic response from the neighbouring schools and colleges.</p>
                    <div className='about-us-image'>
                        <SimpleImageSlider
                            width={332}
                            height={250}
                            images={images}
                            slideDuration={0.7}
                            autoPlayDelay={2.5}
                            autoPlay
                            loop
                            showBullets
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About