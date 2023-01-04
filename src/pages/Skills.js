import React from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';

import html from '../assets/images/skills-img/html.png'
import css from '../assets/images/skills-img/css.png'
import json from '../assets/images/skills-img/json.jpeg'
import reactjs from '../assets/images/skills-img/reactjs.jpeg'
import javascript from '../assets/images/skills-img/javascript.png'
import http from '../assets/images/skills-img/http.png'
import github from '../assets/images/skills-img/github.png'
import npm from '../assets/images/skills-img/npm.png'


const Skills = () => {

  const SkillsList=[
    {
     id:1,
     name:'HTML',
     imgUrl: html,
  },
  {
    id:2,
    name:'CSS',
    imgUrl: css,
 },
 {
  id:3,
  name:'JavaScript',
  imgUrl: javascript
},
 {
  id:4,
  name:'React JS',
  imgUrl: reactjs
},
 {
  id:5,
  name:'Github',
  imgUrl: github
},
 {
  id:6,
  name:'NPM',
  imgUrl: npm
},
 {
  id:7,
  name:'HTTP',
  imgUrl: http
},
 {
  id:7,
  name:'JSON',
  imgUrl: json
},
];
  return (
    <div className="projects">
      <div className="wrapper">
        {SkillsList.map((skills)=>{
          return (
            <CardGroup>
              <Card style={{ width: '18rem'}} bg='light' className='justify-content-center'>
                <Card.Body>
                  <Card.Link href={skills.link}>
                  <Card.Img variant="top" src={skills.imgUrl} />
                    <Card.Title class="text-dark fw-bold">{skills.name}</Card.Title>
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

export default Skills