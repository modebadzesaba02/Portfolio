import React from "react";
const Edu = () => {

    return(
     <div className="bg-black p-12 text-white pb-[150px]" >
        <div className="text-[50px]">Education i got <br></br> in Web Development</div>
        <div className="container mx-auto flex justify-between items-center pt-12">
        <div >
            <div><h1 className="text-[100px]">01</h1> <h2 className="text-[30px]"><i className="text-pink-800">Student</i> at Tbilisi State Univeristy</h2> <h3>Currently I am a student<br></br> and learning computer science</h3></div>
        </div>

        <div>
            <div><h1 className="text-[100px]">02</h1> <h2 className="text-[30px]"><i className="text-blue-800">Digital</i> institute</h2> <h3>Receantly i complited a course<br></br> of React web development in Digital institute</h3></div>
        </div>

        <div>
            <div><h1 className="text-[100px]">03</h1> <h2 className="text-[30px]"><i className="text-green-800">Self</i> education</h2> <h3>I currently am the lead designer on the<br></br> interaction design team for Google Play.</h3></div>
        </div>
        </div>
     </div>
    );
}
export default Edu;
