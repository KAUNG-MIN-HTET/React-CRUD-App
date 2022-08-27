import React from "react";

export const UpdateForm = ({ editBook, editAuthor, bookUpdate }) => {
    return (
        <form onSubmit={bookUpdate}>
            <label htmlFor="book" className="form-label">Book</label>
            <input type="text" defaultValue={editBook} key={editBook} className="form-control" id="book" required placeholder="Enter Book" />

            <label htmlFor="author" className="form-label">Author</label>
            <input type="text" defaultValue={editAuthor} key={editAuthor} className="form-control" id="author" required placeholder="Enter Author" />

            <button className="btn">Update</button>
        </form>
    )
}