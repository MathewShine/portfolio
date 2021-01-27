import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
            <a href="https://www.facebook.com/shinemathew.mathew.90" target="_blank">
               <div className="image">
                    <img
                        src={`${process.env.PUBLIC_URL}/fb-logo.png`}
                        alt="Facebook-icon"
                    />
               </div>
                  
            </a>
            <a
                href="https://www.linkedin.com/in/shine-mathew23/" target="_blank"
            >
                <div className="image">
                  <img
                    src={`${process.env.PUBLIC_URL}/linkdin-logo.jpg`}
                    alt="LinkIn-icon"
                  />
                </div>
               
            </a>
            
            <a href="https://www.instagram.com/jr_mathew_23/" target="_blank">
                <div className="image">
                    <img
                        src={`${process.env.PUBLIC_URL}/instagram-logo.png`}
                        alt="Instagram-icon"
                    />
                </div>
               
            </a>
    </div>
   
  );
};

export default Footer;
