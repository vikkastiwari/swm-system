import React from 'react';
import { connect } from 'react-redux';
import GoogleMapReact, { Maps } from 'google-map-react';
import Footer from '../Footer/Footer';
import * as actions from '../../Store/actions/index';

class Map extends React.Component {
  componentDidMount() {
    const id = this.props?.user?._id;
    if (id) {
      this.props.getData(id);
      this.props.getDailyLog(id);
    }
  }

  handler = (map, maps) => {
    if (!navigator.geolocation) {
      alert('Geo Location feature is not supported in this device.');
      return;
    }

    const directionsService = new maps.DirectionsService();
    const directionsRenderer = new maps.DirectionsRenderer({ map: map });

    navigator.geolocation.getCurrentPosition( (p) =>{
      let myLocation = new maps.LatLng(p.coords.latitude, p.coords.longitude);
      map.setCenter(myLocation);

      let marker = new maps.Marker({
        position: myLocation,
        map: map,
        icon: '/img/truck.png',
        title:
          "<div style = 'height:60px;width:200px'><b>Your location:</b><br />Latitude: " +
          p.coords.latitude +
          '<br />Longitude: ' +
          p.coords.longitude,
      });

      maps.event.addListener(marker, 'click', function (e) {
        let infoWindow = new maps.InfoWindow();
        infoWindow.setContent(marker.title);
        infoWindow.open(map, marker);
      });

      const icons = {
        bin1: {
          // icon: iconBase + "parking_lot_maps.png",
          icon: '/img/trash3.png',
        },
      };

      // const features = [
      //   {
      //     position: new maps.LatLng(19.436223, 72.811276),
      //     type: 'bin1',
      //   },
      //   {
      //     position: new maps.LatLng(19.429963, 72.812512),
      //     type: 'bin1',
      //   },
      // ];
      const features = [];

      if(this.props.userData && this.props.userData.binIds && this.props.userData.binIds.length > 0){
        this.props.userData.binIds.forEach(bin=>{
          features.push({
            position: new maps.LatLng(bin.latitude, bin.longitude),
            type: 'bin1',
            title:bin.bin
          });
        })
      }

      // Create markers.
      for (let i = 0; i < features.length; i++) {
        const marker = new maps.Marker({
          position: features[i].position,
          icon: icons[features[i].type].icon,
          map: map,
          title: features[i].title,
        });

        // const contentString =
        //   '<div id="content">' +
        //   '<div id="siteNotice">' +
        //   '</div>' +
        //   `<h1 id="firstHeading" class="firstHeading">Bin ${(
        //     i + 1
        //   ).toString()}</h1>` +
        //   '<div id="bodyContent">' +
        //   '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        //   'sandstone rock formation in the southern part of the ' +
        //   'Heritage Site.</p>' +
        //   '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        //   'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
        //   '(last visited June 22, 2009).</p>' +
        //   '</div>' +
        //   '</div>';

        // const infowindow = new maps.InfoWindow({
        //   content: contentString,
        // });

        marker.addListener('click', () => {
          directionsService
            .route({
              // origin: { lat: 19.429938, lng: 72.809339 },
              origin: myLocation,
              destination: features[i].position,
              travelMode: maps.TravelMode.DRIVING,
            })
            .then((response) => {
              directionsRenderer.setDirections(response);
            })
            .catch((e) => window.alert('Directions request failed due to '));
        });

        // marker.addListener('click', () => {
        //   infowindow.open({
        //     anchor: marker,
        //     map,
        //     // shouldFocus: false,
        //   });
        // });
      }
    });
  };

  collectHandler = (id) => {
    const binIds = [];
    this.props.dailyLog.binIds.forEach(bin => {
      let myBin = {...bin};
      console.log(myBin);
      if (myBin._id.toString() === id) {
        myBin = { ...myBin, collected : true};
      }
      binIds.push(myBin);
    });
    console.log(binIds);
    this.props.updateDailyLog({id: this.props.user._id, binIds});
  }

  render() {
    console.log(this.props.dailyLog);

    let myBins = null;
    if (
      this.props.dailyLog &&
      this.props.dailyLog.binIds &&
      this.props.dailyLog.binIds.length > 0
    ) {
      myBins = this.props.dailyLog.binIds.map((bin) => (
        <li className='list-group-item' key={bin._id}>
          <a href='#' className='media shadow-15'>
            <div className='media-body'>
              <h5>{bin.title}</h5>
              {/* <p className='mb-0'>Start Date: 28, July 2018</p> */}
              {/* <h2 className='title-number-carousel color-primary'>
                <span className='text-primary'>75</span>
                <small>/100 %</small>
              </h2> */}
            </div>
            <div className='w-auto'>
              {bin.collected ? (
                <button disabled className='btn btn-primary'>
                  Collected
                </button>
              ) : (
                <button
                  onClick={() => this.collectHandler(bin._id)}
                  className='btn btn-primary'>
                  Picked up
                </button>
              )}

              {/* <small className='text-success effort-time'>
                {' '}
                2hrs <i className='material-icons'>arrow_drop_up</i>
              </small>
              <div className='dynamicsparkline'></div> */}
            </div>
          </a>
        </li>
      ));
    }
      return (
        <>
          <div className='content-sticky-footer'>
            <div className='row mx-0'>
              <div className='col-12 '>
                <div className='card mb-4'>
                  <div className='card-body'>
                    <div style={{ height: '300px', width: '100%' }}>
                      <GoogleMapReact
                        bootstrapURLKeys={{
                          // key: "AIzaSyBWxuGTomZs4h4xGnV_tGkzVfxyRa7ZSQQ",
                          // key: 'AIzaSyCBzgoghyUvw8x_lQmPE-RVbEg6O3GslPE',
                          key: 'AIzaSyBse4htaIfullp1w0BFWM1FJfoo641FRpM',
                        }}
                        defaultCenter={{
                          lat: 19.20788,
                          lng: 72.861543,
                        }}
                        defaultZoom={parseInt('11')}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) =>
                          this.handler(map, maps)
                        }
                      />
                    </div>

                    {/* <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20615.506367939415!2d-83.96219662766346!3d43.515522716314265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8821dadbfe408d7d%3A0x7f126d5922d01036!2sSunrise+Convenience+Store+-+Harrison+North+Marathon!5e0!3m2!1sen!2sin!4v1544874002344'
                  width='600'
                  height='250'
                  className='border-0 w-100'
                  allowFullScreen></iframe> */}
                  </div>
                </div>
                <h2 className='block-title'>Assigned Dustbins</h2>
                <ul className='list-group media-list'>
                  {/* <li className='list-group-item'>
                    <a href='#' className='media shadow-15'>
                      <div className='media-body'>
                        <h5>Dustbin 1</h5>
                        <p className='mb-0'>Start Date: 28, July 2018</p>
                        <h2 className='title-number-carousel color-primary'>
                          <span className='text-primary'>79</span>
                          <small>/100 %</small>
                        </h2>
                      </div>
                      <div className='w-auto'>
                        <small className='text-danger effort-time'>
                          {' '}
                          2hrs <i className='material-icons'>arrow_drop_down</i>
                        </small>
                        <div className='dynamicsparkline'></div>
                      </div>
                    </a>
                  </li>
                  <li className='list-group-item'>
                    <a href='#' className='media shadow-15'>
                      <div className='media-body'>
                        <h5>Dustbin 2</h5>
                        <p className='mb-0'>Start Date: 28, July 2018</p>
                        <h2 className='title-number-carousel color-primary'>
                          <span className='text-primary'>87</span>
                          <small>/100 %</small>
                        </h2>
                      </div>
                      <div className='w-auto'>
                        <small className='text-danger effort-time'>
                          {' '}
                          2hrs <i className='material-icons'>arrow_drop_down</i>
                        </small>
                        <div className='dynamicsparkline'></div>
                      </div>
                    </a>
                  </li>
                  <li className='list-group-item'>
                    <a href='#' className='media shadow-15'>
                      <div className='media-body'>
                        <h5>Dustbin 3</h5>
                        <p className='mb-0'>Start Date: 28, July 2018</p>
                        <h2 className='title-number-carousel color-primary'>
                          <span className='text-primary'>75</span>
                          <small>/100 %</small>
                        </h2>
                      </div>
                      <div className='w-auto'>
                        <small className='text-success effort-time'>
                          {' '}
                          2hrs <i className='material-icons'>arrow_drop_up</i>
                        </small>
                        <div className='dynamicsparkline'></div>
                      </div>
                    </a>
                  </li> */}
                  {myBins}
                </ul>
              </div>
            </div>
            <br />
          </div>
          <Footer />
        </>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    user: state.auth.user,
    dailyLog: state.dailyLog.dailyLog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (id) => dispatch(actions.getSingleUser(id)),
    getDailyLog: (id) => dispatch(actions.getDailyLog(id)),
    updateDailyLog: (data) => dispatch(actions.updateDailyLog(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
