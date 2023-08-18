import * as S from "./styles/RegisterLogin.style";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { setLocalStorage } from "../localStorage";
import { fetchLogin } from "../API";

function LoginPage({ setUser }) {
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
        <Link to="/login">
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
