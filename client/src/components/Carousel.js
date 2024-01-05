import React from 'react'

export default function Carousel() {
  return (
    <div><div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
    <div className="carousel-inner" id='carousel'>
    <div className="carousel-caption" id='carousel' style={{zIndex :"10"}}>
    <form className='d-flex'>
        <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search'/>
        <button className='btn btn-outline-info text-white bg-info' onClick={(e) => alert('clicked')} >Search</button>
    </form>
    </div>
      <div className="carousel-item active">
        <img src="https://source.unsplash.com/random/900x700/?food" className="d-block w-100" alt="..." style={{filter: "brightness(80%)" }}/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900x700/?cake" className="d-block w-100" alt="..."  style={{filter: "brightness(80%)" }}/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..."  style={{filter: "brightness(80%)" }}/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900x700/?biriyani" className="d-block w-100" alt="..."  style={{filter: "brightness(80%)" }}/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100" alt="..."  style={{filter: "brightness(80%)" }}/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900x700/?noodles" className="d-block w-100" alt="..."  style={{filter: "brightness(80%)" }}/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}
