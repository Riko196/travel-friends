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

export const getInputFinalValue = inputValue => {
  return removeAllSpaces(inputValue) === "" ? null : inputValue;
};

export const getBirthdayFinalValue = birthdayValue => {
  return birthdayValue === "" ? null : stringDateToISODate(birthdayValue);
};

export const getSelectFinalValue = selectValue => {
  return selectValue === null ? null : selectValue.label;
};
