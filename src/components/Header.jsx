import React from "react";
import { useAuth } from "react-oidc-context";
import style from "../css/Header.module.css";

function Header(){

    const auth = useAuth();

    const handleLogout = () => {
        auth.signoutRedirect({
            extraQueryParams: {
                client_id: __CLIENT_ID__ , 
                redirect_uri: __REDIRECT_URI__, 
                response_type: 'code'
            },
        });
    
    };

    return(
        <>
            <header className={style.headerStyle}>
                
                  <img src="/docusecure.svg"  alt="DocuSecure Logo" className={style.logo} />
                  <span className={style.title}>DocuSecure</span>
                  <button className={style.logoutButtonStyle} onClick={handleLogout}>Log out</button>
                
            </header>
        </>

    )
}
export default Header;

