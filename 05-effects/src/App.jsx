import { createRoot } from "react-dom/client";
import Order from "./Order";

const App = () => {
  return (
    <div>
      <h1 className="logo">Padre Gino's Pizza</h1>
      <Order />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
