import './Footer.css'


const Footer = ()=>{
    return(
        <>
            <div className='footer'>
                <span className='old'>
                    <span className='old'> Follow Disney on: </span> 
                        <span className='spann'>
                                <i className="fa fa-facebook"></i>

                                <i className="fa-brands fa-x-twitter"></i>

                                <i className="fa-brands fa-youtube"></i>

                                <i className="fa fa-instagram"></i>        

                        </span>
                </span>
                            <img src='./disney/disney.png' className='myimage-disney'/>

                <div>
                    <span>Help </span>   
                    <span>Sign Up </span> 
                    <span>Sitemap </span>  
                    <span>Terms of Use </span> 
                    <span>UK & EU Privacy Rights </span>  
                    <span>Privacy Policy  </span> 
                    <span>Cookie Policy </span>  
                    <span>Manage Your Cookie Settings </span> 
                    <span>Interest-based Ads </span>  
                    <span>Tax Strategy Statement </span> 
                    <span>Internet Safety  </span> 
                    <span>About Us </span>  
                    <span>The Walt Disney Company </span> 
                </div>
                <div className='last'>
                &copy; Disney &copy; Disney•Pixar &copy; & ™ Lucasfilm LTD &copy; Marvel. All Rights Reserved
                </div>
            </div>
        </>
    )
}

export default Footer