"use strict";

module.exports = (data) => {
  return data.items.map((book) => {
    return {
      "title": book.volumeInfo.title,
      "authors": typeof book.volumeInfo.authors !== "undefined" ? book.volumeInfo.authors.join(", ") : "Author unavailable",
      "description": book.volumeInfo.description || "Description unavailable",
      "isbn": typeof book.volumeInfo.industryIdentifiers !== "undefined" ? book.volumeInfo.industryIdentifiers[0].identifier : "ISBN unavailable",
      "pages": book.volumeInfo.pageCount || "Page count unavailable",
      "image": typeof book.volumeInfo.imageLinks !== "undefined" ? book.volumeInfo.imageLinks.thumbnail.replace(/zoom=1/, "zoom=2") : "Image unavailable"
    }
  });
}
