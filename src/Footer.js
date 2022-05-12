import React from "react";
import "./Ft.css";

function Footer(){
   return(
       <>
<section className="footer">
      <div className="social">
        <a href="/"><i className="fab fa-instagram"> </i></a>
        <a href="/"><i className="fab fa-snapchat"> </i></a>
        <a href="/"><i className="fab fa-facebook"> </i></a>
        <a href="/"><i className="fab fa-twitter"> </i></a>
      </div>
      <ul className="list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">services</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Terms</a>
        </li>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
      </ul>
      <p className="copyright">Kindlebit Solution@2022</p>
    </section>
     </>  ) 
    }
    export default Footer;