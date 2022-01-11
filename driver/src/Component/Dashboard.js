import React, { Component } from "react";
import Loader from "./Loader";
import LeftSidebar from "./Sidebar/LeftSidebar/LeftSidebar";
import RightSidebar from "./Sidebar/RightSidebar/RightSidebar";
import FullScreenMenu from "./FullScreenMenu/FullScreenMenu";
import Home from "./Home/Home";

class Dashboard extends Component {
  state = {};
  render() {
    this.componentDidMount = () => {
      return <Loader />;
    };
    return (
      <>
        <div className="wrapper">
          <LeftSidebar />

          <RightSidebar />

          <FullScreenMenu />

          <Home />
        </div>
      </>
    );
  }
}

export default Dashboard;
