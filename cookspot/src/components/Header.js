import React,{useEffect,useState} from 'react'
//import {BsSearch} from 'react-icons/bs';

function Header() {
  return (
    <div>
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">

          <div class="carousel-item text-center vh-100 bg-cover active slide-1">
            <div class="container h-100 d-flex align-items-center justify-content-center">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <h6 class="fw-bold text-white">BIENVENIDO A COOKSPOT</h6>
                        <h2 class="display-1 fw-bold text-white">Prepara tus platillos favoritos</h2>
                        <a href="#menu" class="btn btn-brand">Busca ahora</a>
                        
                    </div>
                </div>
            </div>
          </div>
          
          <div class="carousel-item text-center vh-100 bg-cover slide-2">
            <div class="container h-100 d-flex align-items-center justify-content-center">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <h6 class="fw-bold text-white">BIENVENIDO A COOKSPOT</h6>
                        <h2 class="display-1 fw-bold text-white">Compra los ingredientes en tu super más cercano</h2>
                        <a href="./Map" class="btn btn-brand">Ve las ubicaciones</a>
                    </div>
                </div>
            </div>
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"> </script>
  </div>

  )
  
}

export default Header