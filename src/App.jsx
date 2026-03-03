import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  // Aplica a classe no <body> sempre que o estado mudar
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="container">
      <button onClick={() => setDark(prev => !prev)}>
        Alternar tema
      </button>
      <h1>Meu site</h1>
      <p>Esse é um exemplo de tema global aplicado no body.</p>
    </div>
  );
}

export default App;
