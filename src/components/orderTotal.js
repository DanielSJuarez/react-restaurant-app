function OrderTotal({total}) {
  return (
      <div className="col">
          <button className='orderButton'>Order Total</button>
          <p>${total}</p>
      </div>
  );
}

export default OrderTotal;