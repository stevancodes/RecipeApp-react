import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import SinglePage from "./Pages/SinglePage/SinglePage";
import "./App.scss";
import { useGetRecipesMutation } from "./apiManagement/apiManagement";

export const MainContext = React.createContext();

function App() {
  const [recipes, setRecipes] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [getRecipes] = useGetRecipesMutation();

  const update = () => {
    setShouldUpdate(!shouldUpdate);
  };

  useEffect(() => {
    getRecipes().then((response) => setRecipes(response.data));
  }, [shouldUpdate]);
  return (
    <>
      <MainContext.Provider value={{ update, recipes }}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/recipe/:id">
              <SinglePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  );
}

export default App;
