import React from 'react'
import "./Footer.css"
import logo1 from "./Assets/stroked logo.png"
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import footer from "./Assets/croped.jpg";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import ReactWhatsapp from 'react-whatsapp';
import { Link } from 'react-router-dom';
const Footer = () => {
    
    return (
        <div>
            <div>

                <div className='footer-image-div'><img src={footer} alt="footer image" /></div>
                <div className='footer-content'>


                    <div className='footer-div-1'>
                        <div className='footer-logo'><img src={logo1}></img></div>
                        <div className='connection-div'>
                            <div><a href="https://www.instagram.com/iduracademy/" target='blank'><FaInstagramSquare size={20}/></a> </div>
                            <div><a href="https://www.linkedin.com/company/idur-global-tech-solutions-pvt-ltd/" target='blank'> <FaLinkedin size={20}/></a>  </div>
                            <div><a href='https://www.facebook.com/profile.php?id=61550020842162&mibextid=LQQJ4d' target='blank'> <FaFacebook size={20}/></a>  </div>
                            <div><ReactWhatsapp  className="ReactWhatsapp" number='+919606023987' message='hi'><IoLogoWhatsapp  size={20}/></ReactWhatsapp> </div>


                        </div>



                    </div>
                    <div className='footer-div-2'>
                        <div><h3>Company</h3></div>
                        <div>Refund Policy</div>
                        <div>Joins us</div>
                        <div>Blog</div>

                    </div>
                    <div className='footer-div-3'>
                        <div><h3>Products</h3></div>
                        <div className='sub-footer-div-3'>
                            <div className='sub-logo-footer-div-3' ><FaGooglePlay size={40} /> </div>
                            <div className='sub-content-footer-div-3'>
                                <a href="https://play.google.com/store/apps/details?id=com.iduracademylearning&pcampaignid=web_share&pli=1">
                                <div>get it on </div>
                                <div>play store</div>
                                </a>
                            </div>

                        </div>
                        <div className='sub-footer-div-3'>
                            <div className='sub-logo-footer-div-3' ><FaApple size={40}/></div>
                            <div className='sub-content-footer-div-3'><div>Coming Soon</div>
                                <div>App store</div>
                            </div>

                        </div>
                        
                    </div>
                    <div className='footer-div-4'>
                        <div><h3>Get in touch</h3></div>
                       <div className='adress'>
                        <div ><IoLocationSharp /></div>
                        <div> <div>No 84, Nost Building, 13th Cross, Post, Ganga Nagar, </div>
                            <div> RT Nagar, Bengaluru, Karnataka 560032</div></div>


                       </div>
                        <div> <IoCallSharp />  +919403890225</div>
                        <div><IoMail />  contact@iduracademy.com</div>

                    </div>
                </div>

            </div>
            <div className='terms'>
                
                <h4><Link to="/TermOfUse">Term of Use</Link> |  <Link to="/PrivacyStatment"> Refund Policy </Link>  |   <Link to="/PrivatePolicy" >Privacy Statement</Link></h4>
                <h4>© 2023 IDUR Academy. All Rights Reserved</h4>
            
            
            
            </div>

        </div>
    )
}

export default Footer