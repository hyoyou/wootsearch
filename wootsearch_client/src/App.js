import "./App.css";
import { ThemeProvider } from "@fluentui/react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import HelloWorld from "./HelloWorld";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1>Woot Search</h1>
          <HelloWorld />
        </header>
        <SearchBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
