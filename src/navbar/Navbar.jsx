import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../navbar/Navbar.css";
import ven from "../assets/Vector (4).png";
import sea from "../assets/search.png";
import prof1 from "../assets/prof1.png";
import prof2 from "../assets/prof2.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest(".harmburger")
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className="nav-bus">
      <div className="nav-container">
        {/* nav-logo */}
        <div className="nav-logo">
          <div className="harmburger" onClick={() => setOpen(!open)}>
            <div className={`harm1 ${open ? "active" : ""}`}></div>
            <div className={`harm1 ${open ? "active" : ""}`}></div>
            <div className={`harm1 ${open ? "active" : ""}`}></div>
          </div>

          <div>
            <p>SHOP.CO</p>
          </div>
        </div>
        {/* end of nav-logo */}

        {/* Mobile Sidebar Navigation */}
        <div ref={sidebarRef} className={`sidebar-menu ${open ? "open" : ""}`}>
          <div className="sidebar-header">
            <p>SHOP.CO</p>
            <div className="close-btn" onClick={() => setOpen(false)}>
              ×
            </div>
          </div>

          <div className="sidebar-nav-links">
            <ul>
              <li>
                <Link to="/" onClick={() => setOpen(false)}>
                  Shop <img src={ven} alt="" />
                </Link>
              </li>
              <li>
                <Link to="/onsale" onClick={() => setOpen(false)}>
                  On Sale
                </Link>
              </li>
              <li>
                <Link to="/New-arrival" onClick={() => setOpen(false)}>
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/brands" onClick={() => setOpen(false)}>
                  Brands
                </Link>
              </li>
            </ul>
          </div>

          <div className="sidebar-search">
            <div className="search-bar">
              <img src={sea} alt="" />
              <input type="text" placeholder="Search for products..." />
            </div>
          </div>
        </div>

        {/* Overlay */}
        {open && (
          <div className="sidebar-overlay" onClick={() => setOpen(false)}></div>
        )}

        {/* Desktop nav-link */}
        <div className="nav-link">
          <ul>
            <li>
              <Link to="/">
                Shop <img src={ven} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/onsale">On Sale</Link>
            </li>
            <li>
              <Link to="/New-arrival">New Arrivals</Link>
            </li>
            <li>
              <Link to="/brands">Brands</Link>
            </li>
          </ul>
        </div>
        {/* end of nav-link */}

        {/* search-bar */}
        <div className="search-bar">
          <img src={sea} alt="" />
          <input type="text" placeholder="Search for products..." />
        </div>
        {/* end of search-bar */}

        {/* nav-profile */}
        <div className="nav-profile">
          <div className="search-bar2">
            <img src={sea} alt="" />
          </div>
          <img src={prof1} alt="" />
          <img src={prof2} alt="" />
        </div>
        {/* end of nav-profile */}
      </div>
    </div>
  );
};

export default Navbar;
