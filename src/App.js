import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout.component.jsx";
import Dashboard from "./pages/dashboard/Dashboard.component.jsx";
import Register from "./pages/register/Register.component.jsx";
import SignIn from "./pages/sign-in/SignIn.component.jsx";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.util.js";
import { useDispatch, useSelector } from "react-redux";

import TodoList from "./components/todo-list/TodoList.component.jsx";
import { setUserDocument } from "./store/user/user.actions.js";
import { fetchAllUsers } from "./store/users/users.actions.js";
import UsersList from "./components/users-list/UsersList.component.jsx";
import Settings from "./components/settings/Settings.components.jsx";

function App() {
  const user = useSelector((state) => state.user.user);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((newUser) => {
      dispatch(setUserDocument(newUser));
    });

    dispatch(fetchAllUsers());

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : null}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {!user ? (
              <>
                <Route index element={<Navigate to="/sign-in" />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route index element={<Navigate to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />}>
                  <Route index element={<TodoList />} />
                  <Route path="users" element={<UsersList />} />
                  <Route path="settings" element={<Settings />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
