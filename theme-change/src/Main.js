import React from 'react'
import { Consumer } from './ThemeProvider'
function Main() {
    return (
        
           

            <Consumer >
                
                { (obj) => {
                    return (
                        <div className={`container ${obj.container}`}> 
                        <div >
<button className={`${obj.theme} btn`} onClick={obj.change}>Toggle</button>

                        </div>
                        </div>
                    )
                }

                }
                
            </Consumer>
        
    )
}
export default Main