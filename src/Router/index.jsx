import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';

import Header from '../layout/Header';
import VerticalNav from '../layout/VerticalNav';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import DashboardHome from "../pages/Dashboard";
function BasicLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
function ConnectedLayout() {
  return (
    <>
      <VerticalNav />
        <Outlet />
    </>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="" element={<BasicLayout />} >
            <Route index element={<Home />} />
            <Route path="user/:id" element={<ConnectedLayout />} >
                <Route index element={<DashboardHome />} />
            </Route>
          <Route path="404notFound" element={<ErrorPage />} />
        </Route>
        <Route
          path="*"
          element={<Navigate to="404notFound" replace={true} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
