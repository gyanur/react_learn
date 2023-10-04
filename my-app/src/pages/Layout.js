import { Outlet, Link } from "react-router-dom";
import  "./index.css";

const Layout = () => {
  return (
    <>
      <nav>
          <li>
            <Link style={{color: '#1672EC'}} to="/">Home</Link>
          </li>
          <li>
            <Link style={{color: '#1672EC'}} to="/contact">Contact</Link>
          </li>
          <li>
            <Link style={{color: '#1672EC'}} to="Blogs">Blogs</Link>
          </li>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;