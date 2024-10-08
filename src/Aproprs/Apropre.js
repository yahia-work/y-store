import "./Apropre.css"
import apropre from "../images/apropre1.jpg"
function Apropre(){
    return(
        <div className="Apropre flex">
            <img src={apropre} className="apropre-img"/>
            <div className="apropre-description flex">
                <h6>NOTRE HISTOIRE</h6>
                <div className="apropre-title">
                    À propos de notre boutique
                </div>
                <div className="apropre-description-text">
                    Y_store35 est une boutique en ligne algérienne de prêt-à-porter 
                    féminin, créée par l'entrepreneure Yasmine Arezki. 
                    une entrepreneure originaire de Boumerdes, dans l'Algérie
                    , Yasmine a fondé 
                    cette page pour proposer des vêtements tendance et 
                    accessibles, reflétant à la fois l'élégance et le 
                    dynamisme de la femme algérienne moderne.
                </div>
                <div className="apropre-description-text">
                    La réussite des entrepreneures féminines nous 
                    inspire profondément. Convaincus que ce que nous 
                    portons influence notre état d’esprit, nous concevons 
                    des produits qui vous aident à vous sentir plus confiante,
                    forte, féminine et rayonnante
                </div>
            </div>
        </div>
    )
}

export default Apropre;