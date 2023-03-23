import React,{useEffect,useState} from 'react'
//import {BsSearch} from 'react-icons/bs';

function Receta() {
  return(
    <div>
        <div>
      
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabindex="0">

                    <div className="row gy-4">
                        <div className="col-lg-3 .col-sm-6">
                            <div className="menu-item bg-white shadow-on-hover">
                                <img src="./assets/images/item1.jpeg" className="img-fluid"></img>
                                <div className="menu-item-content p-4">
                                    <h5 className="mt-1 mb-2"><a href="#">Noodles</a></h5>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget neque lectus. Praesent aliquam aliquam facilisis. Phasellus tellus diam, rhoncus et molestie ut, varius vel libero.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 .col-sm-6">
                            <div className="menu-item bg-white shadow-on-hover">
                                <img src="./assets/images/item2.jpeg" className="img-fluid"></img>
                                <div className="menu-item-content p-4">
                                    <h5 className="mt-1 mb-2"><a href="#">French toast</a></h5>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget neque lectus. Praesent aliquam aliquam facilisis. Phasellus tellus diam, rhoncus et molestie ut, varius vel libero.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 .col-sm-6">
                            <div className="menu-item bg-white shadow-on-hover">
                                <img src="./assets/images/item3.jpeg" className="img-fluid"></img>
                                <div className="menu-item-content p-4">
                                    <h5 className="mt-1 mb-2"><a href="#">Tacos vegetarianos</a></h5>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget neque lectus. Praesent aliquam aliquam facilisis. Phasellus tellus diam, rhoncus et molestie ut, varius vel libero.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 .col-sm-6">
                            <div className="menu-item bg-white shadow-on-hover">
                                <img src="./assets/images/item4.jpeg" className="img-fluid"></img>
                                <div className="menu-item-content p-4">
                                    <h5 className="mt-1 mb-2"><a href="#">Avocado toast</a></h5>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget neque lectus. Praesent aliquam aliquam facilisis. Phasellus tellus diam, rhoncus et molestie ut, varius vel libero.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 .col-sm-6">
                            <div className="menu-item bg-white shadow-on-hover">
                                <img src="./assets/images/item5.jpeg" className="img-fluid"></img>
                                <div className="menu-item-content p-4">
                                    <h5 className="mt-1 mb-2"><a href="#">Poke bowl</a></h5>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget neque lectus. Praesent aliquam aliquam facilisis. Phasellus tellus diam, rhoncus et molestie ut, varius vel libero.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 .col-sm-6">
                            <div className="menu-item bg-white shadow-on-hover">
                                <img src="./assets/images/item1.jpeg" className="img-fluid"></img>
                                <div className="menu-item-content p-4">
                                    <h5 className="mt-1 mb-2"><a href="#">Noodles</a></h5>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget neque lectus. Praesent aliquam aliquam facilisis. Phasellus tellus diam, rhoncus et molestie ut, varius vel libero.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 .col-sm-6">
                            <div className="menu-item bg-white shadow-on-hover">
                                
                                <img src="./assets/images/item2.jpeg" className="img-fluid"></img>
                                <div className="menu-item-content p-4">
                                    <h5 className="mt-1 mb-2"><a href="#">French toast</a></h5>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget neque lectus. Praesent aliquam aliquam facilisis. Phasellus tellus diam, rhoncus et molestie ut, varius vel libero.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 .col-sm-6">
                            <div className="menu-item bg-white shadow-on-hover">
                                <img src="./assets/images/item3.jpeg" className="img-fluid"></img>
                                <div className="menu-item-content p-4">
                                    <h5 className="mt-1 mb-2"><a href="#">Tacos vegetarianos</a></h5>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget neque lectus. Praesent aliquam aliquam facilisis. Phasellus tellus diam, rhoncus et molestie ut, varius vel libero.</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

                <div className="tab-pane fade show" id="pills-breakfast" role="tabpanel" aria-labelledby="pills-breakfast-tab" tabindex="0">
                    <div className="row gy-4">
                        
                        <div className="col-lg-3 .col-sm-6">
                            <div className="menu-item bg-white shadow-on-hover">
                                <img src="./assets/images/item2.jpeg" className="img-fluid"></img>
                                <div className="menu-item-content p-4">
                                    <h5 className="mt-1 mb-2"><a href="#">French toast</a></h5>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget neque lectus. Praesent aliquam aliquam facilisis. Phasellus tellus diam, rhoncus et molestie ut, varius vel libero.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 .col-sm-6">
                            <div className="menu-item bg-white shadow-on-hover">
                                <img src="./assets/images/item4.jpeg" className="img-fluid"></img>
                                <div className="menu-item-content p-4">
                                    <h5 className="mt-1 mb-2"><a href="#">Avocado toast</a></h5>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget neque lectus. Praesent aliquam aliquam facilisis. Phasellus tellus diam, rhoncus et molestie ut, varius vel libero.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="tab-pane fade show" id="pills-lunch" role="tabpanel" aria-labelledby="pills-lunch-tab" tabindex="0">
                    <div className="row gy-4">
                        <div className="col-lg-3 .col-sm-6">
                            <div className="menu-item bg-white shadow-on-hover">
                                <img src="./assets/images/item1.jpeg" className="img-fluid"></img>
                                <div className="menu-item-content p-4">
                                    <h5 className="mt-1 mb-2"><a href="#">Noodles</a></h5>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget neque lectus. Praesent aliquam aliquam facilisis. Phasellus tellus diam, rhoncus et molestie ut, varius vel libero.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 .col-sm-6">
                            <div className="menu-item bg-white shadow-on-hover">
                                <img src="./assets/images/item5.jpeg" className="img-fluid"></img>
                                <div className="menu-item-content p-4">
                                    <h5 className="mt-1 mb-2"><a href="#">Poke bowl</a></h5>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget neque lectus. Praesent aliquam aliquam facilisis. Phasellus tellus diam, rhoncus et molestie ut, varius vel libero.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 .col-sm-6">
                            <div className="menu-item bg-white shadow-on-hover">
                                <img src="./assets/images/item3.jpeg" className="img-fluid"></img>
                                <div className="menu-item-content p-4">
                                    <h5 className="mt-1 mb-2"><a href="#">Tacos vegetarianos</a></h5>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget neque lectus. Praesent aliquam aliquam facilisis. Phasellus tellus diam, rhoncus et molestie ut, varius vel libero.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="tab-pane fade show" id="pills-dinner" role="tabpanel" aria-labelledby="pills-dinner-tab" tabindex="0">
                    <div className="row gy-4">

                        <div className="col-lg-3 .col-sm-6">
                            <div className="menu-item bg-white shadow-on-hover">
                                <img src="./assets/images/item2.jpeg" className="img-fluid"></img>
                                <div className="menu-item-content p-4">
                                    <h5 className="mt-1 mb-2"><a href="#">French toast</a></h5>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget neque lectus. Praesent aliquam aliquam facilisis. Phasellus tellus diam, rhoncus et molestie ut, varius vel libero.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 .col-sm-6">
                            <div className="menu-item bg-white shadow-on-hover">
                                <img src="./assets/images/item1.jpeg" className="img-fluid"></img>
                                <div className="menu-item-content p-4">
                                    <h5 className="mt-1 mb-2"><a href="#">Noodles</a></h5>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget neque lectus. Praesent aliquam aliquam facilisis. Phasellus tellus diam, rhoncus et molestie ut, varius vel libero.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 .col-sm-6">
                            <div className="menu-item bg-white shadow-on-hover">
                                <img src="./assets/images/item3.jpeg" className="img-fluid"></img>
                                <div className="menu-item-content p-4">
                                    <h5 className="mt-1 mb-2"><a href="#">Tacos vegetarianos</a></h5>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget neque lectus. Praesent aliquam aliquam facilisis. Phasellus tellus diam, rhoncus et molestie ut, varius vel libero.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 .col-sm-6">
                            <div className="menu-item bg-white shadow-on-hover">
                                <img src="./assets/images/item4.jpeg" className="img-fluid"></img>
                                <div className="menu-item-content p-4">
                                    <h5 className="mt-1 mb-2"><a href="#">Avocado toast</a></h5>
                                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget neque lectus. Praesent aliquam aliquam facilisis. Phasellus tellus diam, rhoncus et molestie ut, varius vel libero.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

              </div>
              </div>
    </div>
  )
  
}

export default Receta