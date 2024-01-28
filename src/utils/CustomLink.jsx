import { Link, useMatch, useResolvedPath } from "react-router-dom"; // Import necessary components

export function CustomLink({ to,icon, iconActive ,text }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <Link to={to} style={{ textDecoration: "none" }}>
        <div className="sidebar rounded-4 py-2" style={{ width: "4.6rem" }}>
          <div className="side-icon text-center">
            <li style={{ listStyle: "none" }}>
              <span className={`${isActive ? "active" : ""}`}>
                <img src={isActive ? iconActive : icon} alt={icon} />
                <p>{text}</p>
              </span>
            </li>
          </div>
        </div>
      </Link>
    );
  }
  