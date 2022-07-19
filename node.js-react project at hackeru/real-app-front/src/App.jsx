import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import usersService from "./services/usersService";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import SignUp from "./components/signup";
import SignUpBiz from "./components/signupBiz";
import SignIn from "./components/signin";
import LogOut from "./components/logout";
import CreateCard from "./components/createCard";
import ProtectedRoute from "./components/common/protectedRoute";
import MyCards from "./components/myCards";
import EditCard from "./components/editCard";
import DeleteCard from "./components/deleteCard";

class App extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.setState({
      user: usersService.getUser(),
    });
  }

  render() {
    const { user } = this.state;

    return (
      <div className="app d-flex flex-column min-vh-100">
        <ToastContainer />
        <header>
          <Navbar user={user} />
        </header>

        <main className="container flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/my-cards/delete/:id"
              element={
                <ProtectedRoute bizOnly>
                  <DeleteCard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-cards/edit/:id"
              element={
                <ProtectedRoute bizOnly>
                  <EditCard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-cards"
              element={
                <ProtectedRoute bizOnly>
                  <MyCards />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create-card"
              element={
                <ProtectedRoute bizOnly>
                  <CreateCard />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/signup-biz" element={<SignUpBiz />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/logout" element={<LogOut />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
