import React, { useState, useRef,useEffect } from 'react'
import Navbar from './Navbar'
import "./Container.css"
import Footer from './Footer'
import emailjs from '@emailjs/browser';
import mainpanel from "./Assets/panel-1.jpg"
import { MdVideoLibrary } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaSchoolFlag } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import childexp from "./Assets/image-01.jpg"
import dadchild from "./Assets/image-02.jpg"
import panel1 from "./Assets/panel size.png"
import { AiFillSound } from "react-icons/ai";
import { MdTouchApp } from "react-icons/md";
import appImage2 from "./Assets/image-03.jpg"
import Aos from "aos";
import "aos/dist/aos.css";

const Container = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    const [view, setView] = useState("non-display")
    const [view2, setView2] = useState("app-content")
    const [heading, setHeading] = useState("Product-div-learning")
    const [heading1, setHeading1] = useState("Product-div-Teaching")





    const show = () => {
        setView("panel-content");
        setView2("non-display-app")
        setHeading("border")
        setHeading1("border2")
    }
    const show1 = () => {
        setView2("app-content")
        setView("non-display")
        setHeading("Product-div-learning")
        setHeading1("Product-div-Teaching")

    }
    return (
        <div>

            <div>
                <div className='Main-video'>
                    <div><img src={mainpanel} alt="" /></div>
                    
                    </div>
                <div className='main-tag-div'>
                    <h1>Transform learning into an exciting adventure with our Learning App, sparking your child's curiosity </h1>
                </div>
                <div className='Question-div'>
                    <div className='Question-div-img'><img src={childexp} /></div>
                    <div className='question-sub-div'>
                        <div><div className='question-sub-tag-div'>Why IDUR <span>Academy Learning</span> App</div></div>
                        <div className='points'><IoIosArrowForward /> <span>Innovative Learning Approach</span></div>
                        <div className='points'><IoIosArrowForward /><span>Personalized Education</span></div>
                        <div className='points'><IoIosArrowForward /><span>Comprehensive Curriculum Coverage</span></div>
                        <div className='points'><IoIosArrowForward /><span>Trackable Progress</span></div>
                        <div className='points'><IoIosArrowForward /><span>Parent Zone</span></div>


                    </div>
                </div>
                <div className='Product-div'><div>Products</div></div>
                <div className='products-tag'><h4>Pioneering the future of learning with art educational apps and interactive tools, crafted for the curious minds of today</h4></div>
                <div className='sub-product-div'>

                    <div className={heading} onClick={show1}>Learning</div>
                    <div className={heading1} onClick={show}>Teaching</div>
                </div>
                <div className={view2} >

                    <div className='app-content-theory' data-aos="fade-right">
                        <div>

                            <div className='panel-content-1'  >

                                <div className='bold-text'><div><b>Empowering Parents</b></div></div>
                                <div className='panel-content-sub-1'>Our Learning App offers parents insightful analytics and tools to
                                    actively participate in and enhance a child's educational journey,
                                    fostering a collaborative learning environment at home.</div>
                            </div>

                            <div className='panel-content-1' >

                                <div className='bold-text'><div><b>Enhanced Learning Support</b></div></div>
                                <div className='panel-content-sub-1'>The app includes a range of supportive features like interactive quizzes and instant feedback, enabling parents
                                    to effectively guide children through challenging topics and reinforce learning
                                    at home</div>
                            </div>

                            <div className='panel-content-1' >

                                <div className='bold-text'><div><b>Engagement Beyond Classrooms</b></div></div>
                                <div className='panel-content-sub-1'>The app bridges the gap between school and home, offering interactive and engaging content that keeps students motivated and involved in learning, even outside the classroom.
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className='app-content-image'  >
                    <img src={dadchild} data-aos="fade-left"/>
        
                        </div>
                </div>
                <div className={view}>
                    <div className='panel-content-theory'>
                        <div className='panel-content-sub-theory'>
                            <div className='panel-content-sub-theory1'>

                                <div className='panel-content-1'>

                                    <div className='bold-text'><div><b>Empowering Parents</b></div></div>
                                    <div className='panel-content-sub-1'>Our Learning App offers parents insightful analytics and tools to
                                        actively participate in and enhance a child's educational journey,
                                        fostering a collaborative learning environment at home.</div>
                                </div>
                                <div className='panel-content-1'>

                                    <div className='bold-text'><div><b>Enhanced Learning Support</b></div></div>
                                    <div className='panel-content-sub-1'> Our Learning App offers parents insightful analytics and tools to
                                        actively participate in and enhance a child's educational journey,
                                        fostering a collaborative learning environment at home.</div>
                                </div>
                                <div className='panel-content-1'>

                                    <div className='bold-text'><div><b>Engagement Beyond Classrooms</b></div></div>
                                    <div className='panel-content-sub-1'>Our Learning App offers parents insightful analytics and tools to
                                        actively participate in and enhance a child's educational journey,
                                        fostering a collaborative learning environment at home.</div>
                                </div>



                            </div>
                        </div>

                    </div>
                    <div className='panel-content-image'><img src={panel1} /></div>




                </div>
                <div className='main-Testomonial'><h2>Testimonial</h2></div>

                <div className='Testomonial'>
                    <div className='Testomonial-1' data-aos="fade-up" >
                        <div>"As a parent, it's heartwarming to see Aarav so
                            engaged with his learning. IDUR Academy has made a
                            remarkable difference in how he perceives education.
                            The interactive lessons have transformed his study time
                            into a fun and exciting activity. He's not only
                            improving ac
                            ademically but also developing a genuine love for
                            learning."
                        </div>
                        <div>
                            <div><h4>Arav's Mother</h4></div>
                            <div>Grade 2 </div>
                            
                        </div>

                    </div>
                    <div className='Testomonial-2' data-aos="fade-up" >
                        <div>"She always thought school subjects were
                            boring, but IDUR Academy changed her mind! The
                            quizzes and games make learning so much fun.
                            She especially loves science experiments and
                            math puzzles. They make her feel like a young
                            scientist and mathematician. Thanks to IDUR,
                            She is looking forward to learning new things
                            every day!"
                        </div>
                        <div>

                        <div><h4>Riya's Mother</h4></div>
                            <div>Grade 5 </div>
                        </div>

                    </div>
                    <div className='Testomonial-3' data-aos="fade-up" >
                        <div>IDUR Academy has been a game-changer for Isha.
                            Balancing multiple subjects in 7th grade was
                            overwhelming for her, but the app's personalized
                            learning paths have made it manageable and
                            enjoyable. Her confidence has soared, and her
                            grades have improved significantly. As a
                            parent, it's reassuring to see her excel
                            and become more independent in her studies.
                        </div>
                        <div>

                        <div><h4> Isha's Mother</h4></div>
                            <div>Grade 7 </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Container