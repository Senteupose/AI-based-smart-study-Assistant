// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Dashboard from "./components/Dashboard";

// function App() {
//   return (
//     <Router>
//       <>
//         <NavBar /> {/* Navbar stays visible on all pages */}
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//           </Routes>
//         </main>
//       </>
//     </Router>
//   );
// }

// export default App;










import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;
