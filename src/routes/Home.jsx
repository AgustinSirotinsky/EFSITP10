//React
import { Link } from "react-router-dom";
import { React, useEffect, useState } from "react";

//Other
import proyectos from "../components/proyectos.json"; //Importar el JSON de proyectos

export default function Home() { 

    useEffect(() => {
        console.log(proyectos);
    }, [])

    return (
        <div>
      <h1>Project List</h1>
      <ul>
        {proyectos.map((project) => (
          <li key={project.ID}>
            <h2>{project.Nombre}</h2>
            <p>{project.Descripcion}</p>
            <p>Fecha: {project.Fecha}</p>
            <p>Tecnologias: {project.Tecnologias}</p>
          </li>
        ))}
      </ul>
    </div>
    )
}