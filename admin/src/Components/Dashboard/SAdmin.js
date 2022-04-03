import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions';
import ApexCharts from 'apexcharts/dist/apexcharts.min';
import feather from 'feather-icons';
import GoogleMapReact, { Maps } from 'google-map-react';
import Loader from '../Loader/Loader';
import $ from 'jquery';

import countTo from 'jquery-countto';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: null,
      options: {
        chart: {
          id: 'usersChart',
          type: 'donut',
          width: 380,
        },
        colors: ['#5c1ac3', '#e2a03f', '#e7515a', '#e2a03f'],
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          fontSize: '14px',
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
              size: '65%',
              background: 'transparent',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '29px',
                  fontFamily: 'Nunito, sans-serif',
                  color: undefined,
                  offsetY: -10,
                },
                value: {
                  show: true,
                  fontSize: '26px',
                  fontFamily: 'Nunito, sans-serif',
                  color: '20',
                  offsetY: 16,
                  formatter: function (val) {
                    return val;
                  },
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: 'Total',
                  color: '#888ea8',
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
        series: [0, 0],
        labels: ['Drivers', 'Admin'],
        responsive: [
          {
            breakpoint: 1599,
            options: {
              chart: {
                width: '350px',
                height: '400px',
              },
              legend: {
                position: 'bottom',
              },
            },
            breakpoint: 1439,
            options: {
              chart: {
                width: '250px',
                height: '390px',
              },
              legend: {
                position: 'bottom',
              },
              plotOptions: {
                pie: {
                  donut: {
                    size: '65%',
                  },
                },
              },
            },
          },
        ],
      },
    };
  }

  componentDidMount() {
    feather.replace();
    this.props.getOverview();
    this.props.getData({ type: 'GET_BIN' });
    this.props.getData({ type: 'GET_VEHICLE' });

    try {
      let chart = new ApexCharts(
        document.querySelector('#usersChart'),
        this.state.options
      );
      chart.render();

      this.setState({ chart: chart });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate() {
    const { admin, driver } = this.props.overview.user;
    this.state.chart.updateSeries([driver, admin]);
  }

  handler = (map, maps) => {
    console.log(this.props.bins);
    console.log(this.props.vehicles);
    if (this.props.bins && this.props.bins.length > 0) {
      this.props.bins.forEach((bin) => {
        const marker = new maps.Marker({
          position: new maps.LatLng(bin.latitude, bin.longitude),
          icon: '/assets/img/trash3.png',
          map: map,
          title: bin.bin,
        });

        marker.addListener('click', () => {
          let infoWindow = new maps.InfoWindow();
          infoWindow.setContent(marker.title);
          infoWindow.open(map, marker);
        });
      });
    }
    if (this.props.vehicles && this.props.vehicles.length > 0) {
      this.props.vehicles.forEach((vehicle) => {
        if (vehicle.lat && vehicle.lng) {
          console.log('Created')
          const marker = new maps.Marker({
            position: new maps.LatLng(vehicle.lat, vehicle.lng),
            icon: '/assets/img/truck.png',
            map: map,
            title: vehicle.name,
          });

          marker.addListener('click', () => {
            let infoWindow = new maps.InfoWindow();
            infoWindow.setContent(marker.title);
            infoWindow.open(map, marker);
          });
        }
      });
    }
  };

  render() {
    return (
      <>
        {/*  <!--  BEGIN CONTENT AREA  --> */}
        <div id='content' className='main-content'>
          <div className='layout-px-spacing'>
            <div className='row layout-top-spacing justify-content-center'>
              <div className='col-xl-6 col-lg-8 col-md-8 col-sm-12  layout-spacing'>
                <div className='statbox widget box box-shadow'>
                  <div className='widget-header'>
                    <div className='row'>
                      <div className='col-xl-12 col-md-12 col-sm-12 col-12 text-center widget-four'>
                        <h3>Overview</h3>
                        <div className='icon--counter-container'>
                          <div className='counter-container'>
                            <div className='counter-content'>
                              <h1 className='ico-counter1 ico-counter'>
                                {this.props.overview.bin}
                              </h1>
                            </div>

                            <i data-feather='trash' className='counter-ico'></i>

                            <p className='ico-counter-text'>Bins</p>
                          </div>

                          <div className='counter-container'>
                            <div className='counter-content'>
                              <h1 className='ico-counter3 ico-counter'>
                                {this.props.overview.vehicle}
                              </h1>
                            </div>

                            <i data-feather='truck' className='counter-ico'></i>
                            <p className='ico-counter-text'>Trucks</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-6 col-lg-8 col-md-8 col-sm-12  layout-spacing'>
                <div className='statbox widget box box-shadow'>
                  <div className='widget-header'>
                    <div className='row'>
                      <div className='col-xl-12 col-md-12 col-sm-12 col-12 text-center widget-four'>
                        <h3>Real Time Tracking</h3>
                        <div style={{ height: '300px' }}>
                          <GoogleMapReact
                            bootstrapURLKeys={{
                              key: 'AIzaSyBse4htaIfullp1w0BFWM1FJfoo641FRpM',
                            }}
                            defaultCenter={{
                              lat: 19.42445626440956,
                              lng: 72.81302096290587,
                            }}
                            defaultZoom={parseInt('11')}
                            yesIWantToUseGoogleMapApiInternals
                            onGoogleApiLoaded={({ map, maps }) =>
                              this.handler(map, maps)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                <div className='widget widget-chart-two'>
                  <div className='widget-heading'>
                    <h5 className=''>Users</h5>
                  </div>
                  <div className='widget-content'>
                    <div id='usersChart' className=''></div>
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
    bins: state.CRUD.bins,
    vehicles: state.CRUD.vehicles,
    overview: state.other.overview,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => dispatch(actions.getData(data)),
    getOverview: () => dispatch(actions.overview()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
