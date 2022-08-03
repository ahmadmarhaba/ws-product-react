import './App.css';
import React, { useState, useEffect} from 'react';
import { Chart } from "react-google-charts";

import GoogleMapReact from 'google-map-react';

function App() {

  const proxyurl = "https://vast-glass-iron.glitch.me"
  const pages = ["General Charts", "Data Table", "Geo Map"];
  const [page,SetPage] = useState(0)  

  const poiHeader = ["Id","Name","Latitude","Longitude"];
  const [poiTable,SetPoiTable] = useState(null)
  const [filteredPoi,SetFilteredPoi] = useState(null)
  
  const [poiGeo,SetPoiGeo] = useState(null)

  const [dataType,SetDatatype] = useState(0)

  const [hourlyStats,SetHourlyStats] = useState(null)
  const [dailyStats,SetDailyStats] = useState(null)

  const [hourlyEvent,SetHourlyEvent] = useState(null)
  const [dailyEvent,SetDailyEvent] = useState(null)
  const visuals = ["Line", "Bar", "LineChart", "BarChart"];
  const [eventVisual,SetEventVisual] = useState("Line")  
  const [eventVisualSelected,SetEventVisualSelected] = useState(0)  
  
  useEffect(() => {
    hourlyEvent === null && fetch(proxyurl+'/events/hourly').then(response => response.json()).then(data => {
      let array = [["Date","Events","Hour"]];
      data.forEach(element => {
        array.push([(new Date(element.date)).toDateString(),parseInt(element.events),element.hour])
      });
      SetHourlyEvent(array)
    });
    dailyEvent === null && fetch(proxyurl+'/events/daily').then(response => response.json()).then(data => {
      let array = [["Date","Events"]];
      data.forEach(element => {
        array.push([(new Date(element.date)).toDateString(),parseInt(element.events)])
      });
      SetDailyEvent(array)
    });

    hourlyStats=== null && fetch(proxyurl+'/stats/hourly').then(response => response.json()).then(data => {
      let array = [["date","hour","impressions","clicks", "revenue"]];
      data.forEach(element => {
        array.push([(new Date(element.date)).toDateString(),parseInt(element.hour),parseInt(element.impressions),parseInt(element.clicks),parseInt(element.revenue)])
      });
      SetHourlyStats(array)
    });
    dailyStats === null && fetch(proxyurl+'/stats/daily').then(response => response.json()).then(data => {
      let array = [["date","impressions","clicks", "revenue"]];
      data.forEach(element => {
        array.push([(new Date(element.date)).toDateString(),parseInt(element.impressions),parseInt(element.clicks),parseInt(element.revenue)])
      });
      SetDailyStats(array)
    });

    poiTable === null && fetch(proxyurl+'/poi').then(response => response.json()).then(data => {
      let arrTable = [];
      let arrGeo = [];
      data.forEach(element => {
        arrTable.push([{ v: element.poi_id, f: element.poi_id.toString(), p: {style: ''} },{ v: element.name, f: element.name, p: {style: ''} },{ v: element.lat, f: element.lat.toString(), p: {style: ''} },{ v: element.lon, f: element.lon.toString(), p: {style: ''} } ]);

        arrGeo.push([element.lat , element.lon , element.name]);
      });
      SetFilteredPoi(arrTable)
      SetPoiTable(arrTable)
      SetPoiGeo(arrGeo)
    });
  });

  function searchFunc(val){
    poiTable.forEach(element => {
      element.forEach(item => {
        item.p.style = "";
      });
    });
    let filteredArr = poiTable.filter( element =>{ return element[0].f.includes(val) || element[1].f.toLowerCase().includes(val) || element[2].f.includes(val) || element[3].f.includes(val) });
    let unfilteredArr = poiTable.filter( element =>{ return !element[0].f.includes(val) && !element[1].f.toLowerCase().includes(val) && !element[2].f.includes(val) && !element[3].f.includes(val) });
    filteredArr.length > 0 && SetFilteredPoi(() => {
      let temp = [...filteredArr];
      if(val.length > 0){
        [...temp].forEach(element => {
          element.forEach(item => {
            item.p.style = "background-color:#baff9d;";
          });
        });
      }
      return [...temp, ...unfilteredArr];
    });
  }

  const defaultProps = {
    center: {
      lat: 51.231487,
      lng: -99.306211
    },
    zoom: 5
  };

  return (
    <div className="App">
      <ul className="topNav">
        {
          pages.map((item , index)=>{
            return (
              <li key={index}>
                <input type="button" value={item} className={page === index ? "selectedButton" : ''} onClick={() => { SetPage(index) }}/>
              </li>
            )
          })
        }
      </ul>
      {
        page === 0 && <div>
        <ul className="leftNav">
        <li>
          <label className={dataType === 0 ? "selectedButton" : ''}>
            <input type="radio" value={0} name="dataType" onChange={ (e) => {SetDatatype(0)}} /> Events
          </label>
          <label className={dataType === 1 ? "selectedButton" : ''}>
            <input type="radio" value={1} name="dataType" onChange={ (e) => {SetDatatype(1)}} /> Stats
          </label>
        </li>
        <br /><br /><br />
        {
          visuals.map((item , index)=>{
            return (
              <li key={index}>
                <input type="button" value={item} className={eventVisualSelected === index ? "selectedButton" : ''} onClick={() => { SetEventVisual(item); SetEventVisualSelected(index); }}/>
              </li>
            )
          })
        }
      </ul>
      <div className="view">

      {
        dataType === 1 ? <>
        {
        dailyStats && <Chart chartType={eventVisual} width="96%" height="400px" data={dailyStats} options={{
          explorer: {},
          chart: {
            title: "Events Daily"
          },
        }} />
      }
      <br /><br />
      {
        hourlyEvent && <Chart chartType={eventVisual} width="96%" height="400px" data={hourlyStats} options={{
          explorer: {},
          chart: {
            title: "Events Hourly"
          },
        }} />
      }
        </> : <>
        {
        dailyEvent && <Chart chartType={eventVisual} width="96%" height="400px" data={dailyEvent} options={{
          explorer: {},
          chart: {
            title: "Events Daily"
          },
        }} />
        }
        <br /><br />
        {
          hourlyEvent && <Chart chartType={eventVisual} width="96%" height="400px" data={hourlyEvent} options={{
            explorer: {},
            chart: {
              title: "Events Hourly"
            },
          }} />
        }
        </>
      }
      </div> 
        </div>
      }
      {
        page === 1 && poiTable && poiTable.length && <div className='view noNav'>
          <input type="text" placeholder='Search here...' onChange={(e)=>{ searchFunc(e.target.value.toLowerCase()) }}/>
          <Chart chartType="Table" width="100%" height="100%" data={[poiHeader , ...filteredPoi]} options={{
            showRowNumber: false, 
            allowHtml: true,
          }} />
        </div>
      }
      {
        page === 2 && poiTable && poiTable.length && <div className='view noNav'>
          {/* <Chart chartType="GeoChart" width="100%" height="100%" data={poiGeo} options={{
            region: "CA",
            displayMode: 'markers',
            colorAxis: {colors: ['green', 'blue']},
            backgroundColor: "#81d4fa",
            datalessRegionColor: "#f3f3f3",
            geochartVersion: 11,
            resolution : "provinces",
            tooltip: {showColorCode: true , trigger : "selection"},
            magnifyingGlass : {enable: true, zoomFactor: 25},
            explorer : true
          }} /> */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAKm8MCGBPYCd9mwXqXtHYf_vFM2BtglIA" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {
          poiGeo.map((item , index)=>{
            return (
              <Marker key={index}
                lat={item[0]}
                lng={item[1]}
                text={item[2]}
              />
            )
          })
        }
      </GoogleMapReact>
        </div>
      }
    </div>
    
  );
}
const Marker = ( {text} ) => <div className="pin"><span>{text}</span><div></div></div>;
export default App;
