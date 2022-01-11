import Snackbar from "node-snackbar";
import classes from "./Notification.css";

const Notification = (text, type) => {
  let color = { actionTextColor: "", backgroundColor: "" };
  switch (type) {
    case "primary":
      color = { actionTextColor: "#fff", backgroundColor: "#1b55e2" };
      break;
    case "info":
      color = { actionTextColor: "#fff", backgroundColor: "#2196f3" };
      break;
    case "success":
      color = { actionTextColor: "#fff", backgroundColor: "#8dbf42" };
      break;
    case "warning":
      color = { actionTextColor: "#fff", backgroundColor: "#e2a03f" };
      break;
    case "danger":
      color = { actionTextColor: "#fff", backgroundColor: "#e7515a" };
      break;
    case "dark":
      color = { actionTextColor: "#fff", backgroundColor: "#3b3f5c" };
      break;
    default:
      color = { actionTextColor: "#fff", backgroundColor: "#1b55e2" };
      break;
  }
  Snackbar.show({
    text: text,
    pos: "top-center",
    duration: 5000,
    ...color,
    customClass: classes.Notification,
  });
};

export default Notification;
