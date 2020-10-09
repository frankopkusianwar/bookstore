const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGER_FILTER'

const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = book => ({
  type: REMOVE_BOOK,
  book: book.id,
});

const changeFilter = () => ({
  
})

export { createBook, removeBook };
