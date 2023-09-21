import React from 'react'

export default function Country(props) {
    return (
        <div className='col-sm-3 mt-2'>
            <div className="card">
                <img src={props.country.flags.svg} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{props.country.name.common}</h5>
                </div>
            </div>
        </div>
    )
}
