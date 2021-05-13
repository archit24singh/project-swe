import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const catagories = () => {
    return (
        <div className="catagories">
        <h1 className="py-5">CATAGORIES</h1>
            <div className="container">
                <div className="row">
                <div className="col-md-3 col-sm-6">
                        <div className="box">
    <div className="circle">< FontAwesomeIcon  className="icon" icon={faDesktop} size="2x" /></div>
                            <h3>Engineering</h3>
                            <p>All Engineering resources</p>    
                        </div>
                    </div>
                    



                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle">< FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                            <h3>Science</h3>
                            <p>All Science resources</p>
                        </div>
                    </div>
                  
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle">< FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                            <h3>Humanities</h3>
                            <p>All Humanities resources</p>
                        </div>
                    </div>

                    
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle">< FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                            <h3>Mathematics</h3>
                            <p>All Mathematics resources</p>
                        </div>
                    </div>

                   
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle">< FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /></div>
                            <h3>Litrature</h3>
                            <p>All Litrature resources</p>
                        </div>
                    </div>

                </div>
                
            </div>




                </div>
            
       
    )
}

export default catagories
