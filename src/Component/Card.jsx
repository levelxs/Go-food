import React, { useState, useRef, useEffect } from 'react'
import { useDispatchCart, useCart } from './contextReducer'

const Card = (props) => {

  let dispatch = useDispatchCart()
  let data = useCart()

  const priceRef = useRef()
  let options = props.options || {}
  let priceOptions = Object.keys(options)

  const [qty, setQty] = useState(1)
  const [size, setSize] = useState('')

  let finalPrice = qty * parseInt(options[size])

  const handleAddToCart = async () => {
    let food = []

    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item
        break
      }
    }

    if (food && food.size === size) {
      await dispatch({
        type: "UPDATE",
        id: props.foodItem._id,
        price: food.price + finalPrice,
        qty: Number(food.qty) + Number(qty),
        size: size
      })
      return
    }

    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    })
  }

  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  return (
    <div className="card shadow-sm border-0 rounded-4 mt-4" style={{ width: "100%", minHeight: "380px" }}>

      {/* IMAGE SECTION */}
      <img
        src={props.foodItem.img}
        className="card-img-top rounded-top-4"
        alt={props.foodItem.name}
        style={{
          height: "180px",
          objectFit: "cover",
        }}
      />

      {/* CARD BODY */}
      <div className="card-body">

        <h5 className="card-title fw-bold text-dark">
          {props.foodItem.name}
        </h5>

        <div className="d-flex flex-column justify-content-between mt-3">

          {/* QTY + SIZE OPTIONS */}
          <div className="d-flex gap-2 align-items-center mb-3">

            <select
              className="form-select form-select-sm bg-success text-white border-0"
              style={{ width: "80px" }}
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <select
              className="form-select form-select-sm bg-success text-white border-0"
              style={{ width: "100px" }}
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>

            <span className="fw-bold fs-5 ms-auto">
              ₹{finalPrice}
            </span>

          </div>

          {/* ADD TO CART BUTTON */}
          <button
            className="btn btn-success w-100 fw-semibold"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  )
}

export default Card
