import { SORT_ORDER } from '../constants/index.js';

const parseSortOrder = (sortOrder) => {
  if (!sortOrder) return SORT_ORDER.ASC;

  const cleanOrder = sortOrder.trim().toLowerCase();
  const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);
  if (isKnownOrder) return cleanOrder;
  return SORT_ORDER.ASC;
};

const parseSortBy = (sortBy) => {
  if (!sortBy) return '_id';

  const cleanSortBy = sortBy.trim();

  const keysOfContact = [
    '_id',
    'name',
    'phoneNumber',
    'email',
    'isFavourite',
    'contactType',
  ];

  if (keysOfContact.includes(cleanSortBy)) {
    return cleanSortBy;
  }
  return '_id';
};

export const parseSortParams = (query) => {
  const { sortOrder, sortBy } = query;

  const parsedSortOrder = parseSortOrder(sortOrder);
  const parsedSortBy = parseSortBy(sortBy);

  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};
