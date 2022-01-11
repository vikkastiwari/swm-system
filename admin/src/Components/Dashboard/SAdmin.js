import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/actions";
import ApexCharts from "apexcharts/dist/apexcharts.min";
import feather from "feather-icons";
import $ from "jquery";

import countTo from "jquery-countto";

class StudentDashboard extends Component {
  state = {
    chart: null,
    options: {
      chart: {
        id: "usersChart",
        type: "donut",
        width: 380,
      },
      colors: ["#5c1ac3", "#e2a03f", "#e7515a", "#e2a03f"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "14px",
        markers: {
          width: 10,
          height: 10,
        },
        itemMargin: {
          horizontal: 0,
          vertical: 8,
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
            background: "transparent",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "29px",
                fontFamily: "Nunito, sans-serif",
                color: undefined,
                offsetY: -10,
              },
              value: {
                show: true,
                fontSize: "26px",
                fontFamily: "Nunito, sans-serif",
                color: "20",
                offsetY: 16,
                formatter: function (val) {
                  return val;
                },
              },
              total: {
                show: true,
                showAlways: true,
                label: "Total",
                color: "#888ea8",
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce(function (a, b) {
                    return a + b;
                  }, 0);
                },
              },
            },
          },
        },
      },
      stroke: {
        show: true,
        width: 25,
      },
      series: [0, 0, 0],
      labels: ["Drivers", "Admin", "Super Admin"],
      responsive: [
        {
          breakpoint: 1599,
          options: {
            chart: {
              width: "350px",
              height: "400px",
            },
            legend: {
              position: "bottom",
            },
          },

          breakpoint: 1439,
          options: {
            chart: {
              width: "250px",
              height: "390px",
            },
            legend: {
              position: "bottom",
            },
            plotOptions: {
              pie: {
                donut: {
                  size: "65%",
                },
              },
            },
          },
        },
      ],
    },
  };

  componentDidMount() {
    feather.replace();
    // this.props.getAdminOverview();

    try {
      let chart = new ApexCharts(
        document.querySelector("#usersChart"),
        this.state.options
      );
      chart.render();

      this.setState({ chart: chart });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate() {
    console.log("Admin dashboard updated");
    // console.log(this.props.adminOverview.users);
    // const { faculty, admin, student } = this.props.adminOverview.users;
    // this.state.chart.updateSeries([student, faculty, admin]);
  }

  render() {
    return (
      <>
        {/*  <!--  BEGIN CONTENT AREA  --> */}
        <div id="content" className="main-content">
          <div className="layout-px-spacing">
            <div className="row layout-top-spacing justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-8 col-sm-12  layout-spacing">
                <div className="statbox widget box box-shadow">
                  <div className="widget-header">
                    <div className="row">
                      <div className="col-xl-12 col-md-12 col-sm-12 col-12 text-center widget-four">
                        <h3>Overview</h3>
                        <div className="icon--counter-container">
                          <div className="counter-container">
                            <div className="counter-content">
                              <h1 className="ico-counter1 ico-counter">
                                {/* {this.props.adminOverview.activity} */}
                              </h1>
                            </div>

                            <i
                              data-feather="activity"
                              className="counter-ico"
                            ></i>

                            <p className="ico-counter-text">Activity</p>
                          </div>

                          <div className="counter-container">
                            <div className="counter-content">
                              <h1 className="ico-counter3 ico-counter">
                                {/* {this.props.adminOverview.category} */}
                              </h1>
                            </div>

                            <i data-feather="grid" className="counter-ico"></i>
                            <p className="ico-counter-text">Category</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                <div className="widget widget-chart-two">
                  <div className="widget-heading">
                    <h5 className="">Users</h5>
                  </div>
                  <div className="widget-content">
                    <div id="usersChart" className=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // adminOverview: state.faculty.adminOverview,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getAdminOverview: () => dispatch(actions.getAdminOverview()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
