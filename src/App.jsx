import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import data from './news/data.json';
import config from './news/config.json';
import axios from 'axios';

import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

var somme = 0;

export default class App extends Component {

    render() {
        return (
            <>
                <div className='row'>
                    {/* <div className='col-3'>
                        <Routes>
                            <Route path="/" element={<RightArticles />} />
                        </Routes>
                    </div> */}
                    <div className='col'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/boutique" element={<Boutique />} />
                            <Route path="/add" element={<AddProducts />} />
                        </Routes>
                    </div>

                </div>
            </>

        )
    }
}

class RightArticles extends React.Component {

    constructor() {

        super();
        this.state = { Typep: 'Tous', setType: '' }
    }


    render() {

        const getTypes = data.map((t) => t.type);
        const liste = [...new Set(getTypes)];

        return (
            <div>

                <div className='container w-50'>
                    <h1 className='text-center text-dark text-uppercase'>Derniers articles</h1><br />
                    <MDBCarousel showControls showIndicators dark fade>

                        {
                            data.map((element) => {
                                return (

                                    <MDBCarouselItem className='w-100 rounded' src={"images/" + element.type + "/" + element.image} width='200' alt="Un problème est survenu lors du chargement de l'image">
                                        <div className='row'>
                                            <div className='col'>
                                            </div>
                                            <div className='col'>
                                                <h5 className='text-light text-uppercase bg-success rounded p-2'>{element.nomArticle}</h5>
                                                <h1 className='text-light'><b>{element.Prix}</b> DH</h1>
                                            </div>
                                        </div>
                                    </MDBCarouselItem>


                                )



                            })
                        }

                    </MDBCarousel>
                </div>
            </div>
        );
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
        let configu = require('./news/config.json');

        return (
            <>
                <div className='' id='session1'>
                    <div className='row'>
                        <div className='col-7 p-2'>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            <h2 className='text-center texteanimationback'>{configu[0].FirstDiv.Titre}</h2><br />
                            <p className='text-light text-center FirstDivTexte'>{configu[0].FirstDiv.Texte}</p>
                        </div>
                        <div className='col'>
                            <img src="images/pngegg.png" className='float-end' alt="Un problème est survenu lors du chargement de l'image" /><br /><br />
                        </div>

                    </div>
                    <br /><br />
                </div>
                <br /><br />

                <div className='container-fluid SecondDiv p-3 min-vh-100' id='session2'>
                    <div className='row'>
                        <div className='col'>
                            <br /><br /> <br />
                            <RightArticles />
                        </div>
                        <div className='col'><br /><br /><br />
                            <h2 className='SecondDivImg min-vh-100 text-center text-light '><p className='SecondDivImgP bg-dark rounded'>DECOUVREZ NOS MOTOS A VENDRE</p></h2>

                        </div>

                    </div>


                </div>

                <div className='container-fluid bg-dark min-vh-100' id='session3'>
                    <br /><br /><br /><br /><br />
                    <div className='row'>
                        <div className='col'>
                            {/* <img src="images/harleymoteur.png" alt="Un problème est survenu lors du chargement de l'image" className='img-fluid float-start' /> */}
                            <br /><br /><br /><br /><br /><br /><br /><br />
                            <h1 className='text-light text-center text-uppercase'>notre atelier de réparation</h1>
                            <h4 className='text-white text-center'>Nous réparons tous types de moto dans des délais express avec une qualité de service irréprochable.</h4>
                            <p className='text-success text-center'>Nous proposons aussi des pièces de rechange et des accessoires de mise à niveau.</p>
                        </div>
                        <div className='col'>
                            <img src="images/cbr.png" alt="Un problème est survenu lors du chargement de l'image" className='img-fluid float-start' />
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
            <div className='bg-light'>

                <div className='bg-dark p-3'>

                    <h3 className='text-center text-light bg-dark'>Choisir une catégorie</h3>
                    <select className='form-select w-25 text-center mx-auto' onChange={(element) => { this.setState({ Typep: element.target.value }) }}>
                        <option value="Tous">Tous</option>
                        {liste.map((element) => { return <option>{element}</option> })}

                    </select>
                </div>


                <br /><br /><br />


                <div className='container-fluid bg-light mx-auto'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2>Catégorie : <b>{this.state.Typep}</b></h2>
                            <div id="myCarousel" className='carousel slide' data-ride="carousel" data-interval="0">

                                <div className='carousel-inner'>
                                    <div className='carousel-item active'>
                                        <div className='row'>

                                            {this.state.Typep === 'Tous' ? data.map((element) => {

                                                return (
                                                    <div className='col shadow justify-content-center text-center p-3 m-3 rounded bg-light'>
                                                        <div className='thumb-wrapper'>
                                                            <div className='img-box'>
                                                                <img src={"images/" + element.type + "/" + element.image} className='img-fluid w-75 rounded' alt="Une erreur s'est produite lors du chargement de l'image !" />
                                                            </div>
                                                            <div className='thumb-content'>
                                                                <h4 className='text-uppercase'>{element.nomArticle}</h4>
                                                                <p className='card-text bg-light rounded text-success'><b>{element.Prix} DH</b> {element.PrixPromotion === "" ? <strong><strike><i className='text-danger'></i></strike></strong> : <strong><strike><i className='text-danger'>{element.PrixPromotion}</i></strike></strong>}</p>
                                                                <p className='text-dark text-uppercase p-2'>{element.Description}</p>
                                                                <p className='item-price'> <div className='col'>
                                                                    {element.Disponibilite === "oui" ? <button type="button" className='btn btn-primary btn-block' onClick={() => { document.getElementById('sommeall').innerHTML = "Total : " + (somme += element.Prix) + "DH" }}>Ajouter</button> : <button type="button" className='btn btn-danger btn-block' onClick={() => alert('Désolé mais ce produit est épuisé !')}>ÉPUISÉ</button>}
                                                                </div></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                )

                                            }


                                            ) : data.filter((item) => item.type === this.state.Typep).map((element) => {

                                                return (
                                                    <div className='col-sm-2 shadow justify-content-center text-center p-3 m-3 rounded'>
                                                        <div className='thumb-wrapper'>
                                                            <div className='img-box'>
                                                                <img src={"images/" + element.type + "/" + element.image} className='img-fluid w-75 rounded' alt="Une erreur s'est produite lors du chargement de l'image !" />
                                                            </div>
                                                            <div className='thumb-content'>
                                                                <h4 className='text-uppercase'>{element.nomArticle}</h4>
                                                                <p className='card-text bg-light rounded text-success'><b>{element.Prix} DH</b> {element.PrixPromotion === "" ? <strong><strike><i className='text-danger'></i></strike></strong> : <strong><strike><i className='text-danger'>{element.PrixPromotion}</i></strike></strong>}</p>
                                                                <p className='item-price'> <div className='col'>
                                                                    {element.Disponibilite === "oui" ? <button type="button" className='btn btn-primary btn-block' onClick={() => { document.getElementById('sommeall').innerHTML = "Total : " + (somme += element.Prix) + "DH" }}>Ajouter</button> : <button type="button" className='btn btn-danger btn-block' onClick={() => alert('Désolé mais ce produit est épuisé !')}>ÉPUISÉ</button>}
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

                <br /><br /><br /><br />

            </div>

        )
    }
}


class AddProducts extends React.Component {
    constructor() {
        super();
    }
    

    addProduit() {
        

        if (document.getElementById('codePush').value == "test") {



            // const produit = [...data, {
            //     nomArticle: document.getElementById('nomarticle').value,
            //     Description: document.getElementById('descarticle').value,
            //     Prix: document.getElementById('prixarticle').value,
            //     type: document.getElementById('typearticle').value,
            //     Disponibilite: document.getElementById('dispoarticle').value,
            //     PrixPromotion: document.getElementById('prixpromoarticle').value,
            //     image: document.getElementById('imagearticle').value
            // }]

            axios.post(data, { answer: 42 });
            
           
        } else {
            alert('Désolé mais votre mot de passe est incorrect')
        }

    }

    render() {
        return (


            <div>

                <h1 className='text-light text-center'>Ajouter un article</h1>
                <div className='row'>
                    <div className='col'>

                    </div>



                    <div className='col'>
                        <form onSubmit={() => this.addProduit}>

                            <label htmlFor="nomarticle" className='text-light'>Nom de l'article</label>
                            <input type="text" name="" id="nomarticle" className='form-control w-100' required /><br />

                            <label htmlFor="descarticle" className='text-light'>Description de l'article</label>
                            <input type="text" name="" id="descarticle" className='form-control w-100' required /><br />

                            <label htmlFor="prixarticle" className='text-light'>Prix de l'article</label>
                            <input type="text" name="" id="prixarticle" className='form-control w-100' required /><br />

                            <label htmlFor="typearticle" className='text-light'>Type de l'article</label>
                            <input type="text" name="" id="typearticle" className='form-control w-100' required /><br />

                            <label htmlFor="dispoarticle" className='text-light'>Disponibilité de l'article</label>
                            <select name="" id="dispoarticle" className='form-control w-100' required><option value="oui">Oui</option><option value="non">Non</option></select><br />

                            <label htmlFor="prixpromoarticle" className='text-light'>Prix promotion de l'article</label>
                            <input type="text" name="" id="prixpromoarticle" className='form-control w-100' placeholder='Laissez vide si aucune promotion est disponible' /><br />

                            <label htmlFor="imagearticle" className='text-light'>Image de l'article</label>
                            <input type="file" name="" id="imagearticle" className='form-control w-100' required /><br /><br />

                            <label htmlFor="codePush" className='text-light'>Veuillez entrer le code</label>
                            <input type="text" name="" id="codePush" className='form-control w-100' required /><br />



                            <input type="submit" />
                        </form>
                    </div>

                    <div className='col'>

                    </div>
                </div>




            </div>

        );
    }

}
// var fs = require("fs");


// class test extends React.Component{
//     render(){
//         return(
//             <button onClick={()=> {writeJsonFile('./date.json', { foo: true })}}>click</button>
//         )
//     }
// }