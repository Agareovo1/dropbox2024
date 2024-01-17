import Landingpage from "./pages/landingpage/landingpage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Loginpage from "./components/authentication/login";
import Navigation from "./components/navigation/navigation";


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
          {/*<Routes path="/signup" element={<Signup/>}/>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
