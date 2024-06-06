import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index.jsx";
import ProtectedContent from "./pages/ProtectedContent.jsx";
import { SupabaseAuthProvider } from "./integrations/supabase/auth.jsx";

function App() {
  return (
    <SupabaseAuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/protected" element={<ProtectedContent />} />
        </Routes>
      </Router>
    </SupabaseAuthProvider>
  );
}

export default App;
