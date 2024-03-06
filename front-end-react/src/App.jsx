import '../../../front-end-shared/css/App.css'
import {Tarjeta} from './components/Tarjeta/Tarjeta.jsx'
import {Chat} from './components/Chat/Chat.jsx'
import {Tablero} from './components/Tablero/Tablero.jsx'
// import { Routes } from 'react-router-dom'
// import { Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { Carta } from './components/Carta.jsx'

/****** 👇🏼 ROUTES 👇🏼 ****** 
# Not logged--> create account (username + password) or login
# Logged: 
  -no game started
    -starting game (loading screen waiting for other players)
    -in-game (new game)
  -game started
    -in-game (waiting for other players to join)
**************************/

function App() {
  
  return (
    <>
      {/* 
          If there's something you want to render in every page, put it here 
          The rest of the routing rendering will be inside 'Routes'

          Use 'Link' to navigate between pages instead of 'a' tags because 'a' tags will refresh the page
          and 'Link' will only change the URL (fast and smooth navigation between pages)
      */}
      

    {/* 
      <Routes>
        <Route path='/' element={<LoginOrRegister />}/>
        ...
        Add the rest of routes
      </Routes> 
    */}

      <Tarjeta />
      <Chat />
      < Tablero />
      {/* <div className='cart-container'>
        <Carta player_name='soper'/>
        <Carta player_name='redes'/>
        <Carta player_name='prog'/>
        <Carta player_name='fisica'/>
        <Carta player_name='discreto'/>
        <Carta player_name='ia'/> 
      </div> */}
    </>
  )
}

export default App
