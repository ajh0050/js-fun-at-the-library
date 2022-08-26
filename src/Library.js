function createLibrary(name){
var library = {}
library.name = name;
library.shelves = {
  'fantasy' :[],
  'fiction' : [],
  'nonFiction' :[],
};
return library;
};

function addBook(library,book) {
  library.shelves.
}

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
