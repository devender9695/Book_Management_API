function validateBookData(data) {
  if (!data.title || !data.author || !data.publicationYear) {
    return false;
  }
  return true;
}

module.exports = { validateBookData };
