import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { NotificationProvider } from "./based/Notify";

function App() {
  return (
    <>
      <NotificationProvider>
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
      </NotificationProvider>
    </>
  );
}

export default App;
