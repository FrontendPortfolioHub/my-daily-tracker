import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <section className="nav-bar container">
      <div className="nav-bar__content">
        <NavLink to="/" className="nav-bar__item nav-bar__item--active to-do-list icon" />
        <NavLink to="/statistic" className="nav-bar__item statistic icon" />
        <NavLink to="/weight" className="nav-bar__item weight icon" />
        <NavLink to="/fitness" className="nav-bar__item fitness-center icon" />
        <NavLink to="/timer" className="nav-bar__item timer icon" />
      </div>
    </section>
  );
};
