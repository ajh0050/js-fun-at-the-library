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

function saveReview(review){
var reviews = [review];
// reviews.push(review);
// return reviews.length;
return reviews;
};


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
