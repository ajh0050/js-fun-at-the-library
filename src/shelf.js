function shelfBook(book,shelfLocation){
if (shelfLocation.length < 3 ){
  shelfLocation.unshift(book);
};
return shelfLocation;
};

function unshelfBook(book,shelfLocation) {

for (let i=0; i < shelfLocation.length; i++ ){
  if (shelfLocation[i].title == book){
    shelfLocation.splice(i)
  };
};
//   if (shelfLocation[0] == book) {
//     shelfLocation.shift(book)
//   } else
// shelfLocation.filter(shelf => book.title != book);
return shelfLocation
};

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
