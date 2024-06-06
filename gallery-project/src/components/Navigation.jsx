import React from 'react'
import {Link} from 'react-router-dom'
import Coche1 from './Coche1'
import Coche3 from './Coche3'
import Coche2 from './Coche2'
import Coche4 from './Coche4'
import Coche5 from './Coche5'
import Coche6 from './Coche6'
import Coche7 from './Coche7'
import Coche8 from './Coche8'
import Coche9 from './Coche9'
import Coche10 from './Coche10'

export const Navigation = () => {
  return (
    <div className="container mt-4 father">
      <Link to='/Coche1'>
        <figure className="image-size">
          <Coche1 />
          <figcaption>Coche1</figcaption>
        </figure>
      </Link>
      <Link to='/Coche2'>
        <figure className="image-size">
          <Coche2 />
          <figcaption>Coche2</figcaption>
        </figure>
      </Link>
      <Link to='/Coche3'>
        <figure className="image-size">
          <Coche3 />
          <figcaption>Coche3</figcaption>
        </figure>
      </Link>
      <Link to='/Coche4'> 
        <figure className="image-size">
          <Coche4 />
          <figcaption>Coche4</figcaption>
        </figure>
      </Link>
      <Link to='/Coche5'>
        <figure className="image-size">
          <Coche5 />
          <figcaption>Coche5</figcaption>
        </figure>
      </Link>
      <Link to='/Coche6'>
        <figure className="image-size">
          <Coche6 />
          <figcaption>Coche6</figcaption>
        </figure>
      </Link>
      <Link to='/Coche7'>
        <figure className="image-size">
          <Coche7 />
          <figcaption>Coche7</figcaption>
        </figure>
      </Link>
      <Link to='/Coche8'>
        <figure className="image-size">
          <Coche8 />
          <figcaption>Coche8</figcaption>
        </figure>
      </Link>
      <Link to='/Coche9'>
        <figure className="image-size">
          <Coche9 />
          <figcaption>Coche9</figcaption>
        </figure>
      </Link>
      <Link to='/Coche10'>
        <figure className="image-size">
          <Coche10 />
          <figcaption>Coche10</figcaption>
        </figure>
      </Link>
    </div>
  )
}
