import React from "react";
import flix from "../images/blog1.png";
import fli from "../images/blog2.png";
import fl from "../images/blog3.png";
// FONT AWESOME INPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//REACT POPUPS
import { PopupboxManager , PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Blogs = () => {

    //flix
    const openPopupboxflix = () => {
        const content = (
      <>
    <img className="blogs-image-popupbox" src={flix} alt="flixclose...."/>
    <p>Lorem ipsumjfwfw huhufhbuwgf</p>
    <b>OnlineBooksStore:</b> <a className="hyper-link" onClick={() => window.open("http://digital.library.upenn.edu/books/")}> http://digital.library.upenn.edu/books/</a>
      </> 
        )
      PopupboxManager.open({content})
    }
    const popupboxConfigflix = {
    titleBar: {
        enable: true,
        text: ""
    },
    fadeIn: true,
    fadeInSpeed:500
    }

    //fli
    const openPopupboxfli = () => {
        const content = (
      <>
    <img className="blogs-image-popupbox" src={fli} alt="fliclose...."/>
    <p>Lorem ipsumjfwfw huhufhbuwg jfjnjnjcnwnciwiciwf</p>
    <b>OnlineApptitude:</b> <a className="hyper-link" onClick={() => window.open("http://digital.library.upenn.edu/books/")}> http://digital.library.upenn.edu/books/</a>
      </> 
        )
      PopupboxManager.open({content})
    }
    const popupboxConfigfli = {
    titleBar: {
        enable: true,
        text: ""
    },
    fadeIn: true,
    fadeInSpeed:500
    }


    //fl
    const openPopupboxfl = () => {
        const content = (
      <>
    <img className="blogs-image-popupbox" src={fl} alt="flclose...."/>
    <p>Lorem ipsumjfwfw huhufhbuwg jfjnjnjcnwnciwiciwf kokwojfowqokowjfowjojwovjiwjvowjk</p>
    <b>Online Q and A section:</b> <a className="hyper-link" onClick={() => window.open("http://digital.library.upenn.edu/books/")}> http://digital.library.upenn.edu/books/</a>
      </> 
        )
      PopupboxManager.open({content})
    }
    const popupboxConfigfl = {
    titleBar: {
        enable: true,
        text: ""
    },
    fadeIn: true,
    fadeInSpeed:500
    }


    return (
        <div className="blogs-wrapper">
            <div className="container">
                <h1 className="h1.text-uppercase text-center py-5">BLOGS</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="blogs-image-box" onClick={openPopupboxflix}>
                    <img className="blogs-image" src={flix} alt="flix.."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="blogs-icon" icon={faSearchPlus} />
                    </div>
                
                    {/*-*/}
               
                    <div className="blogs-image-box" onClick={ openPopupboxfli}>
                    <img className="blogs-image" src={fli} alt="fli.."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="blogs-icon" icon={faSearchPlus} />
                    </div>
                    {/*-*/}
               
                    <div className="blogs-image-box" onClick={openPopupboxfl}>
                    <img className="blogs-image" src={fl} alt="fl.."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="blogs-icon" icon={faSearchPlus} />
                    </div>
                    </div>
               </div>
               <PopupboxContainer {...popupboxConfigflix}/>
               <PopupboxContainer {...popupboxConfigfli}/>
               <PopupboxContainer {...popupboxConfigfl}/>
            </div>
         
    )
}

export default Blogs
