import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes.jsx";
import { SessionProvider } from "./services/SessionContext.jsx";
import { ScrollToAnchor } from "./Routes.jsx";

export default function App() {
  return (
    <Router>
      <SessionProvider>
        <AppRoutes />
        <ScrollToAnchor />
      </SessionProvider>
    </Router>
  );
}
