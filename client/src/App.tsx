import "./App.css";
import * as React from "react";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="/auth/google"
          >
            Sign in with Google
          </a>
        </header>
      </div>
    );
  }
}

export default App;
