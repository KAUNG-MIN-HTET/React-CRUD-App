import React from "react";

export const Form = ({ handleSubmit }) => {

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="book" className="form-label">Book</label>
            <input type="text" className="form-control" id="book" required placeholder="Enter Book" />

            <label htmlFor="author" className="form-label">Author</label>
            <input type="text" className="form-control" id="author" required placeholder="Enter Author" />

            <button className="btn">Add</button>
        </form>
    )
}