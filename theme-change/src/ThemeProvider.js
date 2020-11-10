import React, { Component } from "react"
const { Provider, Consumer } = React.createContext();


class ThemeProvider extends Component {
  state = {
      theme: "light",
      container: "lightContainer"
  }

  changeTheme = () => {
      this.setState(
          {
              theme: this.state.theme === "light" ? "dark" : "light",
              container: this.state.container === "lightContainer" ? "darkContainer" : "lightContainer"
            })
  }

    render() {
        return (
        <Provider value={
            {theme: this.state.theme, 
            change: this.changeTheme,
            container: this.state.container
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { ThemeProvider, Consumer }