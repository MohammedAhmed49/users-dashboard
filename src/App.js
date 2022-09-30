import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout.component.jsx";
import Dashboard from "./pages/dashboard/Dashboard.component.jsx";
import Register from "./pages/register/Register.component.jsx";
import SignIn from "./pages/sign-in/SignIn.component.jsx";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.util.js";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./store/user/user.reducer.js";
import RouteGuard from "./utils/route-guard/RouteGuard.component.jsx";
import TodoList from "./components/todo-list/TodoList.component.jsx";

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      dispatch(userActions.signIn(user));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
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
                  <Route path="users" element={<p>Users</p>} />
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
