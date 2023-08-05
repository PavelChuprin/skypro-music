import * as S from "./stylesApp";
import { GlobalStyles } from "./GlobalStyles";
import { AppRoutes } from "./routes";

function App() {
  const user = localStorage.getItem("user")
    ? localStorage.getItem("user")
    : { isAllowed: false };

  return (
    <S.Wrapper>
      <GlobalStyles />
      <AppRoutes user={user} />
    </S.Wrapper>
  );
}

export default App;
