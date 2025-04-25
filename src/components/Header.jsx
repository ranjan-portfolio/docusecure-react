import React from "react";

function Header(){
    
    const signOutRedirect = () => {
        const clientId = "3r5u33672k7gvmvdg2b6fclq2j";
        const logoutUri = "http://localhost:5173";
        const cognitoDomain = "https://eu-west-2egz4nhv3x.auth.eu-west-2.amazoncognito.com";
        window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
      };
    
   

    const logoutButtonStyle= {
        float: 'right',
        backgroundColor: '#dc3545',
        color: 'white',
        padding: '0.5em 1em',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    }

    const headerStyle={
        backgroundColor: '#007BFF',
        color: 'white',
        padding: '1em 2em',
        textAlign: 'center',
        fontSize: '1.5em'
    }

    return(
        <>
            <header style={headerStyle}>
                DocuSecure
                <button style={logoutButtonStyle} onClick={signOutRedirect}>Log out</button>
            </header>
        </>

    )
}
export default Header;

