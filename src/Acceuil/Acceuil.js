import "./Acceuil.css"

import livraison from "../images/livraison.png";
import payment from "../images/payment.png"
import styles from "../images/styles.png"
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
function Acceuil(){
    return(
        <div className="acceuil flex">
            <div className="header-acceuil">
                <div className="essentiel-infos flex pointer">
                    <img src={livraison} width={50} className="livraison-img"/>
                    <div className="essentiel-infos-1">
                        <p>LIVRAISON</p>
                        <div style={{color:"rgb(151, 151, 151)"}}>Disponible 58 wilaya</div>
                    </div>
                </div>
                <div className="essentiel-infos flex pointer">
                    <img src={payment} width={50} className="payment-img"/>
                    <div className="essentiel-infos-1">
                        <p>PAIMENT</p>
                        <div style={{color:"rgb(151, 151, 151)"}}>Paiment main a main</div>
                    </div>
                </div>
                <div className="essentiel-infos flex pointer">
                    <img src={styles} width={50} className="styles-img"/>
                    <div className="essentiel-infos-1">
                        <p>DIFFERENTS STYLES</p>
                        <div style={{color:"rgb(151, 151, 151)"}}>On a tout ce dont vous avez besoin</div>
                    </div>
                </div>
            </div>
            <div className="container-products flex">
                <h3>Collections de </h3>
                <h3 style={{fontFamily: "cursive"}}>
                    Y_STORE35
                </h3>
                <Products products={products}/>
            </div>
        </div>
    )
}

export default Acceuil;