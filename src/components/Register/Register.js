import { Link } from "react-router-dom";
import * as S from "./styles";

export const Register = () => {
  return (
    <S.Block>
      <S.Title>Страница регистрации</S.Title>
      <S.Form>
        <input type="text" placeholder="Логин"></input>
        <input type="password" placeholder="Пароль"></input>
        <input type="password" placeholder="Повторите пароль"></input>
      </S.Form>
      <Link to="/register">
        <S.Button>Зарегистрироваться</S.Button>
      </Link>
      <Link to="/login">
        <S.Link>Назад ко входу</S.Link>
      </Link>
    </S.Block>
  );
};
