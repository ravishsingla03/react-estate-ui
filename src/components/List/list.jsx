import './list.scss'
import { listData } from '../../lib/dummydata'
import Card from '../Card/card'
function List(){
  return (
    <div className='list'>
      {listData.map((item)=>(
        <Card key = {item.id} item = {item}></Card>
      ))}
    </div>
  )
}

export default List