import * as S from "./stylesApp";
import { GlobalStyles } from "./GlobalStyles";
import { AppRoutes } from "./routes";
import React from "react";
import { getLocalStorage } from "./localStorage";

export const UserContext = React.createContext(null);

function App() {
  const [user, setUser] = React.useState(getLocalStorage());

  return (
    <S.Wrapper>
      <GlobalStyles />
      <UserContext.Provider value={{ user, setUser }}>
        <AppRoutes />
      </UserContext.Provider>
    </S.Wrapper>
  );
}

export default App;
