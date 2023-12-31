//React
import { Link } from "react-router-dom";
import { React, useEffect, useState } from "react";

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Other
import proyectos from "../components/proyectos.json"; //Importar el JSON de proyectos

//Imagenes (traigo solo 3 porque esas son las que necesito para esta pagina)
import StudentBites from "../images/StudentBites.png"
import EcoQuiz from "../images/EcoQuiz.png"
import SpotiBD from "../images/SpotiBD.png"


export default function Home() { 
  let ImagenesArray = [StudentBites, EcoQuiz, SpotiBD];	
    useEffect(() => {
        console.log(ImagenesArray);
    }, [])

    return (
      <Container>
      <h1>PORTAFOLIO 😈🤓</h1>
      <Row>

        {proyectos.slice(0, 3).map((project) => (
          <Col key={project.ID}>
            <Card>
              <Card.Img
                variant="top"
                src={ImagenesArray[project.ID]}
                alt={project.Nombre}
              />
              <Card.Body>
                <Card.Title>{project.Nombre}</Card.Title>
                <Card.Text>{project.Descripcion}</Card.Text>
                <Card.Text>Fecha: {project.Fecha}</Card.Text>
                <Card.Text>Tecnologias: {project.Tecnologias}</Card.Text>
                <Card.Text>Github: {project.Link}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    )
}