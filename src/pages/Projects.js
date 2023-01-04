import React from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';

import proj1 from '../assets/images/project-img/proj1.png'
import proj2 from '../assets/images/project-img/proj2.png'
import proj3 from '../assets/images/project-img/proj3.png'

const Projects = () => {

  const ProjectList=[
    {
     id:1,
     name:'Video Youtube WebSite',
     imgUrl: proj1,
     description:'This is a youtube based website with Rapid API',
     link:'https://jazzy-meringue-fd4fc9.netlify.app/'
  },
  {
    id:2,
    name:'SecretPassword',
    imgUrl: proj2,
    description:'A Secret word guessing game',
    link:'#'
 },
 {
  id:2,
  name:'Next ...',
  imgUrl: proj3,
  link:'#'
},
];
  return (
    <div className="projects">
      <div className="proj-title mt-5">
        <h2>The Lis of projects</h2>
      </div>
      <div className="wrapper ">
        {ProjectList.map((project)=>{
          return (
            
            <CardGroup className='justify-content-center align-items-center '>
              <Card style={{ width: '18rem' }} bg='light' className='justify-content-center'>
                <Card.Body>
                  <Card.Link href={project.link}>
                  <Card.Img variant="top" src={project.imgUrl} />
                    <Card.Title class="text-dark fw-bold">{project.name}</Card.Title>
                    <Card.Text class="text-dark text-justify">
                      {project.description}
                    </Card.Text>
                  </Card.Link>
                </Card.Body>
              </Card>
            </CardGroup>
          )
      })}
      </div>
    </div>
  )
}

export default Projects