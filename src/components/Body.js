import React from "react";

const Body = () => {
    const imageUrl = 'https://xbsoftware.com/wp-content/uploads/2023/03/website-development-process-full-guide-1-fb.jpg';

    return (
        <div className="relative">
            <img src={imageUrl} className="w-[700px] h-[600px] rounded" alt="Description" />
            <div className="absolute text-white font-bold text-[60px] bottom-[150px] left-[650px]">
                I'm Saba <br></br> Modebadze.<br />
                A Web Developer<br />
                based in Georgia.
            </div>
            <div className="text-white absolute bottom-[90px] left-[650px] text-[20px]">I’m probably the most passionate developer you will ever get to work with. If <br></br> you have a great project that needs some amazing skills, I’m your guy.</div>
        </div>
    );
}

export default Body;
