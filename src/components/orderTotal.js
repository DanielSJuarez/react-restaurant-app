import {useState} from 'react'

function OrderTotal({total}) {
  const [screen, setScreen] = useState(false);

  return (
      <div className="col">
          <button className='orderButton'>Order Total</button>
          <p>${total}</p>
      </div>
  );
}

export default OrderTotal;