import * as S from "./stylesApp";
import { GlobalStyles } from "./GlobalStyles";
import { AppRoutes } from "./routes";
import React from "react";
import { getLocalStorage } from "./localStorage";

export const UserContext = React.createContext(null);
export const SearchContext = React.createContext(null);

function App() {
  const [user, setUser] = React.useState(getLocalStorage());
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <S.Wrapper>
      <GlobalStyles />
      <UserContext.Provider value={{ user, setUser }}>
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <AppRoutes />
        </SearchContext.Provider>
      </UserContext.Provider>
    </S.Wrapper>
  );
}

export default App;
