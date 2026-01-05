import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const MyOrders = () => {
  const [orderData, setOrderData] = useState(null);

  const fetchMyOrder = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/myOrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"),
        }),
      });

      const response = await res.json();
      console.log("API RESPONSE =", response);
      setOrderData(response);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          {!orderData && <h4 className="text-center mt-5">Loading Orders...</h4>}

          {orderData?.orderData?.order_data &&
  orderData.orderData.order_data
    .slice(0)
    .reverse()
    .map((order, i) => (
      <div key={i}>
        {/* DATE HEADER */}
        <div className="m-auto mt-5">
          <h5>{order.date}</h5>
          <hr />
        </div>

        {/* ITEMS INSIDE THIS DATE */}
        <div className="row">
          {order.items.map((item, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-3"
            >
              <div
                className="card mt-3"
                style={{ width: "16rem", maxHeight: "360px" }}
              >
                

                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>

                  <div
                    className="container w-100 p-0"
                    style={{ height: "38px" }}
                  >
                    <span className="m-1">{item.qty}</span>
                    <span className="m-1">{item.size}</span>

                    <div className="d-inline ms-2 h-100 w-20 fs-5">
                      ₹{item.price}/-
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}

        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyOrders;
