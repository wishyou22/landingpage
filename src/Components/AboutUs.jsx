import React from 'react';
import "./AboutUs.css"
import hands from "../Components/Assets/people-stacking-hands-together-park.jpg"
import ceo from "./Assets/IDUR Academy logo 1a.png"

const AboutUs = () => {
    return (
        <div>


            <div>

                <div>
                    <div>
                        <div className='Vision-div'>
                            <div className='vision-content-div'>

                                <div className='Vision-tittle'>Our Vision</div>
                                <div className='Vision-content'><div>Our vision is to revolutionize the way
                                    people learn by providing a platform that transcends traditional boundaries. We envision a future where anyone, any
                                    where, can access high-quality education that's tailored to their unique needs. By harnessing the power of technology
                                    and human expertise, we aim to create a global community of lifelong learners
                                    who are inspired to explore, question, and achieve their full potential.</div>
                                </div>

                            </div>
                            <div className='hand'><img src={hands} /></div>

                        </div>
                    </div>



                </div>
                <div className='words'><h1>Words by Directors</h1></div>
                <div className='ceo-statement-main-div'>
                    <div className='ceo-statement'>

                        <div className='ceo-img'>
                            <img src={ceo}/>
                        </div>
                        <div className='ceo-content'>



                            <div>Welcome to IDUR Academy</div>

                            <div>From the desk of our Directors:

                                At IDUR Academy, we're dedicated to transforming the way children learn. Our mission is to blend academic excellence with the fun and engagement of digital learning, making education a joyous journey for every student.

                                As parents, you are key partners in this journey. Our platform is designed to support you in guiding your child's learning, offering tools to track progress and engage with their educational experience.

                                Thank you for choosing IDUR Academy. Together, we're setting the stage for a lifetime of learning and discovery.
                            </div>

                            <div>
                                Warm regards,
                               <h4> IDUR Academy</h4>
                            
                            </div>

                       </div>


                    </div>



                </div>
                <div className='Mission-div'>
                    <div>
                        <div className='Mission-tag'>Our Mission</div>
                        <div className='Mission-content-tag'>

                            At IDUR, we empower learners of all ages through
                            innovative educational tools. Our mission is to deliver accessible,
                            engaging, and effective learning experiences, shaping a brighter future for all.
                            Committed to excellence, we provide a diverse range of opportunities that
                            transcend traditional boundaries. By harnessing cutting-edge tools, we foster a dynamic
                            and inclusive learning environment, catalyzing personal and professional growth. Join us in our journey towards educational
                            excellence as we pave the way for a brighter and more empowered tomorrow

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AboutUs