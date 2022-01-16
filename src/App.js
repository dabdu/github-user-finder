import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./components/layouts/Alert";
import User from "./components/pages/User";
function App() {
  return (
    <>
      <GithubProvider>
        <AlertProvider>
          <Router>
            <div className="flex flex-col justify-between h-screen">
              <NavBar />
              <main>
                <Alert />
                <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/user/:login" element={<User />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/not-found" element={<NotFound />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
            <Routes></Routes>
          </Router>
        </AlertProvider>
      </GithubProvider>
    </>
  );
}
export default App;
