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
import Calendar from "../images/Calendar.png"
import TaskList from "../images/TaskList.png"
import AA2022 from "../images/AA2022.png"


export default function Proyectos() { 

    //El array tiene q estar en orden pq se rige por los IDs
  let ImagenesArray = [StudentBites, EcoQuiz, SpotiBD, Calendar, TaskList, AA2022];

    return (
      <Container>
      <Row>

        {proyectos.map((project) => (
          <Col key={project.ID} xs={12} sm={6} md={4}>
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