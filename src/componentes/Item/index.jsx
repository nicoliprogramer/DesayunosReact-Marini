import { Link } from 'react-router-dom';
import React from 'react'

const Item = ({ info }) => {

  return (
    <div className="col-md-2 mt-2">
      <div className='card-group'>
        <div className="card">
          <img src={info.img} alt="" className='card-img-top' />
          <div className='card-body'>
            <Link to={`/detalle/${info.id}`} className='film'>
              <h4 className='card-title'>{info.title}</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Item;