import React from "react";
import { List } from "./List";
import {Clear} from "./CLear";

export const ListBox = ({ books, handleDelete, handleEdit, clearAll }) => {
    return (
        <>
            <h2 className="list-title">Books</h2>

            <div className="list-container">
                {books.length > 0 ? books.map(book => <List key={book.id} book={book} handleDelete={handleDelete} handleEdit={handleEdit} />) : <p className="alert">There is no book.</p>}
                {}
            </div>

            <Clear clearAll={clearAll} />
        </>
    )
}