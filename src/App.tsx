import { Place } from "./api/place";
import { useState } from "react";
import LocationSeach from "./components/locationSearch";
import Map from "./components/map";

function App() {
  const [place,setPlace] = useState<Place | null>(null);
  
  return <div className="h-screen w-screen grid grid-cols-12">
    <div className="col-span-3 p-2">
      <LocationSeach onPlaceClick={(p)=>setPlace(p)}/>
    </div>
    <div className="col-span-9">
      <Map place={place}/>
    </div>
  </div>
}

export default App
