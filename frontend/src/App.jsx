import Navbar from "./components/Navbar";
import HomePage from "./pages/HomaPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
//import Chat from "./pages/Chat";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";

import { Loader } from "lucide-react";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <>
      <Navbar />
      <Routes>
        {/* prettier-ignore */}
        <Route path="/" element={ authUser ? <HomePage /> : <Navigate to="/login" /> } />
        {/* prettier-ignore */}
        <Route path="/signup" element={ !authUser ? <SignUpPage /> : <Navigate to="/" /> } />
        {/* prettier-ignore */}
        <Route path="/login" element={ !authUser ? <LoginPage /> : <Navigate to="/login" />  } />
        {/* prettier-ignore */}
        <Route path="/setting" element={ <SettingsPage /> } />
        {/* prettier-ignore */}
        <Route path="/profile" element={ authUser ? <ProfilePage /> : <Navigate to="/login" /> } />
        {/* <Route path="/chat" element={<Chat />} /> */}
      </Routes>
    </>
  );
};

export default App;
