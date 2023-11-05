import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import NotFound from "./views/NotFound";
import ContactPage from "./views/ContactPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/contacts"
          element={<ContactPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
        </Routes>

    </div>
  );
};
export default App;
