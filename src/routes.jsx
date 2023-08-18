import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { CategoryPage } from "./pages/CategoryPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedeRoute";
import { UserContext } from "./App";

export const AppRoutes = ({ setUser }) => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage setUser={setUser} />} />
      <Route path="register" element={<RegisterPage setUser={setUser} />} />

      <Route
        element={
          <UserContext.Consumer>
            {(user) => <ProtectedRoute user={user} redirectPath={"/login"} />}
          </UserContext.Consumer>
        }
      >
        <Route path="/" element={<HomePage setUser={setUser} />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="category/:id" element={<CategoryPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
