import "./App.css";
import { ThemeProvider } from "@fluentui/react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { DisplayItems } from "./components/DisplayItems/DisplayItems";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1>Woot Search</h1>
        </header>
        <SearchBar />
        <DisplayItems />
      </div>
    </ThemeProvider>
  );
}

export default App;
