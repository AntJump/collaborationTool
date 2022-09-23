import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <h3>메인 페이지</h3>
      <Link to="/members/login">
        <h3>로그인</h3>
      </Link>
    </div>
  );
}

export default MainPage;
