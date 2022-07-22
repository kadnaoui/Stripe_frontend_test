import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Pay from "./Pay";
import Success from "./Success";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="Pay" element={<Pay />} />
      <Route path="Success" element={<Success />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
