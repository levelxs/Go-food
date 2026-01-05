import React, { useState } from "react";

const AddFood = () => {
    const [formData, setFormData] = useState({
        CategoryName: "",
        name: "",
        img: "",
        small: "",
        medium: "",
        full: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://go-food-backend-2.onrender.com/api/add-food", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                CategoryName: formData.CategoryName,
                name: formData.name,
                img: formData.img,
                options: {
                    small: Number(formData.small),
                    medium: Number(formData.medium),
                    full: Number(formData.full)
                }
            })
        });

        const data = await response.json();
        alert(data.message || "Food Added");
    };

    return (
        <div className="container mt-4">
            <div className="card p-4 shadow">
                <h3 className="mb-3 text-center">Add Food Item</h3>

                <form onSubmit={handleSubmit}>
                    {/* Category */}
                    <div className="mb-3">
                        <label className="form-label">Category Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="CategoryName"
                            value={formData.CategoryName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Food Name */}
                    <div className="mb-3">
                        <label className="form-label">Food Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Image URL */}
                    <div className="mb-3">
                        <label className="form-label">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            name="img"
                            value={formData.img}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Prices */}
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label className="form-label">Small Price</label>
                            <input
                                type="number"
                                className="form-control"
                                name="small"
                                value={formData.small}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="form-label">Medium Price</label>
                            <input
                                type="number"
                                className="form-control"
                                name="medium"
                                value={formData.medium}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="form-label">Full Price</label>
                            <input
                                type="number"
                                className="form-control"
                                name="full"
                                value={formData.full}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success w-100">
                        Add Food
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddFood;
