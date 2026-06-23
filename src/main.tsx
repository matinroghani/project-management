import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import "./index.css";
import App from "./App";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dayjs from "dayjs";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      rtl={true}
      theme="light"
    />
    <LocalizationProvider   dateAdapter={AdapterDayjs}
  adapterLocale="fa"
  dateLibInstance={dayjs
  }>
      <App />
    </LocalizationProvider>
  </StrictMode>,
);
