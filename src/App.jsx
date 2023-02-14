import React, { Component, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";

import axios from "axios";

import "firebase/database";

import { Carousel } from "react-bootstrap";

const binId = "63d31a33ebd26539d0687863";
const apiKey = "$2b$10$./sSv/f/M/JgpEY0veOnxOzSP/axiTaaE5jikEaw0TqAk6w6Wc.SW";

const options = {
  headers: {
    "secret-key": apiKey,
  },
};

var somme = 0;

// const baseURL = "https://82.180.162.21:3000/produits";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="row">
          {/* <div className='col-3'>
                        <Routes>
                            <Route path="/" element={<RightArticles />} />
                        </Routes>
                    </div> */}
          <div className="col">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/boutique" element={<Boutique />} />
                <Route path="/add" element={<AddProducts />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </>
    );
  }
}

class RightArticles extends React.Component {
  render() {
    return <Articles />;
  }
}

class Home extends React.Component {
  constructor() {
    super();
    this.state = { persons: [] };
  }

  render() {
    let configu = require("./news/config.json");

    return (
      <>
        <div id="session1">
          <div className="row">
            <div className="col-7 p-2">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h2 className="text-center texteanimationback">
                {configu[0].FirstDiv.Titre}
              </h2>
              <br />
              <p className="text-light text-center FirstDivTexte">
                {configu[0].FirstDiv.Texte}
              </p>
            </div>
            <div className="col">
              <img
                src="images/pngegg.png"
                className="float-end"
                alt="Un problème est survenu lors du chargement."
              />
              <br />
              <br />
            </div>
          </div>
          <br />
          <br />
        </div>
        <br />
        <br />

        <div className="container-fluid SecondDiv p-3 min-vh-100" id="session2">
          <div className="row">
            <div className="col">
              <br />
              <br /> <br />
              <RightArticles />
            </div>
            <div className="col">
              <br />
              <br />
              <br />
              <h2 className="SecondDivImg min-vh-100 text-center text-light ">
                <p className="SecondDivImgP bg-dark rounded">
                  DECOUVREZ NOS MOTOS A VENDRE
                </p>
              </h2>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-dark min-vh-100" id="session3">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1 className="text-light text-center text-uppercase">
                notre atelier de réparation
              </h1>
              <h4 className="text-white text-center">
                Nous réparons tous types de moto dans des délais express avec
                une qualité de service irréprochable.
              </h4>
              <p className="text-success text-center">
                Nous proposons aussi des pièces de rechange et des accessoires
                de mise à niveau.
              </p>
            </div>
            <div className="col">
              <img
                src="images/cbr.png"
                alt="Un problème est survenu lors du chargement."
                className="img-fluid float-start"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

class Boutique extends React.Component {
  render() {
    return <Boutiques />;
  }
}

class AddProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
    };
  }

  handleCreateBin() {
    if (document.getElementById("codePush").value === "@prestige*1785") {
    const produit = {
      "nomArticle": document.getElementById("nomarticle").value,
      "Description": document.getElementById("descarticle").value,
      "Prix": parseInt(document.getElementById("prixarticle").value),
      "type": document.getElementById("typearticle").value,
      "Disponibilite": document.getElementById("dispoarticle").value,
      "PrixPromotion": parseInt(
        document.getElementById("prixpromoarticle").value
      ),
      "image": this.getName(),
    };

    const api = '$2b$10$./sSv/f/M/JgpEY0veOnxOzSP/axiTaaE5jikEaw0TqAk6w6Wc.SW'


    axios
      .get("https://api.jsonbin.io/v3/b/63d31a33ebd26539d0687863", {
        headers : {
          "X-Master-Key": api
        }
      })
      .then((response) => {
        const oldData = response.data;
        const newData = [ ...oldData.record, produit];

        axios.put("https://api.jsonbin.io/v3/b/63d31a33ebd26539d0687863", newData, {
          headers : {
            "X-Master-Key": api
          }
        })
        alert("Votre produit a bien été ajouté !");
      })
      .catch((error) => {
        console.log(error);
      });
    } else{
      alert("Désolé mais votre mot de passe est incorrect");
    }

  }

  getName() {
    var fullPath = document.getElementById("imagearticle").value;
    return fullPath.split("\\").pop();
  }


  render() {
    return (
      <div>
        <h1 className="text-light text-center">Ajouter un article</h1><br />
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <form>
              <label htmlFor="nomarticle" className="text-light">
                Nom de l'article
              </label>
              <input
                type="text"
                id="nomarticle"
                className="form-control w-100"
                required
              />
              <br />

              <label htmlFor="descarticle" className="text-light">
                Description de l'article
              </label>
              <input
                type="text"
                id="descarticle"
                className="form-control w-100"
                required
              />
              <br />

              <label htmlFor="prixarticle" className="text-light">
                Prix de l'article
              </label>
              <input
                type="text"
                id="prixarticle"
                className="form-control w-100"
                required
              />
              <br />

              <label htmlFor="typearticle" className="text-light">
                Type de l'article
              </label>
              <input
                type="text"
                id="typearticle"
                className="form-control w-100"
                required
              />
              <br />

              <label htmlFor="dispoarticle" className="text-light">
                Disponibilité de l'article
              </label>
              <select id="dispoarticle" className="form-control w-100" required>
                <option value="oui">Oui</option>
                <option value="non">Non</option>
              </select>
              <br />

              <label htmlFor="prixpromoarticle" className="text-light">
                Prix promotion de l'article
              </label>
              <input
                type="text"
                id="prixpromoarticle"
                className="form-control w-100"
                placeholder="Laissez vide si aucune promotion est disponible"
              />
              <br />

              <label htmlFor="imagearticle" className="text-light">
                Image de l'article
              </label>
              <input
                type="file"
                id="imagearticle"
                accept="image/jpeg, image/png, image/jpg"
                className="form-control w-100"
                required
              />
              <br />
              <br />

              <label htmlFor="codePush" className="text-light">
                Veuillez entrer le code
              </label>
              <input
                type="text"
                id="codePush"
                className="form-control w-100"
                required
              />
              <br />

            </form>
              <button onClick={() => this.handleCreateBin()}>AJOUTER</button>
            <br /><br /><br />
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

function Boutiques() {
  const [type, setType] = useState("Tous");
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    axios.get(`https://api.jsonbin.io/v3/b/${binId}`, options).then((response) => {
      setArticles(response.data);
    });
  }, []);

  const redTypes = articles.record && articles.record.map((e) => e.type);
  const Filtred = [...new Set(redTypes)];

  return (
    <div className="bg-light">
      <div className="bg-dark p-3">
        <h3 className="text-center text-light bg-dark">
          Choisir une catégorie
        </h3>
        <select
          className="form-select w-25 text-center mx-auto"
          onChange={(element) => {
            setType(element.target.value);
          }}
        >
          <option value="Tous">Tous</option>
          {Filtred.map((element, index) => {
            return <option key={index}>{element}</option>;
          })}
        </select>
      </div>

      <br />
      <br />
      <br />

      <div className="container-fluid bg-light mx-auto">
        <div className="row">
          <div className="col-md-12">
            <h2>
              Catégorie : <b>{type}</b>
            </h2>
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
              data-interval="0"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    {type === "Tous"
                      ? articles.record &&
                        articles.record.map((element, index) => {
                          return (
                            <div
                              className="col-2 shadow justify-content-center text-center p-3 m-3 rounded bg-light"
                              key={index}
                            >
                              <div className="thumb-wrapper">
                                <div className="img-box">
                                  <img
                                    src={
                                      "images/" +
                                      element.type +
                                      "/" +
                                      element.image
                                    }
                                    className="img-fluid w-75 rounded"
                                    alt="Une erreur s'est produite lors du chargement."
                                  />
                                </div>
                                <div className="thumb-content">
                                  <h4 className="text-uppercase">
                                    {element.nomArticle}
                                  </h4>
                                  <p className="card-text bg-light rounded text-success">
                                    <b>{element.Prix} DH</b>{" "}
                                    {element.PrixPromotion === "" ? (
                                      <strong>
                                        <strike>
                                          <i className="text-danger"></i>
                                        </strike>
                                      </strong>
                                    ) : (
                                      <strong>
                                        <strike>
                                          <i className="text-danger">
                                            {element.PrixPromotion}
                                          </i>
                                        </strike>
                                      </strong>
                                    )}
                                  </p>
                                  <p className="text-dark text-uppercase p-2">
                                    {element.Description}
                                  </p>
                                  <p className="item-price">
                                    {" "}
                                    <div className="col">
                                      {element.Disponibilite === "oui" ? (
                                        <button
                                          type="button"
                                          className="btn btn-primary btn-block"
                                          onClick={() => {
                                            document.getElementById(
                                              "sommeall"
                                            ).innerHTML =
                                              "Total : " +
                                              (somme += element.Prix) +
                                              "DH";
                                          }}
                                        >
                                          Ajouter
                                        </button>
                                      ) : (
                                        <button
                                          type="button"
                                          className="btn btn-danger btn-block"
                                          onClick={() =>
                                            alert(
                                              "Désolé mais ce produit est épuisé !"
                                            )
                                          }
                                        >
                                          ÉPUISÉ
                                        </button>
                                      )}
                                    </div>
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : articles.record &&
                        articles.record
                          .filter((item) => item.type === type)
                          .map((element, index) => {
                            return (
                              <div
                                className="col-sm-2 shadow justify-content-center text-center p-3 m-3 rounded"
                                key={index}
                              >
                                <div className="thumb-wrapper">
                                  <div className="img-box">
                                    <img
                                      src={
                                        "images/" +
                                        element.type +
                                        "/" +
                                        element.image
                                      }
                                      className="img-fluid w-75 rounded"
                                      alt="Une erreur s'est produite lors du chargement."
                                    />
                                  </div>
                                  <div className="thumb-content">
                                    <h4 className="text-uppercase">
                                      {element.nomArticle}
                                    </h4>
                                    <p className="card-text bg-light rounded text-success">
                                      <b>{element.Prix} DH</b>{" "}
                                      {element.PrixPromotion === "" ? (
                                        <strong>
                                          <strike>
                                            <i className="text-danger"></i>
                                          </strike>
                                        </strong>
                                      ) : (
                                        <strong>
                                          <strike>
                                            <i className="text-danger">
                                              {element.PrixPromotion}
                                            </i>
                                          </strike>
                                        </strong>
                                      )}
                                    </p>
                                    <p className="text-dark text-uppercase p-2">
                                      {element.Description}
                                    </p>
                                    <p className="item-price">
                                      {" "}
                                      <div className="col">
                                        {element.Disponibilite === "oui" ? (
                                          <button
                                            type="button"
                                            className="btn btn-primary btn-block"
                                            onClick={() => {
                                              document.getElementById(
                                                "sommeall"
                                              ).innerHTML =
                                                "Total : " +
                                                (somme += element.Prix) +
                                                "DH";
                                            }}
                                          >
                                            Ajouter
                                          </button>
                                        ) : (
                                          <button
                                            type="button"
                                            className="btn btn-danger btn-block"
                                            onClick={() =>
                                              alert(
                                                "Désolé mais ce produit est épuisé !"
                                              )
                                            }
                                          >
                                            ÉPUISÉ
                                          </button>
                                        )}
                                      </div>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(`https://api.jsonbin.io/v3/b/${binId}`, options).then((response) => {
      setArticles(response.data);
    });
  }, []);

  const lastproducts = articles.record && articles.record.slice(-3);

  return (
    <div>
      <div className="container w-50">
        <h1 className="text-center text-dark text-uppercase">
          Derniers articles
        </h1>
        <br />
        <Carousel>
          {articles.record &&
            lastproducts.map((product, index) => (
              <Carousel.Item key={index}>
                <img
                  src={"images/" + product.type + "/" + product.image}
                  width="200"
                  alt="Un problème est survenu lors du chargement."
                  className="d-block w-100 image-size"
                />
                <Carousel.Caption>
                  <a className="linkarticle" href="/boutique">
                    <h5 className="text-success text-uppercase bg-dark p-2 rounded ">
                      {product.nomArticle}
                    </h5>
                  </a>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      </div>
    </div>
  );
}

export { Articles, Boutiques };
