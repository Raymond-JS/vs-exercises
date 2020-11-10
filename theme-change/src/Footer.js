import React from 'react'
import { Consumer } from './ThemeProvider'
function Footer() {
    return (
        <Consumer>
            { (obj) => {
                return (
                    <footer className={`${obj.theme} both`}>
                       &#169; Theme Change 2020
                    </footer>
                )
            }

            }

        </Consumer>
        
    )
}

export default Footer;