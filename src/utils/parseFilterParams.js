import createHttpError from 'http-errors';

const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isContactType = ['work', 'home', 'personal'];
  if (!isContactType.includes(type)) {
    throw createHttpError(400, `Invalid type: ${type}`);
  }
  return type;
};

const parseIsFavourite = (isFavourite) => {
  if (isFavourite === undefined) return;
  if (isFavourite === 'true') return true;
  if (isFavourite === 'false') return false;

  throw createHttpError(400, `Invalid isFavourite value: ${isFavourite}`);
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedContactType = parseContactType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
