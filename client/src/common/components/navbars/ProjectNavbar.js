import { NavLink } from 'react-router-dom';

function ProjectNavbar() {
  return (
    <div>
      <ul>
        <li><NavLink to="/main">메인</NavLink></li>
        <li><NavLink to="/projects">프로젝트 목록</NavLink></li>
        <li><NavLink to="/project/backlog">백로그</NavLink></li>
      </ul>
    </div>
  );
}

export default ProjectNavbar;
