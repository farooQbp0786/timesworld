import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/login";
import RequiredAuth from "../authproviders/requiredauth";
import HomePage from "../../pages/home";

const AppRouter = () => {
  return (
    <Suspense fallback={<h4>Loading....</h4>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<RequiredAuth />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<div>Not Found!...</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
