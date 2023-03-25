// import logo from './logo.svg';
// import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPeople from "./pages/ListPeople.js/ListPeople";
import TransactionPage from "./pages/TransactionPage/TransactionPage";
import SignUp from "./pages/SignUp/SignUp";
import Deposit from "./pages/Deposit/Deposit";
import Withdraw from "./pages/Withdraw/Withdraw";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <ListPeople /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/transactions/:id", element: <TransactionPage /> },
    { path: "/deposit/:id", element: <Deposit /> },
    { path: "/withdraw/:id", element: <Withdraw /> },
  ]);
  return (
    <RouterProvider router={router}>
      <div>{<div></div>}</div>
    </RouterProvider>
  );
}

export default App;
