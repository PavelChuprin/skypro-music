import { Link } from "react-router-dom";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const onAuthButtonClick = (user) => {
    localStorage.setItem("user", user);
    navigate("/", { replace: true });
  };

  return (
    <S.Block>
      <S.Title>Страница логина</S.Title>
      <Link to="/">
        <S.Button onClick={onAuthButtonClick}>Войти</S.Button>
      </Link>
      <Link to="/register">
        <S.Link>Зарегистрироваться</S.Link>
      </Link>
    </S.Block>
  );
};
