import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return (
            <Route
              key={index}
              {...rest}
              path={route.path}
              element={<>{element}</>}
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
