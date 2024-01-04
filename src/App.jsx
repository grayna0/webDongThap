import "./styles/app.scss";

import LayOut from "./compoents/layout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { router } from "./routes/routes";
import AdminLayout from "./compoents/layout/AdminLayout";
import MySate from "./hook/Context";

function App() {

  return (
    <MySate>
    <Router>
      <Routes>
        {router.map((route, i) => {
          const Page = route.compoent;
          const path = route.path;
          if (path.includes("/admin")) {
            return (
              <Route
                path={route.path}
                element={
                  <AdminLayout>
                    <Page />
                  </AdminLayout>
                }
                key={i}
              />
            );
          } else {
            return (
              <Route
                path={route.path}
                element={
                  <LayOut
                    home={path === "/" ? true : false}
                    breadCrumb={route.title}
                  >
                    <Page />
     
                  </LayOut>
                }
                key={i}
              />
            );
          }
        })}
      </Routes>
    </Router>
    </MySate>
  );
}

export default App;
