import React from "react";



const DojoDachi = ({eat, sleep, play, work, meal,fullness,energy,happiness, img}) => {
    
    return(
        <div className="container bg-success">
        <div>
        <h1 className="display-4 lead mt-5 text-light">Yoda Datchi</h1>
        <hr className="mb-5"/>
        <img src={img} alt="baby yoda" />
        <p className="lead mb-5">Meals: { meal } | Fullness : {fullness} | Energy:  {energy} | Happiness : {happiness}</p>
        </div>
        </div>
    );

}

export default DojoDachi;