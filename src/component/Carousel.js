import React from 'react'
import './Carousel.css';

function Carousel() {
  return (
    <div className='c-body'>
        <h2 className='c-head'>
        Transfer salary to employees' bank <br></br>accounts directly from Paybooks
        </h2>
        <center>
        <img id='c-img' src='icici-.jpg'></img>
        </center>
        <p id='c-text'>
        You can now transfer salary to employees’ bank accounts directly from Paybooks payroll software, without any manual<br></br> work such as uploading payment instruction files, visiting your bank, or preparing cheques
        </p>
        <center>
        <h2 id='gap'>
            3000+ companies in India love paybooks
        </h2>
        </center>
        {/* carousel */}
         
        <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src="carousel-1.png"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="carousel-2.png"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="carousel-3.png"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        {/* carousel-ends */}
    </div>
  )
}

export default Carousel