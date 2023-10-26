import * as S from "./styles/RegisterLogin.styles";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { setLocalStorage } from "../localStorage";
import { fetchLogin, getAccessToken } from "../API";
import { UserContext } from "../App";

function LoginPage() {
  const { setUser } = React.useContext(UserContext);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [disabledButtonLogin, setDisabledButtonLogin] = React.useState(false);

  const navigate = useNavigate();

  const validateAndLogin = async () => {
    setDisabledButtonLogin(true);
    try {
      let email = "";
      let password = "";

      if (emailRef.current && passwordRef.current) {
        email = emailRef.current.value;
        password = passwordRef.current.value;
      }

      const userData = await fetchLogin(email, password);
      const accessToken = await getAccessToken(email, password);

      userData.accessToken = accessToken;
      setUser(userData);
      setLocalStorage(userData);
      setErrorMessage(null);
      navigate("/", { replace: true });
    } catch (error) {
      if (error) {
        setErrorMessage(error.message);
      }
    } finally {
      setDisabledButtonLogin(false);
    }
  };

  const handleLogin = () => {
    if (!emailRef.current?.value) {
      setErrorMessage("Заполните почту");
      return;
    }
    if (!passwordRef.current?.value) {
      setErrorMessage("Введите пароль");
      return;
    }

    validateAndLogin();
  };

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        <>
          <S.Inputs>
            <S.ModalInput ref={emailRef} type="text" placeholder="Почта" />
            <S.ModalInput
              ref={passwordRef}
              type="password"
              placeholder="Пароль"
            />
          </S.Inputs>
          {errorMessage && <S.Error>{errorMessage}</S.Error>}
          <S.Buttons>
            <S.PrimaryButton
              disabled={disabledButtonLogin}
              onClick={handleLogin}
            >
              Войти
            </S.PrimaryButton>
            <Link to="/register">
              <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
            </Link>
          </S.Buttons>
        </>
      </S.ModalForm>
    </S.PageContainer>
  );
}

export { LoginPage };
