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
                        <ul className='navbar-nav bg-light border rounded p-2 m-4'>
                            <li className='nav-item'><i className='fa fa-home'> </i><Link to="/">Home</Link></li>
                            <li className='nav-item'><Link to="Boutique">Boutique</Link></li>
                        </ul>
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
    render() {
        return (
            <div>
                <h2>Home</h2>
            </div>
        );
    }
}

class Boutique extends React.Component {

    constructor() {

        super();
        this.state={Typep :'All', setType : ''}
    }

    render() {


        const getTypes = data.map((t) => t.type);
        const liste = [...new Set(getTypes)];

        return (
            <>

                <select className="form-select w-25" onChange={(element) => { this.setState({Typep : element.target.value})}}>
                    {liste.map((element) => { return <option>{element}</option> })}
                </select>
                <div className="container">


                    <div className="row justify-content-center mb-3">


                        {this.state.Typep === 'All' ? data.map((element) => {

                            return (
                                <div class="col-12 col-md-6 col-lg-4 p-3">
                                    <div class="card">
                                        <img class="card-img-top " src={"images/" + element.type + "/" + element.image} alt="Une erreur s'est produite lors du chargement de l'image !" />
                                        <div class="card-body">
                                            <h4 class="card-title"><a href="#" title="View Product">{element.nomArticle}</a></h4>
                                            <p class="card-text">{element.Description}</p>
                                            <div class="row">
                                                <div class="col">
                                                    {element.Disponibilite === "oui" ? <button type="button" class="btn btn-success btn-block" onClick={() => { document.getElementById('sommeall').innerHTML = "Total : " + (somme += element.Prix) + "DH" }}>{element.Prix} DH</button> : <button type="button" class="btn btn-danger btn-block">ÉPUISÉ</button>} {element.PrixPromotion === "" ? <strong><strike><i class="text-danger"></i></strike></strong> : <strong><strike><i class="text-danger">{element.PrixPromotion}</i></strike></strong>}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )



                        }

                        ) : data.filter((item) => item.type === this.state.Typep).map((element) => {

                            return (
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="card">
                                        <img class="card-img-top " src={"images/" + element.type + "/" + element.image} alt="Une erreur s'est produite lors du chargement de l'image !" />
                                        <div class="card-body">
                                            <h4 class="card-title"><a href="#" title="View Product">{element.nomArticle}</a></h4>
                                            <p class="card-text">{element.Description}</p>
                                            <div class="row">
                                                <div class="col">
                                                    {element.Disponibilite === "oui" ? <button type="button" class="btn btn-success btn-block" onClick={() => { document.getElementById('sommeall').innerHTML = "Total : " + (somme += element.Prix) + "DH" }}>{element.Prix} DH</button> : <button type="button" class="btn btn-danger btn-block">ÉPUISÉ</button>} {element.PrixPromotion === "" ? <strong><strike><i class="text-danger"></i></strike></strong> : <strong><strike><i class="text-danger">{element.PrixPromotion}</i></strike></strong>}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        }
                        )


                        }

                    </div>


                </div>
            </>
        )
    }
}