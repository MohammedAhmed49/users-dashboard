import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.component.jsx";
import Dashboard from "./pages/dashboard/Dashboard.component.jsx";
import Register from "./pages/register/Register.component.jsx";
import SignIn from "./pages/sign-in/SignIn.component.jsx";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.util.js";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout user={user} />}>
            <Route index element={<SignIn />} />
            <Route path="dashboard" element={<Dashboard />} />
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
