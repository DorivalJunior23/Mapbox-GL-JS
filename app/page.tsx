"use client";
import "mapbox-gl/dist/mapbox-gl.css"
import Map, { Marker } from "react-map-gl";
import PropertiesDisplay from "@/components/ui/ui/PropertiesDisplay";
import  Header  from '@/components/ui/ui/header';
import { useTheme } from "next-themes";


const markers = [
  {
    latitude: 34.0522, // Griffith Observatory
    longitude: -118.2437
  },
  {
    latitude: 34.0689, // Santa Monica Pier
    longitude: -118.4523
  },
  {
    latitude: 34.0407, // Venice Beach
    longitude: -118.4224
  },
  {
    latitude: 33.9711, // Dodger Stadium
    longitude: -118.2353
  },
  {
    latitude: 34.1338, // Hollywood Walk of Fame
    longitude: -118.3286
  },
  {
    latitude: 34.0736, // La Brea Tar Pits
    longitude: -118.3391
  }
];

export default function Home() {
  const {theme} = useTheme()
  const mapboxToken = "pk.eyJ1IjoiZG9yaXZhbGp1bmlvcjIzIiwiYSI6ImNsdndyYWM2MTI1emQya21veDdxbWdqcWgifQ.ZxoU3iUXQv_GKm02-ttEhQ";
  return (
    <div className="flex flex-col h-screen w-full">
      <Header/>
      <div className="flex h-full">
        <div className="flex-grow h-screen"> 
        <Map
        mapboxAccessToken={mapboxToken}
        initialViewState={{
          longitude:  -118.3391,
          latitude: 34.073,
          zoom: 10,
        }}
        mapStyle={
          theme === 'light' ? 'mapbox://styles/mapbox/light-v10' : 'mapbox://styles/mapbox/dark-v10' 
        }
        >
         
          {markers.map((marker, index)=>(
              <Marker 
              key={index} 
              longitude={marker.longitude} 
              latitude={marker.latitude} 
              color="red"
              anchor="bottom"
              >
              </Marker>            
          ))
          }
        </Map>
        </div>
          <PropertiesDisplay/>
      </div>
    </div>
  );
}
