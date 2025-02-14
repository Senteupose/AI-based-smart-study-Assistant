// import React from "react";
// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Smart Study Assistant
//         </Typography>
//         <Button color="inherit" component={Link} to="/">Home</Button>
//         <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
//         <Button color="inherit" component={Link} to="/login">Login</Button>
//         <Button color="inherit" component={Link} to="/register">Register</Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;








// import React, { useContext } from "react";
// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../AuthContext";

// const NavBar = () => {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Smart Study Assistant
//         </Typography>
//         {user ? (
//           <>
//             {/* Show the user's name and a logout button when logged in */}
//             <Typography variant="body1" sx={{ marginRight: 2 }}>
//               {user.username}
//             </Typography>
//             <Button color="inherit" onClick={handleLogout}>
//               Logout
//             </Button>
//           </>
//         ) : (
//           <>
//             {/* Show navigation links when not logged in */}
//             <Button color="inherit" component={Link} to="/">
//               Home
//             </Button>
//             <Button color="inherit" component={Link} to="/dashboard">
//               Dashboard
//             </Button>
//             <Button color="inherit" component={Link} to="/login">
//               Login
//             </Button>
//             <Button color="inherit" component={Link} to="/register">
//               Register
//             </Button>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;















import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Smart Study Assistant
        </Typography>
        {user ? (
          <>
            <Typography variant="body1" sx={{ marginRight: 2 }}>
              {user.username}
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
