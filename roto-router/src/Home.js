import React from "react"
import {Link} from "react-router-dom"

function Home(props) {
    return (
        <div>
            <div>

            </div>
            <div>

            </div>

            <main >
                <div className="container">
                    <img src="./images/plumbing.png" alt="plumber"/> 
                    <div className="content">
                        <h2>Unclogging Your Pipes</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className="btn"><Link to="/services" className="blu"> Services</Link>  </button>
                    </div>
                         
                </div>
            </main>
        </div>
    )
}

export default Home