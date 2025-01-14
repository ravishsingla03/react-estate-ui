import Filter from '../../components/Filter/filter';
import Card from '../../components/Card/card'
import { listData } from '../../lib/dummydata'
import './listpage.scss'
import Map from '../../components/Map/map';

function Listpage(){
  const data = listData;
  return (
    <div className='listpage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter></Filter>
          {data.map(item=>(
            <Card key ={item.id} item={item}></Card>
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items ={data}></Map>
      </div>
    </div>
  )
}

export default Listpage