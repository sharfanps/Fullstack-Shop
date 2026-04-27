import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/shop_service";

const Navbar = () => {
  const navigate = useNavigate();

  // Check login status
  const isLoggedIn = localStorage.getItem("token");
    console.log("isLoggedIn :", isLoggedIn);
  // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("token");

//     navigate("/");
//   };
  const handleLogout = async () => {
    try {
    logout();

    } catch (error) {
      console.warn("Backend logout failed or already cleared", error);
    } finally {
      localStorage.removeItem("token");
      console.log("Logged out successfully");
      navigate("/");
    }
}

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Like2Shop</h2>

      <div>
        {/* <Link to="/" style={styles.link}>Products</Link> */}

        {isLoggedIn ? (
          <>
            <Link to="/productList" style={styles.link}>products</Link>
            <button onClick={handleLogout} style={styles.button}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" style={styles.link}>Login</Link>
            <Link to="/Signup" style={styles.link}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    backgroundColor: "#307de9",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  link: {
    marginLeft: "15px",
    marginRight: "10px",
    color: "#fff",
    textDecoration: "none",
  },
  button: {
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default Navbar;
