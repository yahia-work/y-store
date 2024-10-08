import { useState, useRef,useEffect } from "react";
import React from 'react';
import "./Boutique.css";
import { IoIosArrowUp } from "react-icons/io";
import Checkbox from '@mui/material/Checkbox';
import SelectCheck from "../components/SelectCheck";
import { IoFilter } from "react-icons/io5";
import { GoX } from "react-icons/go";

import productImg1 from "../images/productImg1.jpg"
import productImg8 from "../images/productImg8.jpg"
import productImg9 from "../images/productImg9.jpg"
import productImg10 from "../images/productImg10.jpg"
import productImg11 from "../images/productImg11.jpg"
import productImg12 from "../images/productImg12.jpg"
import productImg13 from "../images/productImg13.jpg"
import productImg14 from "../images/productImg14.jpg"
import productImg15 from "../images/productImg15.jpg"

import Products from "../Products/Products";

const products = [
    {
        name:"Robe Farawla",
        model:"Robe",
        price:"2.900DZD",
        img:productImg8,
        description:"La robe Farawla est confectionnée en tissu Mazirati de haute qualité, offrant confort et élégance. C'est la pièce idéale pour toutes les occasions, alliant style et durabilité."
    },
    {
        name:"Robe Talline",
        model:"Robe",
        price:"2.900DZD",
        img:productImg9,
        description:"La robe Talline est confectionnée en tissu Mazirati de haute qualité, offrant confort et élégance. C'est la pièce idéale pour toutes les occasions, alliant style et durabilité."
    },
    {
        name:"Robe Disney",
        model:"Robe",
        price:"2.900DZD",
        img:productImg10,
        description:"La robe Disney est confectionnée en tissu Mazirati de haute qualité, offrant confort et élégance. C'est la pièce idéale pour toutes les occasions, alliant style et durabilité."
    },
    {
        name:"Ensemble Mirane",
        model:"Ensemble",
        price:"5.000DZD",
        img:productImg15,
        description:"L'ensemble Mirane est confectionnée en tissu Mazirati de haute qualité, offrant confort et élégance. C'est la pièce idéale pour toutes les occasions, alliant style et durabilité."
    },
    {
        name:"Robe Farawla",
        model:"Robe",
        price:"2.900DZD",
        img:productImg12,
        description:"La robe Farawla est confectionnée en tissu Mazirati de haute qualité, offrant confort et élégance. C'est la pièce idéale pour toutes les occasions, alliant style et durabilité."
    },
    {
        name:"Robe Farawla",
        model:"Robe",
        price:"2.900DZD",
        img:productImg11,
        description:"La robe Farawla est confectionnée en tissu Mazirati de haute qualité, offrant confort et élégance. C'est la pièce idéale pour toutes les occasions, alliant style et durabilité."
    },
    {
        name:"Abaya classique",
        model:"Abaya",
        price:"2.900DZD",
        img:productImg14,
        description:"Abaya classique est confectionnée en tissu Mazirati de haute qualité, offrant confort et élégance. C'est la pièce idéale pour toutes les occasions, alliant style et durabilité."
    },
    {
        name:"Robe Farawla",
        model:"Robe",
        price:"2.900DZD",
        img:productImg1,
        description:"La robe Farawla est confectionnée en tissu Mazirati de haute qualité, offrant confort et élégance. C'est la pièce idéale pour toutes les occasions, alliant style et durabilité."
    }
    ,
    {
        name:"Robe Farawla",
        model:"Robe",
        price:"2.900DZD",
        img:productImg13,
        description:"La robe Farawla est confectionnée en tissu Mazirati de haute qualité, offrant confort et élégance. C'est la pièce idéale pour toutes les occasions, alliant style et durabilité."
    }
]

function Boutique() {
    const [tailleSelected,settailleSelected] = useState("Tout");
    const [couleurSelected,setcouleurSelected] = useState("Tout");
    const [filterSelected,setfilterSelected] = useState("Tri par default");

    const toggleHeight = (ref, isExpanded, setState) => {
        if (ref.current) {
            if (!isExpanded) {
                ref.current.style.height = ref.current.scrollHeight + "px";
            } else {
                ref.current.style.height = "0px";
            }
            setState(!isExpanded);
        }
    };
    
    const Config = ({className=""})=>{
        const [isUpCat, setisUpCat] = useState(false);
        const [isUpTaille, setisUpTaille] = useState(false);
        const [isUpCouleur, setisUpCouleur] = useState(false);
        const [isUpPrix, setisUpPrix] = useState(false);

        const catRef = useRef(null);
        const tailleRef = useRef(null);
        const couleurRef = useRef(null);
        const prixRef = useRef(null);
        
        return(
            <div className={className}>
                {/* Categorie */}
                <div className="item-config flex pointer" onClick={() => toggleHeight(catRef, isUpCat, setisUpCat)}>
                    Categorie
                    <IoIosArrowUp className={`up-item-config ${isUpCat ? "rotated" : ""}`} />
                </div>
                <div className="config" ref={catRef}>
                    
                    <div className='categorie-config flex'>
                        <Checkbox />
                        Abaya
                    </div>
                    <div className='categorie-config flex'>
                        <Checkbox />
                        Robe
                    </div>
                    <div className='categorie-config flex'>
                        <Checkbox />
                        Ensembles
                    </div>
                </div>
                {/* Taille */}
                <div className="item-config categorie-config flex pointer" onClick={() => toggleHeight(tailleRef, isUpTaille, setisUpTaille)}>
                    Taille
                    <IoIosArrowUp className={`up-item-config ${isUpTaille ? "rotated" : ""}`} />
                </div>
                <div className="config" ref={tailleRef}>
                    <SelectCheck    label={"Taille"}
                                    value={tailleSelected}
                                    setvalue={settailleSelected}
                                    list={["Tout","36","38","40","42","44","46","48"]}
                    />
                </div>

                {/* Couleur */}
                <div className="item-config categorie-config flex pointer" onClick={() => toggleHeight(couleurRef, isUpCouleur, setisUpCouleur)}>
                    Couleur
                    <IoIosArrowUp className={`up-item-config ${isUpCouleur ? "rotated" : ""}`} />
                </div>
                <div className="config" ref={couleurRef}>
                    <SelectCheck    label={"Taille"}
                                    value={couleurSelected}
                                    setvalue={setcouleurSelected}
                                    list={["Tout","rouge","vert","noir","blue"]}
                    />
                </div>

                {/* Prix */}
                <div className="item-config categorie-config flex pointer" onClick={() => toggleHeight(prixRef, isUpPrix, setisUpPrix)}>
                    Prix
                    <IoIosArrowUp className={`up-item-config ${isUpPrix ? "rotated" : ""}`} />
                </div>
                <div className="config" ref={prixRef}>
                    
                    <div className='categorie-config flex'>
                        <Checkbox />
                        0-2.000 DZD
                    </div>
                    <div className='categorie-config flex'>
                        <Checkbox />
                        2.000 DZD - 3.000 DZD
                        
                    </div>
                    <div className='categorie-config flex'>
                        <Checkbox />
                        3.000 DZD - 4.000 DZD
                    </div>
                </div>
            </div>
        )
    }

    const [filterStatus,setfilterStatus] = useState(false);

    useEffect(() => {
        if (filterStatus ) {
            document.body.style.backgroundColor = "rgba(92, 92, 92, 0.5)"; 
        } else {
            document.body.style.backgroundColor = ""; 
        }

        return () => {
            document.body.style.backgroundColor = "";
        };
    }, [filterStatus]);
    return (
        <div className="Boutique flex">
            
            <Config className="configuration flex"/>
            <div className="models flex">
                <div className="header-models flex">
                    <div>
                        <h2>Boutique</h2>
                        <div className="path flex">
                            <div className="pointer">Acceuil</div>&nbsp; &gt; &nbsp;Boutique
                        </div>
                    </div>
                    <SelectCheck    label={"Filter"}
                                    value={filterSelected}
                                    setvalue={setfilterSelected}
                                    list={["Tri par default","Tri par popularite","Tri par tarif croissante","Tri par tarif decroissante"]}
                                    style={{width:"25%",mt:"25px"}}
                                    className="select-filter"
                    />
                    <div className="filter pointer" onClick={()=>setfilterStatus(true)}>
                        <IoFilter/> Filter
                    </div>
                    {
                        <div className={`panier-shop ${filterStatus ? 'open' : 'close'}`}>
                            <div className="header-panier-shop flex">
                                <div></div>
                                <h3>Filter Par</h3>
                                <GoX className="exit-shop pointer" onClick={()=>setfilterStatus(false)}/>
                            </div>
                            <Config className="panier-configuration flex"/>
                        </div>
                    }
                </div>
                <Products products={products}/>
            </div>
        </div>
    );
}

export default Boutique;
