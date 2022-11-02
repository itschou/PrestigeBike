import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './index.css';
import data from './news/data.json';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';


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
                {/* <div className='container'>
                    <div className='row'>



                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">

                                {
                                    data.map((element) => {
                                        return (
                                            <div className="carousel-item active">
                                                <img src={"images/" + element.type + "/" + element.image} className="d-block w-100" alt="..." />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h5>First slide label</h5>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div> */}

                <div id="carouselExampleSlidesOnly" className='carousel slide' data-mdb-ride="carousel">
                    <div className='carousel-inner'>
                        <div className='carousel-item active'>
                            <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className='d-block w-100' alt="Wild Landscape" />
                        </div>
                        <div className='carousel-item'>
                            <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className='d-block w-100' alt="Camera" />
                        </div>
                        <div className='carousel-item'>
                            <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className='d-block w-100' alt="Exotic Fruits" />
                        </div>
                    </div>
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

                <h3 className="text-center">Choisir une catégorie</h3>
                <select className="form-select w-25 text-center mx-auto" onChange={(element) => { this.setState({ Typep: element.target.value }) }}>
                    <option value="Tous">Tous</option>
                    {liste.map((element) => { return <option>{element}</option> })}

                </select>

                <br /><br /><br />


                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Catégorie : <b>{this.state.Typep}</b></h2>
                            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
                                <ol className="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">

                                            {this.state.Typep === 'Tous' ? data.map((element) => {

                                                return (
                                                    <div className="col-sm-2 shadow justify-content-center text-center p-3 m-3 rounded">
                                                        <div className="thumb-wrapper">
                                                            <div className="img-box">
                                                                <img src={"images/" + element.type + "/" + element.image} className="img-fluid w-75 rounded" alt="Une erreur s'est produite lors du chargement de l'image !" />
                                                            </div>
                                                            <div className="thumb-content">
                                                                <h4 className="text-uppercase">{element.nomArticle}</h4>
                                                                <p className="card-text bg-light rounded text-success"><b>{element.Prix} DH</b></p>
                                                                <p className="item-price"> <div className="col">
                                                                    {element.Disponibilite === "oui" ? <button type="button" className="btn btn-primary btn-block" onClick={() => { document.getElementById('sommeall').innerHTML = "Total : " + (somme += element.Prix) + "DH" }}>Ajouter</button> : <button type="button" className="btn btn-danger btn-block" onClick={() => alert('Désolé mais ce produit est épuisé !')}>ÉPUISÉ</button>} {element.PrixPromotion === "" ? <strong><strike><i className="text-danger"></i></strike></strong> : <strong><strike><i className="text-danger">{element.PrixPromotion}</i></strike></strong>}
                                                                </div></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )

                                            }


                                            ) : data.filter((item) => item.type === this.state.Typep).map((element) => {

                                                return (
                                                    <div className="col-sm-2 shadow justify-content-center text-center p-3 m-3 rounded">
                                                        <div className="thumb-wrapper">
                                                            <div className="img-box">
                                                                <img src={"images/" + element.type + "/" + element.image} className="img-fluid w-75 rounded" alt="Une erreur s'est produite lors du chargement de l'image !" />
                                                            </div>
                                                            <div className="thumb-content">
                                                                <h4 className="text-uppercase">{element.nomArticle}</h4>
                                                                <p className="card-text bg-light rounded text-success"><b>{element.Prix} DH</b></p>
                                                                <p className="item-price"> <div className="col">
                                                                    {element.Disponibilite === "oui" ? <button type="button" className="btn btn-primary btn-block" onClick={() => { document.getElementById('sommeall').innerHTML = "Total : " + (somme += element.Prix) + "DH" }}>Ajouter</button> : <button type="button" className="btn btn-danger btn-block" onClick={() => alert('Désolé mais ce produit est épuisé !')}>ÉPUISÉ</button>} {element.PrixPromotion === "" ? <strong><strike><i className="text-danger"></i></strike></strong> : <strong><strike><i className="text-danger">{element.PrixPromotion}</i></strike></strong>}
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