import { MdMenu } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoX } from "react-icons/go";
import { useState,useEffect,useContext } from "react";
import { Link } from 'react-router-dom';
import { IoArrowUpOutline } from "react-icons/io5";
import { PanierContext } from '../Context/PanierContext';
import "./Header.css";

function Header(){

    const [menuStatus,setmenuStatus] = useState(false);
    const [shopStatus,setshopStatus] = useState(false);

    const handelMenuopen = ()=>{
        setmenuStatus(true);
    }
    const handelmenuclose = ()=>{
        setmenuStatus(false)
    }
    const handelshopopen = ()=>{
        setshopStatus(true);
    }
    const handelshopclose = ()=>{
        setshopStatus(false)
    }
    const handleResize = () => {
        if (window.innerWidth > 700) {
            setmenuStatus(false); 
        }
    };
    useEffect(() => {
        if (menuStatus ) {
            document.body.style.backgroundColor = "rgba(92, 92, 92, 0.5)"; 
        } else {
            document.body.style.backgroundColor = "white"; 
        }

        window.addEventListener("resize", handleResize);

        return () => {
            document.body.style.backgroundColor = ""; 
            window.removeEventListener("resize", handleResize);
        };
    }, [menuStatus]);

    useEffect(() => {
        if (shopStatus ) {
            document.body.style.backgroundColor = "rgba(92, 92, 92, 0.5)"; 
        } else {
            document.body.style.backgroundColor = ""; 
        }

        return () => {
            document.body.style.backgroundColor = "";
        };
    }, [shopStatus]);

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth', 
        });
    };

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) { 
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    useEffect(() => {
        
        window.addEventListener('scroll', toggleVisibility);

        return () => {
        window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const {Produits} = useContext(PanierContext);  
    return(
        <div className="header flex">
            <MdMenu className="menu-icon pointer" onClick={handelMenuopen}/>
            <h3 className="pointer">
                Y_STORE3
            </h3>
            {
                menuStatus ? 
                <div className="header-2">
                    <div className="header-21 flex">
                        <h3 className="pointer">Y_STORE35</h3>
                        <GoX className="exit pointer" onClick={handelmenuclose}/>
                    </div>
                    
                    <div className="list-option-2 flex">
                        <Link to="/" className="link pointer" onClick={handelmenuclose}>Acceuil</Link>
                        <Link to="/boutique" className="link pointer" onClick={handelmenuclose}>Boutique</Link>
                        <Link to="/apropre" className="link pointer" onClick={handelmenuclose}>À propos</Link>
                        <Link to="/faq" className="link pointer" onClick={handelmenuclose}>FAQs</Link>
                        <Link to="/contact" className="link pointer" onClick={handelmenuclose}>Contact</Link>
                    </div>
                </div> 
                : null
            }
            <div className="list-option flex">
                <Link to="/" className="link pointer">Acceuil</Link>
                <Link to="/boutique" className="link pointer">Boutique</Link>
                <Link to="/apropre" className="link pointer">À propos</Link>
                <Link to="/faq" className="link pointer">FAQs</Link>
                <Link to="/contact" className="link pointer">Contact</Link>
            </div>
            <div style={{alignItems:"center"}} className="flex">
                <HiOutlineShoppingBag className="shop-icon pointer" onClick={handelshopopen} />
                ({Produits.length})
            </div>
            
            {
                <div className={`panier-shop ${shopStatus ? 'open' : 'close'}`}>
                    <div className="header-panier-shop flex">
                        <div></div>
                        <h4>Ton panier ({Produits.length})</h4>
                        <GoX className="exit-shop pointer" onClick={handelshopclose}/>
                    </div>
                </div>
            }
            {
                isVisible && 
                <IoArrowUpOutline className={`retour pointer`} 
                                    onClick={scrollToTop}/>
            }
            
            
        </div>
    )
}

export default Header;