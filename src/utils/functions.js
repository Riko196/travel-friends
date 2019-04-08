export const removeAllSpaces = string => {
  return string.replace(/\s+/g, "");
};

export const stringDateToISODate = stringDate => {
  return new Date(stringDate).toISOString();
};

export const ISODateTostringDate = isoDate => {
  return new Date(isoDate).toDateString();
};

export const isNull = object => {
  return object === null;
};
