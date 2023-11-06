//React
import React from "react";
import { Link } from "react-router-dom";

export default function Home() { 

    return (
        <div className="Home">
            <div className="title">
                <h1>ECO QUIZ !!!</h1>
            </div>
                <h2>Reglas:</h2><br/>
                <h2>-Vas a tener que elegir de 2 opciones cual es la mejor para el medio ambiente</h2><br/>
                <h2>-Si le pegas pasas de ronda y conseguis 1 punto</h2><br/>
                <h2>-Si no le pegas la partida termina y volves al menu principal</h2><br/>
                <h2>-Tu objetivo es conseguir la mayor cantidad de puntos posible</h2><br/>
            {/* Boton */}      
        </div>
    )
}