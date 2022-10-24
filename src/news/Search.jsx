import { useState } from "react";
import data from './data.json'

var somme = 0
export default function Searchd() {

    const [Type, setType] = useState('All');

    const getTypes = data.map((t) => t.type);
    const liste = [...new Set(getTypes)];


    return (
        <>

            <select className="form-select w-25" onChange={(element) => { setType(element.target.value) }}>
                {liste.map((element) => { return <option>{element}</option> })}
            </select>
            <div className="container">


                <div className="row justify-content-center mb-3">


                    {Type === 'All' ? data.map((element) => {

                        return (
                            <div class="col-12 col-md-6 col-lg-4 p-3">
                                <div class="card">
                                    <img class="card-img-top " src={"images/" + element.type + "/" + element.image} />
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

                    ) : data.filter((item) => item.type === Type).map((element) => {

                        return (
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card">
                                    <img class="card-img-top " src={"images/" + element.type + "/" + element.image} />
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

function rechercher() {
    return (
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Exemple : casque" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit" onclick="">Chercher</button>
        </form>
    )
}

export { rechercher }