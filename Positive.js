import React from "react";
import { useEffect, useState } from "react";
import positive from "./Assets/positive.png";
export default function Positive(){
    const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Update the current date when the component mounts
    updateCurrentDate();
  }, []);

  const updateCurrentDate = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString(); // You can adjust the format as needed
    setCurrentDate(formattedDate);
  };

    return(
        <div className="positive">
            <h1>Mammograph Result Overview</h1>
             <p>Date of test : {currentDate}</p>
             <p>Result:</p>
             <img src={positive} alt="positive" style={{position:"relative",left:"-35px"}}></img>

        </div>
    )
}