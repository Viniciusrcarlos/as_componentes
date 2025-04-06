import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"><NavLink to={'/'}>Vinicius Raupp</NavLink></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a><NavLink to={'/'}>Home</NavLink></a>
          </li>
          <li>
            <a><NavLink to={'/produto'}>Produtos</NavLink></a>
          </li>
          <li>
            <a><NavLink to={'/sobre'}>Sobre</NavLink></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;