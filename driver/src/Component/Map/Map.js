import React from "react";
import Footer from "../Footer/Footer";
import GoogleMapReact, { Maps } from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends React.Component {
  handler = (map, maps) => {
    // const directionsService = new maps.DirectionsService();
    // const directionsRenderer = new maps.DirectionsRenderer();
    // map = maps.Map(document.getElementById("map"), {
    //   center: maps.LatLng(19.20788, 72.861543),
    //   zoom: 14,
    // });
    // directionsRenderer.setMap(map);
    const icons = {
      bin1: {
        // icon: iconBase + "parking_lot_maps.png",
        icon: "trash.png",
      },
    };
    const features = [
      {
        position: new maps.LatLng(19.205811, 72.873078),
        type: "bin1",
      },
      {
        position: new maps.LatLng(19.20891, 72.873757),
        type: "bin1",
      },
    ];

    // Create markers.
    for (let i = 0; i < features.length; i++) {
      const marker = new maps.Marker({
        position: features[i].position,
        icon: icons[features[i].type].icon,
        map: map,
        title: "Bin " + (i + 1).toString(),
      });
      const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        `<h1 id="firstHeading" class="firstHeading">Bin ${(
          i + 1
        ).toString()}</h1>` +
        '<div id="bodyContent">' +
        "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
        "sandstone rock formation in the southern part of the " +
        "Heritage Site.</p>" +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
        "(last visited June 22, 2009).</p>" +
        "</div>" +
        "</div>";
      const infowindow = new maps.InfoWindow({
        content: contentString,
      });
      // marker.addListener("click", () => {
      //   directionsService
      //     .route({
      //       // origin: { lat: 19.429938, lng: 72.809339 },
      //       origin: new maps.LatLng(19.20788, 72.861543),
      //       destination: features[i].position,
      //       travelMode: new maps.TravelMode.DRIVING(),
      //     })
      //     .then((response) => {
      //       directionsRenderer.setDirections(response);
      //     })
      //     .catch((e) => window.alert("Directions request failed due to "));
      // });
      // marker.addListener("click", () => {
      //     infowindow.open({
      //         anchor: marker,
      //         map,
      //         // shouldFocus: false,
      //     });
      // });
    }
  };

  render() {
    return (
      <>
        <div className='content-sticky-footer'>
          <div className='row mx-0'>
            <div className='col-12 '>
              <div className='card mb-4'>
                <div className='card-body'>
                  <div style={{ height: "300px", width: "100%" }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{
                        key: "AIzaSyBWxuGTomZs4h4xGnV_tGkzVfxyRa7ZSQQ",
                      }}
                      defaultCenter={{
                        lat: 19.20788,
                        lng: 72.861543,
                      }}
                      defaultZoom={parseInt("11")}
                      yesIWantToUseGoogleMapApiInternals
                      onGoogleApiLoaded={({ map, maps }) =>
                        this.handler(map, maps)
                      }></GoogleMapReact>
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
                <li className='list-group-item'>
                  <a href='#' className='media shadow-15'>
                    <div className='media-body'>
                      <h5>Dustbin 1</h5>
                      {/* <p className='mb-0'>Start Date: 28, July 2018</p> */}
                      <h2 className='title-number-carousel color-primary'>
                        <span className='text-primary'>79</span>
                        <small>/100 %</small>
                      </h2>
                    </div>
                    <div className='w-auto'>
                      <small className='text-danger effort-time'>
                        {" "}
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
                      {/* <p className='mb-0'>Start Date: 28, July 2018</p> */}
                      <h2 className='title-number-carousel color-primary'>
                        <span className='text-primary'>87</span>
                        <small>/100 %</small>
                      </h2>
                    </div>
                    <div className='w-auto'>
                      <small className='text-danger effort-time'>
                        {" "}
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
                      {/* <p className='mb-0'>Start Date: 28, July 2018</p> */}
                      <h2 className='title-number-carousel color-primary'>
                        <span className='text-primary'>75</span>
                        <small>/100 %</small>
                      </h2>
                    </div>
                    <div className='w-auto'>
                      <small className='text-success effort-time'>
                        {" "}
                        2hrs <i className='material-icons'>arrow_drop_up</i>
                      </small>
                      <div className='dynamicsparkline'></div>
                    </div>
                  </a>
                </li>
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

export default Map;
