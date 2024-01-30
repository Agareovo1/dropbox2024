import Landingpage from "./pages/landingpage/landingpage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Loginpage from "./components/authentication/login";
import Navigation from "./components/navigation/navigation";
import Signuppage from "./components/authentication/signup";
import Profilepage from "./pages/profile/profilepage";
import Uploadpage from "./pages/uploadpage/uploadpage";
import Forgotpasswordpage from "./pages/authentication/forgotpassword";


function App() {
  return (
    <div className="App">
      <header className="fixed w-full">
        <Navigation/>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage/>}/>
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/signup" element={<Signuppage/>}/>
          <Route path="/profile" element={<Profilepage/>}/>
          <Route path="/upload" element={<Uploadpage/>}/>
          <Route path="/forgotpassword" element={<Forgotpasswordpage/>}/>
          {/*<Routes path="/signup" element={<Signup/>}/>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
