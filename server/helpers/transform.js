"use strict";

module.exports = (data) => {
  return data.items.map((book) => {
    return {
      "title": book.volumeInfo.title,
      "authors": typeof book.volumeInfo.authors !== "undefined" ? book.volumeInfo.authors.join(", ") : "Author Unavailable",
      "description": book.volumeInfo.description || "Description Unavailable",
      "isbn": book.volumeInfo.industryIdentifiers[0].identifier || "ISBN Unavailable",
      "pages": book.volumeInfo.pageCount || "Page Count Unavailable",
      "image": typeof book.volumeInfo.imageLinks !== "undefined" ? book.volumeInfo.imageLinks.thumbnail.replace(/zoom=1/, "zoom=2") : "Image Unavailable"
    }
  });
}
