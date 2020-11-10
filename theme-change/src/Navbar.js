import React from 'react'
import { Consumer } from './ThemeProvider'
function Navbar() {
    return (
        <Consumer>
            { (obj) => (
                <header className={`${obj.theme} both`}> 
              <h1>Navbar</h1>
             <nav>
                <ul>
                <li><a href="https://vschool.io/" className={`${obj.theme}`}>Home</a></li>
                <li><a href="https://vschool.io/" className={`${obj.theme}`}>About</a></li>
                <li><a href="https://vschool.io/" className={`${obj.theme}`}>Contact</a></li>
               </ul>
               </nav>
            
        </header>
        )

            }

        </Consumer>
        
    )
}

export default Navbar