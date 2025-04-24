import React from "react";

function Header(){
    

    const handleLogout = () => {
        console.log('Logging out');
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
                <button style={logoutButtonStyle} onClick={handleLogout}>Log out</button>
            </header>
        </>

    )
}
export default Header;

