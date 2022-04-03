// const url= (l1,l2) => `https://api.tomtom.com/routing/1/calculateRoute/19.2021708,72.8616228:19.205814,72.874331/json?instructionsType=text&language=en-US&vehicleHeading=90&sectionType=traffic&report=effectiveSettings&routeType=eco&traffic=true&avoid=unpavedRoads&travelMode=car&vehicleMaxSpeed=120&vehicleCommercial=false&vehicleEngineType=combustion&computeTravelTimeFor=all&key=${'elz3CWnGx7dJyxSCwhhlaLdplO385LxP'}`;
const url = (l1, l2) =>
  `https://api.tomtom.com/routing/1/calculateRoute/${l1}:${l2}/json?instructionsType=text&language=en-US&vehicleHeading=90&sectionType=traffic&report=effectiveSettings&routeType=eco&traffic=true&avoid=unpavedRoads&travelMode=car&vehicleMaxSpeed=120&vehicleCommercial=false&vehicleEngineType=combustion&computeTravelTimeFor=all&key=${'elz3CWnGx7dJyxSCwhhlaLdplO385LxP'}`;

const axios = require('axios');
let XLSX = require('xlsx');

let workbook = XLSX.readFile('VRP_dataset.csv');

const currentData = XLSX.utils.sheet_to_json(
  workbook.Sheets[workbook.SheetNames[0]]
);

(async () => {
  let i;
  for (i = 1; i < currentData.length; i++) {
  // for (i = 1; i < 3; i++) {
    let response ;
    try {
       response = await axios.get(
        url(
          currentData[i - 1]['Node Location X'] +
            ',' +
            currentData[i]['Node Location Y'],
          currentData[i]['Node Location X'] +
            ',' +
            currentData[i]['Node Location Y']
        )
      );
    } catch (err) {
      console.log(err);
      continue;
    }
    let distance = response.data.routes[0]['summary']['lengthInMeters'];
    let traffic = response.data.routes[0]['summary']['trafficDelayInSeconds'];
    let timeWithoutTraffic =
      response.data.routes[0]['summary']['noTrafficTravelTimeInSeconds'];
    let trafficPercentage = (traffic * 100) / timeWithoutTraffic;
    console.log('Round : ', i);
    console.log('Distance :' + distance);
    console.log('Traffic Time :' + traffic);
    console.log('Time Without Traffic :' + timeWithoutTraffic);
    console.log('Percentage : ', trafficPercentage);

    if (trafficPercentage < 25) {
      currentData[i - 1]['Traffic'] = 1;
      console.log('Traffic Value : 1');
    } else if (trafficPercentage < 50) {
      currentData[i - 1]['Traffic'] = 2;
      console.log('Traffic Value : 2');
    } else {
      currentData[i - 1]['Traffic'] = 3;
      console.log('Traffic Value : 3');
    }
  }
  currentData[i - 1]['Traffic'] = 1;
  const nworkbook = XLSX.utils.book_new();
  let ws = XLSX.utils.json_to_sheet(currentData);
  XLSX.utils.book_append_sheet(nworkbook, ws, 'Sheet1');
  XLSX.writeFile(nworkbook, 'newVRP_dataset.csv');
})();

// Make a request for a user with a given ID

// const data = [
//   // [19.30366633510543, 72.90363075589512],
//   // [19.285178540366953, 72.90465692335215],

//   [19.20217084, 72.86162275],
//   [19.205814, 72.874331],
//   [19.208929, 72.873734],
//   [19.206884, 72.875899],
//   [19.210426, 72.872898],
//   [19.205849, 72.870515],
//   [19.21353, 72.864917],
//   [19.212483, 72.86686],
//   [19.211931, 72.866869],
//   [19.213815, 72.866982],
//   [19.20898884, 72.86703277],
//   [19.20217084, 72.86162275]
// ];

// let s = '';
// data.forEach(d=>{
//   s += d.join(",") + '/';
// });
// console.log(s);

// (async () => {
//   let results = [];
//   for (let i = 1; i < data.length; i++) {
//     let response = await axios.get(
//       url(data[i - 1].join(','), data[i].join(','))
//     );
//     // console.log(typeof response.data);
//     // console.log(response.data.routes[0]['summary']['lengthInMeters']);
//     // console.log(
//     //   response.data.routes[0]['summary']['noTrafficTravelTimeInSeconds']
//     // );
//     // console.log(
//     //   response.data.routes[0]['summary']['historicTrafficTravelTimeInSeconds']
//     // );

//     // console.log(JSON.stringify(response.data, undefined, 3));
//     // console.log(response.data.routes[0]['summary']);
//     // let distance = response.data.routes[0]['summary']['lengthInMeters'];
//     // let timeWithTraffic =
//     //   response.data.routes[0]['summary']['historicTrafficTravelTimeInSeconds'];
//     // let timeWithoutTraffic =
//     //   response.data.routes[0]['summary']['noTrafficTravelTimeInSeconds'];
//     // let difference = timeWithTraffic - timeWithoutTraffic;
//     // console.log('Round : ', i);
//     // console.log('Distance :' + distance);
//     // console.log('Time With Traffic :' + timeWithTraffic);
//     // console.log('Time Without Traffic :' + timeWithoutTraffic);
//     // console.log('Difference : ', difference);
//     // console.log('Percentage : ', (difference * 100 ) / timeWithoutTraffic );
//     let distance = response.data.routes[0]['summary']['lengthInMeters'];
//     let traffic = response.data.routes[0]['summary']['trafficDelayInSeconds'];
//     let timeWithoutTraffic =
//       response.data.routes[0]['summary']['noTrafficTravelTimeInSeconds'];
//     let trafficPercentage = (traffic * 100) / timeWithoutTraffic;
//     console.log('Round : ', i);
//     console.log('Distance :' + distance);
//     console.log('Traffic Time :' + traffic);
//     console.log('Time Without Traffic :' + timeWithoutTraffic);
//     console.log('Percentage : ', trafficPercentage);
//     if (trafficPercentage < 25) {
//       console.log('Traffic Value : 1');
//     } else if (trafficPercentage < 50) {
//       console.log('Traffic Value : 2');
//     } else {
//       console.log('Traffic Value : 3');
//     }
//   }
// })();
