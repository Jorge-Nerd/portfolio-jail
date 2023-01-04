import React from 'react'
import Stack from 'react-bootstrap/Stack';

import Figure from 'react-bootstrap/Figure';

import jail from '../assets/images/jail.jpeg'

const Home = () => {
  return (

    <Stack direction="horizontal" gap={3}>
      <Figure>
        <Figure.Image
          width='400px'
          height='600px'
          alt="171x180"
          src={jail}
          className='mt-5'
        />
      </Figure>
      <div className="home">
        <div className="name">
          Jailson <font>Sanches</font>
        </div>
        <div className="desc">
          <font>Front end developer</font> student
        </div>
      </div>
    </Stack>

  )
}

export default Home