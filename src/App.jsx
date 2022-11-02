import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './index.css';
import data from './news/data.json';
var somme = 0;



export default class App extends Component {
    render() {
        return (
            <>
                <div className='row'>
                    <div className='col-md-3'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </div>
                    <div className='col'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/boutique" element={<Boutique />} />
                        </Routes>
                    </div>

                </div>
            </>

        )
    }
}

class Home extends React.Component {

    constructor() {

        super();
        this.state = { Typep: 'Tous', setType: '' }
    }


    render() {

        const getTypes = data.map((t) => t.type);
        const liste = [...new Set(getTypes)];

        return (
            <>
                <div className='container'>
                    <div className='row'>



                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">

                                {
                                    data.map((element) => {
                                        return (
                                            <div class="carousel-item active">
                                                <img src={"images/" + element.type + "/" + element.image} class="d-block w-100" alt="..." />
                                                <div class="carousel-caption d-none d-md-block">
                                                    <h5>First slide label</h5>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    qsdqsd
                </div>


            </>
        );
    }
}

class Boutique extends React.Component {

    constructor() {

        super();
        this.state = { Typep: 'Tous', setType: '' }
    }

    render() {


        const getTypes = data.map((t) => t.type);
        const liste = [...new Set(getTypes)];

        return (
            <>

                <h3 class="text-center">Choisir une catégorie</h3>
                <select className="form-select w-25 text-center mx-auto" onChange={(element) => { this.setState({ Typep: element.target.value }) }}>
                    {liste.map((element) => { return <option>{element}</option> })}
                </select>

                <br /><br /><br />


                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Catégorie : <b>{this.state.Typep}</b></h2>
                            <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                                <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row">

                                            {this.state.Typep === 'Tous' ? data.map((element) => {

                                                return (
                                                    <div class="col-sm-2 shadow justify-content-center text-center p-3 m-3 rounded">
                                                        <div class="thumb-wrapper">
                                                            <div class="img-box">
                                                                <img src={"images/" + element.type + "/" + element.image} class="img-fluid w-75 rounded" alt="Une erreur s'est produite lors du chargement de l'image !" />
                                                            </div>
                                                            <div class="thumb-content">
                                                                <h4 class="text-uppercase">{element.nomArticle}</h4>
                                                                <p class="card-text bg-light rounded text-success"><b>{element.Prix} DH</b></p>
                                                                <p class="item-price"> <div class="col">
                                                                    {element.Disponibilite === "oui" ? <button type="button" class="btn btn-primary btn-block" onClick={() => { document.getElementById('sommeall').innerHTML = "Total : " + (somme += element.Prix) + "DH" }}>Ajouter</button> : <button type="button" class="btn btn-danger btn-block">ÉPUISÉ</button>} {element.PrixPromotion === "" ? <strong><strike><i class="text-danger"></i></strike></strong> : <strong><strike><i class="text-danger">{element.PrixPromotion}</i></strike></strong>}
                                                                </div></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )

                                            }


                                            ) : data.filter((item) => item.type === this.state.Typep).map((element) => {

                                                return (
                                                    <div class="col-sm-3 shadow justify-content-center text-center p-3 m-3 rounded">
                                                        <div class="thumb-wrapper">
                                                            <div class="img-box">
                                                                <img src={"images/" + element.type + "/" + element.image} class="img-fluid w-75 rounded" alt="Une erreur s'est produite lors du chargement de l'image !" />
                                                            </div>
                                                            <div class="thumb-content">
                                                                <h4 class="text-uppercase">{element.nomArticle}</h4>
                                                                <p class="card-text bg-light rounded text-success"><b>{element.Prix} DH</b></p>
                                                                <p class="item-price"> <div class="col">
                                                                    {element.Disponibilite === "oui" ? <button type="button" class="btn btn-primary btn-block" onClick={() => { document.getElementById('sommeall').innerHTML = "Total : " + (somme += element.Prix) + "DH" }}>Ajouter</button> : <button type="button" class="btn btn-danger btn-block">ÉPUISÉ</button>} {element.PrixPromotion === "" ? <strong><strike><i class="text-danger"></i></strike></strong> : <strong><strike><i class="text-danger">{element.PrixPromotion}</i></strike></strong>}
                                                                </div></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )

                                            }
                                            )


                                            }


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </>
        )
    }
}