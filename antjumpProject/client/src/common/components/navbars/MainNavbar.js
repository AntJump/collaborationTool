import { NavLink } from "react-router-dom";

function MainNavbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/main">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/projects">프로젝트 목록</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainNavbar;
