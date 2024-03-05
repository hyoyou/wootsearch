import "./App.css";
import { ThemeProvider } from "@fluentui/react";
import { SearchBar } from "./searchbox";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1>Woot Search</h1>
        </header>
        <div>
          <SearchBar />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
