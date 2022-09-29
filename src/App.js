import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.component.jsx";
import Register from "./pages/register/Register.component.jsx";
import SignIn from "./pages/sign-in/SignIn.component.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<p>Home</p>} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="register" element={<Register />} />
            <Route
              path="*"
              element={<p className="container mx-auto">Not Found</p>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
