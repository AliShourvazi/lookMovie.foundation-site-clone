import "./App.css";
import MainPages from "./pages/MainPages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenresPage from "./pages/GenresPage";
import NavBar from "./components/body/NavBar";
import Footer from "./components/footer/Footer";
import LogIn from "./pages/LogIn";
import SingleMoviePage from "./pages/SingleMoviePage";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Reducer from "./store/Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(logger))
);

function App(props) {
  return (
    <Provider store={store}>
      <div className="view">
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<MainPages />}></Route>
              <Route path="genres" element={<GenresPage />} />
              <Route path="logIn" element={<LogIn />} />
              <Route path=":id" element={<SingleMoviePage />} />
              <Route path="genres/:id" element={<SingleMoviePage />} />
              <Route path="*" element={<MainPages />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
