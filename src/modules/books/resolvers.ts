import { booksData, BooksDataInterface } from './data';

export const bookResolver = {
  Query: {
    books: (): BooksDataInterface[] => booksData,
  },
};
