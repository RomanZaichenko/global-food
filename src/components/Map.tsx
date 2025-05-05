import {Pointer} from "./Pointer.tsx";
import '../styles/map.css'


interface MapProps {
  setCountry: (country: string) => void;
}

export function Map({setCountry}: MapProps) {

  const handlePointerClick = (newCountry: string) => {
    setCountry(newCountry);
  };

  return (
    <>
      <div className="map">
        <img src="src/images/map.jpg" alt="MAP" className="map-image"/>
        <Pointer country="korea" x={297} y={190} rotate={0} onClick={() => handlePointerClick("korea")} />
        <Pointer country="turkey" x={223} y={165} rotate={40} onClick={() => handlePointerClick("turkey")} />
        <Pointer country="italy" x={205} y={170} rotate={30} onClick={() => handlePointerClick("italy")} />
        <Pointer country="france" x={175} y={145} rotate={320} onClick={() => handlePointerClick("france")} />
        <Pointer country="germany" x={195} y={149} rotate={0} onClick={() => handlePointerClick("germany")} />
        <Pointer country="switzerland" x={173} y={163} rotate={200} onClick={() => handlePointerClick("switzerland")} />
        <Pointer country="uk" x={175} y={120} rotate={320} onClick={() => handlePointerClick("uk")} />
        <Pointer country="usa" x={80} y={160} rotate={0} onClick={() => handlePointerClick("usa")} />
        <Pointer country="china" x={320} y={150} rotate={0} onClick={() => handlePointerClick("china")} />
        <Pointer country="japan" x={296} y={220} rotate={40} onClick={() => handlePointerClick("japan")} />
      </div>
    </>
  )
}