import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

const Layout: React.FC = () => {
  return (
    <div>
      <h1>React Route-based Code Splitting</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
            <Link to={"/first-exercise"}>First Exercise</Link>
        </li>
      </ul>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading page...</div>}>
        {/* The Outlet will be bounded to the Suspense.... and Error Boundary */}
          <Outlet /> {/* This is where child routes will render */}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Layout;
