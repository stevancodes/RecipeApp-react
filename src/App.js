import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import SinglePage from "./Pages/SinglePage/SinglePage";
import "./App.scss"


export const MainContext = React.createContext()

function App() {
  const [recipes, setRecipes] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(false);


  const update = () => {
    setShouldUpdate(!shouldUpdate);
  }

  useEffect(() => {
    fetch("https://62b71438491a19c97aee3be7.mockapi.io/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
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
              <SinglePage recipes={recipes} update={update} />
            </Route>
          </Switch>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  );
}

export default App;
