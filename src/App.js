import './App.css';
import React, { useState, useEffect , useRef} from 'react';
import { Chart } from "react-google-charts";
import useSupercluster from "use-supercluster"
import useSwr from "swr";
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

  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);
  const url = proxyurl+'/poi';
  const { data, error } = useSwr(url, { fetcher });
  const crimes = data && !error ? data.slice(0, 2000) : [];
  const points = crimes.map(poi => ({
    type: "Feature",
    properties: { cluster: false, poiId: poi.poi_id, name: poi.name },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(poi.lon),
        parseFloat(poi.lat)
      ]
    }
  }));
 const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
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
        <li>
          <span>WS Product React</span>
        </li>
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
        <div className={`view ${page !== 0 ? 'noNav' : ''}`}>

        
      {
        page === 0 && <>
        <ul className="leftNav">
          <h3>Data Type</h3>
        <li>
          <label className={dataType === 0 ? "selectedButton" : ''}>
            <input type="radio" value={0} name="dataType" onChange={ (e) => {SetDatatype(0)}} /> Events
          </label>
          <label className={dataType === 1 ? "selectedButton" : ''}>
            <input type="radio" value={1} name="dataType" onChange={ (e) => {SetDatatype(1)}} /> Stats
          </label>
        </li>
        <h3>Data Visual</h3>
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
      <div className='dataContain'>   
        {
          dataType === 1 ? <>
          {
          dailyStats ? <Chart chartType={eventVisual} width="96%" height="400px" data={dailyStats} options={{
            explorer: {},
            chart: {
              title: "Events Daily"
            },
          }} /> : <Loading />
        }
        <br /><br />
        {
          hourlyEvent ? <Chart chartType={eventVisual} width="96%" height="400px" data={hourlyStats} options={{
            explorer: {},
            chart: {
              title: "Events Hourly"
            },
          }} /> : <Loading />
        }
          </> : <>
          {
          dailyEvent ? <Chart chartType={eventVisual} width="96%" height="400px" data={dailyEvent} options={{
            explorer: {},
            chart: {
              title: "Events Daily"
            },
          }} />: <Loading />
          }
          <br /><br />
          {
            hourlyEvent ? <Chart chartType={eventVisual} width="96%" height="400px" data={hourlyEvent} options={{
              explorer: {},
              chart: {
                title: "Events Hourly"
              },
            }} /> : <Loading />
          }
          </>
        }
        </div>
        </>
      }
      {
        page === 1 && <>
        {
          poiTable && poiTable.length ? <>
          <input type="text" placeholder='Search here...' onChange={(e)=>{ searchFunc(e.target.value.toLowerCase()) }}/>
          <Chart chartType="Table" width="100%" height="100%" data={[poiHeader , ...filteredPoi]} options={{
            showRowNumber: false, 
            allowHtml: true,
          }} />
        </>: <Loading />
        }
        </>
      }
      {
        page === 2 && clusters &&<>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAKm8MCGBPYCd9mwXqXtHYf_vFM2BtglIA" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
          ]);
        }}
      >
        {  clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount
          } = cluster.properties;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}
              >
                <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (
            <Marker
              key={`poi-${cluster.properties.poiId}`}
              lat={latitude}
              lng={longitude}
            >
              <button className="poi-marker">
                <img src="https://img.icons8.com/plasticine/100/000000/place-marker.png" alt="poi doesn't pay" />
                <ul>
                  <li>{cluster.properties.name}</li>
                  <li>{`Latitude: ` + latitude}</li>
                  <li>{`Longitude: `+longitude}</li>
                </ul>
              </button>
            </Marker>
          );
        })}
      </GoogleMapReact>
        </>
      }
      </div>
      <div className='footer'>
        <ul>
          <li>My Github <a href='https://github.com/ahmadmarhaba'>Ahmad Marhaba</a> </li>
          <li>{`Page ${page+1} / 3`} </li>
        </ul>
      </div>
    </div>
    
  );
}
const fetcher = (...args) => fetch(...args).then(response => response.json());

const Marker = ({ children }) => children;
const Loading = () => <div className='loading'><span>Loading</span><img src={`/ws-product-react/loading.gif`} alt='...'/></div>;
export default App;
