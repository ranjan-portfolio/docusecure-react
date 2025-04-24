import React from "react";
import Upload from "./Upload";
import Download from "./Download";
import WelcomeMessage from "./WelcomeMessage";

const mainStyle={
    padding: '2em',
    maxWidth: '800px',
    margin: '2em',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    flex: '1',
    alignSelf: 'center'
}

function Main(){
   return(
      <main style={mainStyle}>
        <WelcomeMessage></WelcomeMessage>
        <Upload></Upload>
        <Download></Download>
      </main>
   )
}

export default Main;