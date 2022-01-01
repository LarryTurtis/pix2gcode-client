import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <>
      <CustomLink to="/">
        <p className="main">PX2GC</p>
        <p className="sub">convert pixel sprites to gcode</p>
      </CustomLink>
      <nav>
        <CustomLink to="/home">home</CustomLink>
        <CustomLink to="/about">about</CustomLink>
        <CustomLink to="/instructions">instructions</CustomLink>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link style={{ color: match ? "hotpink" : "white" }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
