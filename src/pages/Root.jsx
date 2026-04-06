import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favoritos</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Root;