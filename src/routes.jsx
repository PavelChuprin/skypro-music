import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { CategoryPage } from "./pages/CategoryPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedeRoute";

export const AppRoutes = ({user}) => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<HomePage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="category/:id" element={<CategoryPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
