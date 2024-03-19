import React, { createContext } from 'react'
import NavbarMobile from '../components/Navbar/NavbarMobile.js';
import Homepage from '../components/Homepage/Homepage.js';
import Loginpage from '../components/Loginpage/Loginpage.js';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import { GeneralProvider } from '../contexts/GeneralContext.js'

export const GeneralContext = createContext();

const App = () => {
    return (
        <Router>
            <GeneralProvider>
                <NavbarMobile/>
                <div id="generalContent">
                    <Routes>
                        <Route exact path="/" element={<Homepage/>}/>
                        <Route path="/login" element={<Loginpage/>}/>
                    </Routes>
                </div>
            </GeneralProvider>
        </Router>
    )
}

export default App