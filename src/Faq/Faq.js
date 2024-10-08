import "./Faq.css"
import { useState, useRef,useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

function Faq(){
    const quest1Ref = useRef(null);
    const quest2Ref = useRef(null);
    const quest3Ref = useRef(null);
    const quest4Ref = useRef(null);
    
    const [isUpquest1, setisUpquest1] = useState(false);
    const [isUpquest2, setisUpquest2] = useState(false);
    const [isUpquest3, setisUpquest3] = useState(false);
    const [isUpquest4, setisUpquest4] = useState(false);

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
    return(
        <div className="faq flex">
            <h4>FAQs:</h4>
            <div className="item-config flex pointer" onClick={() => toggleHeight(quest1Ref, isUpquest1, setisUpquest1)}>
                    <strong>1. Comment passer ma commande ?</strong>
                    <IoIosArrowUp className={`up-item-config ${isUpquest1 ? "rotated" : ""}`} />
            </div>
            <div style={{lineHeight:"30px",marginBottom:"25px"}} className="config" ref={quest1Ref}>
                <ul>
                    <li>Choisissez le produit, la couleur, la taille, la quantité.</li>
                    <li>Sélectionnez un vêtement, et ajoutez-le à votre panier</li>
                    <li>Confirmez la commande</li>
                    <li>Attendez un appel de notre équipe</li>
                </ul>
            </div>
            <div className="item-config flex pointer" onClick={() => toggleHeight(quest2Ref, isUpquest2, setisUpquest2)}>
                    <strong>2. Quels types de vêtements proposez-vous ?</strong>
                    <IoIosArrowUp className={`up-item-config ${isUpquest2 ? "rotated" : ""}`} />
            </div>
            <div style={{lineHeight:"30px",marginBottom:"25px"}} className="config" ref={quest2Ref}>
                <ul>
                    <li>Robe</li>
                    <li>Abaya</li>
                    <li>Ensemble</li>
                    <li>Burkini</li>
                    <li>Toquem salat</li>
                </ul>
            </div>
            <div className="item-config flex pointer" onClick={() => toggleHeight(quest3Ref, isUpquest3, setisUpquest3)}>
                    <strong>3. Puis-je échanger ou retourner un article ?</strong>
                    <IoIosArrowUp className={`up-item-config ${isUpquest3 ? "rotated" : ""}`} />
            </div>
            <div style={{lineHeight:"30px",marginBottom:"25px"}} className="config" ref={quest3Ref}>
                <ul>
                    <li>
                        Oui, vous pouvez échanger un article dans 
                        un délai de 2 jours après réception, à condition 
                        qu'il soit en parfait état et non porté. 
                        Les frais de retour sont à la charge du client.
                    </li>
                   
                </ul>
            </div>
            <div className="item-config flex pointer" onClick={() => toggleHeight(quest4Ref, isUpquest4, setisUpquest4)}>
                    <strong>4. Quels sont les délais de livraison ?</strong>
                    <IoIosArrowUp className={`up-item-config ${isUpquest4 ? "rotated" : ""}`} />
            </div>
            <div style={{lineHeight:"30px",marginBottom:"150px"}} className="config" ref={quest4Ref}>
                <ul>
                    <li>
                        Les délais de livraison varient généralement 
                        entre 3 à 10 jours ouvrables, selon votre 
                        localisation.
                    </li>
                   
                </ul>
            </div>
        </div>
    )
}

export default Faq;