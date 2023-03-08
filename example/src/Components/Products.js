import React,{useState} from 'react';
import {phoneData} from './productdata';
import {Card,Button} from 'react-bootstrap';

const Products = () => {
  const [items,setItems]=useState(phoneData)
  const increment=(id)=>{
  const newitem=items.map((item)=>
    item.id===id?{...item,qty:item.qty+1}:item

  );
  setItems(newitem)
  }
  const decrement=(id)=>{
    const newitem=items.map((item)=>
      item.id===id&& item.qty>1?{...item,qty:item.qty-1}:item
  
    );
    setItems(newitem)
    }
 

  return (
    <div>
        <h1 className="m-3 bg-info">Products</h1>
        {items.map((item)=>(
          <div className='p-4 d-inline-flex' key={item.id}>
           <Card className="shadow p-3 m-2 bg-body rounded" style={{ width: '15rem',height:'430px' }} >
           <Card.Img  className="p-2" variant="top" src={require(`./images/${item.image}.png`)} />
           <Card.Body>
             <Card.Title>{item.model}</Card.Title>
            
             <h3>price:{item.Price}</h3>
             <div><p>quantity:
             <Button onClick={()=>decrement(item.id)} className='m-1'>-</Button>{item.qty}
             <Button onClick={()=>increment(item.id)} className='m-1'>+</Button></p></div>
             <Button variant="primary">Add to Cart</Button>
           </Card.Body>
         </Card>
         </div>

        ))}

       
    </div>
  )
}

export default Products