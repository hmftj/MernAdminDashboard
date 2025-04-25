import React from 'react';


const Help = () => {


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
          name: e.target.name.value,
          course: e.target.course.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
        };
      
        const res = await fetch("http://localhost:5000/enroll", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      
        const result = await res.json();
        alert(result.message || result.error);
      };
      

  return (
   <><>
   {/* Latest compiled and minified CSS */}
   <link
     rel="stylesheet"
     href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
     integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
     crossOrigin="anonymous"
   />
   {/* Optional theme */}
   <link
     rel="stylesheet"
     href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css"
     integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
     crossOrigin="anonymous"
   />
   {/* Latest compiled and minified JavaScript */}
   {/*Start of Tawk.to Script*/}
   <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
   {/*End of Tawk.to Script*/}
   <title> H.M.F.T.J </title>
   <meta charSet="utf-8" />
   <meta property="og:title" content="HMFTJ" />
   <meta property="og:type" content="Media" />
   <meta property="og:url" content="https://www.hmftj.com" />
   <meta property="og:image" content="https://www.hmftj.com/images/logo.png" />
   <meta content="#2e86a9" name="theme-color" />
   <meta
     name="viewport"
     content="width=device-width, initial-scale=1, shrink-to-fit=no"
   />
   <link
     rel="apple-touch-icon"
     sizes="180x180"
     href="../images/apple-touch-icon.png"
   />
   <link
     rel="icon"
     type="image/png"
     sizes="32x32"
     href="../images/favicon-32x32.png"
   />
   <link
     rel="icon"
     type="image/png"
     sizes="16x16"
     href="../images/favicon-16x16.png"
   />
   <link rel="manifest" href="../images/site.webmanifest" />
   <div>
     <h1>
       Online/Onsite Courses By
       <img width="100px" src="https://hmftj.com/courses/Hmftj.png" />
     </h1>
   </div>
   <style
     dangerouslySetInnerHTML={{
       __html:
         "input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n} body {\n    height: 100%;\n    background-image: url(backgrounddis.svg);\n    background-size:100% 100%;\n    -o-background-size: 100% 100%;\n    -webkit-background-size: 100% 100%;\n    background-size:cover;\n}   \nh1,h2,img{text-align:center;font-weight: bold;\n  color: white;\n  background:rgba(2,70,8,0.6);\n  border-width: 3px;\n  border-style: solid;\n  border-image: \n    linear-gradient(\n      to bottom, \n      red, \n      rgba(0, 78, 0, 0)\n    ) 1 100%;}\n \ninput, select, option{background-color:rgba(23,66,54,0.5);text-align:center;color:white;border:3px solid white;font-weight: bold;}\n \n \n \n #im{\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70%;\n}\n * {box-sizing: border-box}\n\n/* Add padding to containers */\n.container {\n  padding: 16px;\n}\n\n\n\n/* Overwrite default styles of hr */\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n/* Set a style for the submit/register button */\n.registerbtn {\n  background-color: #04AA6D;\n  color: white;\n  padding: 16px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n.registerbtn:hover {\n  opacity:1;\n}\n\n/* Add a blue text color to links */\np,label{\n  color: white;\n}\na {\n  color: red;\n}\n@media screen and (max-width: 600px) {\n  label {\n    display: none;\n  }\n  #fur{\n  text-align:center;\n  padding:20px;\n  margin-bottom: 1rem;\n  }\n  input, select {\n  height: 40px;\n   margin-bottom: 1rem;\n}\n  \n}\n\n "
     }}
   />
   <div className="row" width="autopx">
     <div className="col-md-4">
       <img id="im" src="https://hmftj.com/courses/web.jpeg" />
       <button onclick="window.location.href='#fur'" className="registerbtn">
         Web Enroll!!!
       </button>
     </div>
     <div className="col-md-4">
       <img id="im" src="https://hmftj.com/courses/app.jpeg" />
       <button onclick="window.location.href='#fur'" className="registerbtn">
         App Enroll!!!
       </button>
     </div>
     <div className="col-md-4">
       <img id="im" src="https://hmftj.com/courses/grap.jpg" />
       <button onclick="window.location.href='#fur'" className="registerbtn">
         Graphics Enroll!!!
       </button>
     </div>
   </div>
   <div className="row" width="autopx">
     <div className="col-md-4">
       <img id="im" src="https://hmftj.com/courses/cyber.jpg" />
       <button onclick="window.location.href='#fur'" className="registerbtn">
         Cyber Enroll!!!
       </button>
     </div>
     <div className="col-md-4">
       <img id="im" src="https://hmftj.com/courses/iot.jpg" />
       <button onclick="window.location.href='#fur'" className="registerbtn">
         IOT Enroll!!!
       </button>
     </div>
     <div className="col-md-4">
       <img id="im" src="https://hmftj.com/courses/bus.jpg" />
       <button onclick="window.location.href='#fur'" className="registerbtn">
         Business Enroll!!!
       </button>
     </div>
   </div>
   <div>
     <form onSubmit={handleSubmit} method="POST">
       <div id="fur" className="container center">
         <h2>Please fill out the form below</h2>
         <hr />
         <label htmlFor="name">
           <b>&nbsp;Name</b>
         </label>
         <input
           type="text"
           placeholder="Enter Fullname"
           name="name"
           id="name"
           required=""
         />
         <label htmlFor="course">
           <b>&nbsp;Course</b>
         </label>
         <select name="course">
           <option value="appdevelopment">Application Deveolpment</option>
           <option value="webdevelopment">Web Development</option>
           <option value="graphicdesigning">Graphic Designing</option>
           <option value="cybersecurity">Cyber Security</option>
           <option value="businessdevelopment">Business Development</option>
           <option value="iotrobotics">IOT Robotics</option>
         </select>
         &nbsp;
         <label htmlFor="email">
           <b>Email</b>
         </label>
         <input
           type="email"
           placeholder="Enter Email"
           name="email"
           id="email"
           required=""
         />
         <label htmlFor="tel">
           <b>&nbsp;Mobile</b>
         </label>
         <input
           type="number"
           placeholder="Enter Cell"
           name="phone"
           id="email"
           required=""
         />
         <hr />
         <button type="submit" className="registerbtn">
           Register
         </button>
       </div>
     </form>
   </div>
 </>
 </>
  );
};

export default Help;