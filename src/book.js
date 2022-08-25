function createTitle(title) {
  return `The ${title}`
};

function buildMainCharacter(name,age,pronouns){
  var character = {
  'name': name,
  'age': age,
  'pronouns': pronouns,
  };
  return   character
};


function saveReview(reviewText,arrayOfReviews){
  // arrayOfReviews.push(reviewText);
if (arrayOfReviews[0] != reviewText && arrayOfReviews[1] != reviewText){
  arrayOfReviews.push(reviewText);
}

// arrayOfReviews.forEach((reviewText) => {
//   if (arrayOfReviews[i] !== reviewText){
//     arrayOfReviews.push(reviewText);
//   };
// });

// arrayOfReviews.has(reviewText) ? console.log('this is a dup') : arrayOfReviews.push(reviewText);
// if (arrayOfReviews)
// for (let i = 0; i < arrayOfReviews.length ; i++) {}
  // arrayOfReviews.push(reviewText)
return arrayOfReviews;
};

function calculatePageCount (title) {
pageCount = title.length * 20;
return pageCount
};

function writeBook (bookTitle,bookCharacter,genre) {
var book = {
  'title': bookTitle,
  'mainCharacter': bookCharacter,
  'pageCount' : bookTitle.length * 20,
  'genre': genre,
};
return book;
};

function editBook (book) {
book.pageCount = book.pageCount * .75 ;
return book;
};



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
