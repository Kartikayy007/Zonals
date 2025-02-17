import React from 'react'
import Navbar from '../Navbar/Navbar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import star from "./star1.svg"
import category from "./categories.svg"
import Footer from "../Footer/Footer"
import About from './About/About';
import Eligibility from './Eligibility/Eligibility';
import Notes from './Notes/Notes';
import Prizes from './Prizes/Prizes';
import Fee from './Fee/Fee';
import Schedule from './Schedule/Schedule';
import Last from './Last/Last';
import Video from 'react-responsive-video'
import file from './Images/file.mp4'
import file2 from './Images/file2.mp4'
import EventRecap from './EventRecap/EventRecap';

const Home = () => {

    
    return (<>
        <div className='Home'>
            <Navbar />
            <br></br>
            <div className='Bg-image' id="home">
                <div className="full-info">
                    <div className='details'>
                        <div className='Main-Heading'>
                            <h1>
                                26<sup>th</sup>  AJAY KUMAR GARG MEMORIAL
                            </h1>
                            <h1>
                                TABLE TENNIS TOURNAMENT
                            </h1>
                            <p>
                                Under the Aegis of GATT, Affiliated to UPTTA
                            </p>
                            <div className='dates'>
                                <div className='icon'>
                                    <CalendarMonthIcon fontSize='large'></CalendarMonthIcon>
                                </div>
                                <div className='text'>
                                    <h1>
                                        15-16 February 2025
                                    </h1>
                                </div>
                            </div>
                            {/* <div className='btn-pos py-2'>
                                <a href="https://www.google.com/" target={"_self"}><div className='register'>
                                    Register
                                </div></a>
                            </div> */}
                        </div>

                    </div>
                    <div className='prize'>
                        <div className='image'>
                            <img src={star}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='py-4 px-2' id='about'>
        <Video mp4={file2} 
            height={[300, 400, 480, 560].map(n => n + 'px')}
            objectFit={`contain`}/>
        </div>

        <About />
        <EventRecap />
        <Eligibility />
        <Prizes />
        <Schedule />
        <Fee />
        <Last />
        <Notes />

        <div className='organiser' id="organizers">
            <div className='heading'>
                <h1>Entry fee and forms will be sent to undersigned</h1>
            </div>
            <div className='organizing-committee'>

                <div className='committee-list'>


                    <div className='arrange'>
                        
                          <b>  Mr. Pratap Singh (Sports Officer)</b>
                        
                    </div>


                    <div className='arrange' >
                        <div>
                            <p style={{ margin: "0", padding: "0" }}><b>Add:</b> A.K.G. Engineering College,</p>
                            <p style={{ margin: "0", padding: "0" }}> 
                            NH-24, Delhi-Hapur Bypass Road, Ghaziabad </p>
                        </div>
                    </div>


                    <div className='arrange' >
                        <div>
                        <b>Ph.</b> 0120-2762841 to 51, Extn. 4321, Fax: 0120-2767844 
                        </div>

                    </div>
                    <div className='arrange' >
                        <div>
                            <b>Mob. </b>9213709657
                        </div>

                    </div>
                    <div className='arrange' >
                        <div>
                            <b>Email:</b>  sports@akgec.ac.in
                        </div>

                    </div>

                </div>
            </div>
            
            <div className='student'>
            <div className='gap'>
                
                </div>  
                <div className='student-list'>

                <div className='arrange'>
                        <div className='student-name'>
                        <b>Sh. Rajeev Sharma (Organizing Secretary)</b>
                        </div>
                    </div>

                   
                    <div className='arrange' >
                    <div>
                            <p style={{ margin: "0", padding: "0" }}><b>Add:</b> A.K.G. Engineering College,</p>
                            <p style={{ margin: "0", padding: "0" }}> 
                            NH-24, Delhi-Hapur Bypass Road, Ghaziabad </p>
                        </div>
                    </div>


                    
                    <div className='arrange' >
                        <div>
                            <b>Mob. </b>9818085060
                        </div>

                    </div>
                    <div className='arrange' >
                        <div>
                            <b>Email:</b> rajeevsharma226@rediffmail.com
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div className='organiser' id="organizers">
            <div className='organizing-committee'>
                <div className='heading1'>
                    <h1>Organizing Committee</h1>
                </div>
                <div className='committee-list1'>
                    <ul>
                        <li>
                            <div className='arrange'>
                                <div className='student-name' style={{fontFamily: "Gilroy"}}>
                                    Prof. I.P Sharma
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px" }}>
                                    (9650370337)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange' style={{fontFamily: "Gilroy"}}>
                                <div>
                                    Sh. Rajeev Sharma
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px" }}>
                                    (9818085060)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange' style={{fontFamily: "Gilroy"}}>
                                <div>
                                    Mr. Pratap Singh
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px" }}>
                                    (9213709657)
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='student'>
                <div className='heading-student'>
                    <h1>Student Convenors</h1>
                </div>
                <div className='student-list'>
                    <ul>
                        <li>
                            <div className='arrange'>
                                <div className='student-name' style={{fontFamily: "Gilroy"}}>
                                    Prateek Singh
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange' style={{fontFamily: "Gilroy"}}>
                                <div>
                                    Srishti Gupta
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange' style={{fontFamily: "Gilroy"}}>
                                <div>
                                    Jay Singh
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange' style={{fontFamily: "Gilroy"}}>
                                <div>
                                    Kanishk Upadhyay
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>

    </>
    )
}

export default Home