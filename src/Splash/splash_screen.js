import React from "react";
import "./splash_screen.css";
import SplashAnimation from "./splash_animation.js";
import circle from "./check-circle.gif";

const PreLoader = () =>{
	return (
		<>
		
		<div class="splash-screen">
      		<h1 class="logo-header">
        		<span class="logo"><img src = {circle} alt = "" /></span><br />
        		<span class="logo">Transaction Management System</span>
      		</h1>
      	</div>
    	<SplashAnimation></SplashAnimation>
    	</>
		)
};

export default PreLoader;