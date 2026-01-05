import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Card from '../Component/Card'

const Home = () => {

  const [foodCategory, setFoodCategory] = useState([])
  const [foodItems, setFoodItems] = useState([])
  const [search, setSearch] = useState('')

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/foodData', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    response = await response.json()

    setFoodCategory(response[1] || [])
    setFoodItems(response[0] || [])
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <Navbar />

      {/* ================= CAROUSEL SECTION (kept as requested) ================= */}
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ objectFit: 'contain !important' }}
        >
          <div className="carousel-inner" style={{ maxHeight: '550px' }}>

            {/* SEARCH OVERLAY */}
            <div className="carousel-caption d-flex justify-content-center" style={{ zIndex: '10', bottom: '30%' }}>
              <input
                className="form-control w-75 py-2"
                type="search"
                placeholder="Search for delicious food..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 0 15px rgba(0,0,0,0.3)"
                }}
              />
            </div>

            {/* CAROUSEL IMAGES */}
            <div className="carousel-item active">
              <img
                src="https://loremflickr.com/900/700/pastry"
                className="d-block w-100"
                style={{ filter: 'brightness(40%)', objectFit: "cover" }}
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://loremflickr.com/900/700/pizza"
                className="d-block w-100"
                style={{ filter: 'brightness(40%)', objectFit: "cover" }}
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://loremflickr.com/900/700/burger"
                className="d-block w-100"
                style={{ filter: 'brightness(40%)', objectFit: "cover" }}
                alt="..."
              />
            </div>

          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      {/* ================= FOOD CATEGORY SECTION ================= */}
      <div className="container mt-5">

        {foodCategory.length > 0 ? (
          foodCategory.map((data) => (
            <div key={data._id} className="mb-5">

              {/* Category Header */}
              <div className="d-flex align-items-center mb-2">
                <h2 className="fw-bold mb-0">{data.CategoryName}</h2>
                <div className="flex-grow-1 ms-3">
                  <hr />
                </div>
              </div>

              {/* Items Grid */}
              <div className="row g-4">
                {foodItems
                  .filter(
                    (item) =>
                      item.CategoryName === data.CategoryName &&
                      item.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((filterItems) => (
                    <div
                      key={filterItems._id}
                      className="col-12 col-md-6 col-lg-3"
                    >
                      <Card
                        foodItem={filterItems}
                        options={filterItems.options[0]}
                      />
                    </div>
                  ))}
              </div>

            </div>
          ))
        ) : (
          <div className="text-center my-5 fs-4 text-muted">Loading...</div>
        )}
      </div>

      <Footer />
    </>
  )
}

export default Home
