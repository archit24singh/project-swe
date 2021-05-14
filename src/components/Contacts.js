import React from "react";
import emailjs from "emailjs-com";


const Contacts = () => {
    

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_WE8V6s4pv20frhOsNEycU";




    const sendEmail = (e) => {
        
    
        emailjs.send(serviceID, templateID, e, userID)
          .then((result) => {
            console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }



    return (
        <div className="contacts">
         <div className="text-center">
         <h1>Contact us</h1>
         <p>Please fillup the form to issue a complaint.</p>
         </div>
         <div className="container">
             <form onSubmit={sendEmail()}>
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    {/*NAME INPUT */}
                    <div className="text-center">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    />
                    <div className="line"></div>
                    </div>
                    {/*PHONE INPUT */}
                    <div className="text-center">
                    <input
                    type="integer"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                    />
                    <div className="line"></div>
                    </div>
                    {/*EMAIL INPUT */}
                    <div className="text-center">
                    <input
                    type="email"
                    className="form-control"
                    placeholder="EMAIL ID"
                    name="email"
                    />
                     <div className="line"></div>
                     </div>
                    {/*SUBJECT INPUT */}
                    <div className="text-center">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="SUBJECT"
                    name="subject"
                    />
                    <div className="line"></div>
                    </div>
                </div>
                <div className="col-md-6 col-xs-12">
                    {/*DESCRIPTION */}
                    <div className="text-center">
                    <textarea
                    type="text"
                    className="form-control"
                    placeholder="DECRIPTION"
                    name="discription"
                    ></textarea>
                    <div className="line"></div>
                    </div>
                    <button className="btn-main-offer contact-btn" type="submit">SUBMIT</button>
                </div>
            </div>
            </form>
         </div>
        </div>
    )
}

export default Contacts;
