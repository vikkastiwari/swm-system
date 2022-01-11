import { NavLink, Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./Sidebar.css";
import { useEffect } from "react";
import myApp from "../../Initial";
import CustomIcon from "../Icons/Custom";
import Feather from "../Icons/Feather";
import "@fortawesome/fontawesome-free/js/all";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";
const withoutAuth = true;

function MyCustomNavLink({ label, to }) {
  let match = useRouteMatch({
    path: to,
  });

  return (
    <li className={match ? "active" : ""}>
      <NavLink to={to}>{label}</NavLink>
    </li>
  );
}

const Sidebar = (props) => {
  useEffect(() => {
    myApp();
  }, []);
  return (
    <>
      {/* <!-- BEGIN SIDEBAR  --> */}
      <div className='sidebar-wrapper sidebar-theme'>
        <nav id='sidebar'>
          <div className='shadow-bottom'></div>
          <ul
            className='list-unstyled menu-categories'
            id='accordionExample'
            // style={{ paddingTop: "15px" }}
          >
            <li className='menu'>
              <NavLink
                exact
                to='/'
                activeClassName={classes.active}
                aria-expanded='false'
                className='dropdown-toggle'>
                <div className=''>
                  <Feather name='home'></Feather>
                  <span>Home</span>
                </div>
              </NavLink>
            </li>

            <li className='menu'>
              <a
                href='#userMenu'
                data-toggle='collapse'
                aria-expanded='false'
                className='dropdown-toggle'>
                <div className=''>
                  {CustomIcon.teacher}
                  <span>Users</span>
                </div>
                <div>
                  <Feather name='chevron-right'></Feather>
                </div>
              </a>
              <ul
                className='collapse submenu list-unstyled'
                id='userMenu'
                data-parent='#accordionExample'>
                {[
                  { label: "Create User", link: "/create-user" },
                  {
                    label: "Fetch User",
                    link: "/fetch-user",
                  },
                  {
                    label: "Assign Bin",
                    link: "/assign-bin",
                  },
                  // { label: "Verify Faculties", link: "/verify-faculties" },
                ].map((item, i) => (
                  <MyCustomNavLink key={i} to={item.link} label={item.label} />
                ))}
              </ul>
            </li>

            <li className='menu'>
              <NavLink
                to='/binType'
                activeClassName={classes.active}
                aria-expanded='false'
                className='dropdown-toggle'>
                <div className=''>
                  <Feather name='grid'></Feather>
                  <span>Bin Type</span>
                </div>
              </NavLink>
            </li>
            <li className='menu'>
              <NavLink
                to='/bin'
                activeClassName={classes.active}
                aria-expanded='false'
                className='dropdown-toggle'>
                <div className=''>
                  <Feather name='activity'></Feather>
                  <span>Bin</span>
                </div>
              </NavLink>
            </li>
            <li className='menu'>
              <NavLink
                to='/vehicle'
                activeClassName={classes.active}
                aria-expanded='false'
                className='dropdown-toggle'>
                <div className=''>
                  <Feather name='activity'></Feather>
                  <span>Vehicle</span>
                </div>
              </NavLink>
            </li>
          </ul>
          {/* <!--<div className="shadow-bottom"></div> --> */}
        </nav>
      </div>
      {/* <!-- END SIDEBAR  --> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Sidebar);
