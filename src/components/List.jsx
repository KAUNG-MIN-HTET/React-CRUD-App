import React from "react";

export const List = ({ book, handleDelete, handleEdit }) => {
    return (
        <div className="list">
            <p className="book">{book.book} <span className="author">{book.author}</span></p>

            <div className="btn-container">
                <button className="edit-btn" onClick={() => handleEdit(book.id)}>Edit</button>
                <button className="del-btn" onClick={() => handleDelete(book.id)}>Delete</button>
            </div>
        </div>
    )
}