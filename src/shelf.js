function shelfBook(book,shelf){
if (shelf.length < 3 ){
  shelf.unshift(book);
};
return shelf;
};

function unshelfBook(book,shelf) {
for (let i=0; i < shelf.length; i++ ){
  if (shelf[i].title == book){
    shelf.splice(i,1)
  };
};
return shelf
};

function listTitles(shelf){
  var arrayOfTitles = [];
  for (let i=0; i < shelf.length; i++ ){
  arrayOfTitles.push(shelf[i].title)
    };
  titles = `${arrayOfTitles[0]}, ${arrayOfTitles[1]}, ${arrayOfTitles[2]}`;
  return titles;
};

function searchShelf(shelf,book){
onShelf = false ;
for (let i=0; i < shelf.length; i++ ){
  if (shelf[i].title == book){
    onShelf = true;
  };
};
return onShelf
};
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
