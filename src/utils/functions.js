export const removeAllSpaces = string => {
  return string.replace(/\s+/g, "");
};

export const stringDateToISODateString = stringDate => {
  return new Date(stringDate).toISOString();
};

export const ISODateStringTostringDate = isoDate => {
  return new Date(isoDate).toDateString();
};

export const ISODateStringToISODate = isoDateString => {
  return new Date(isoDateString);
};

export const isNull = object => {
  return object === null;
};

export const getInputFinalValue = inputValue => {
  return removeAllSpaces(inputValue) === "" ? null : inputValue;
};

export const getBirthdayFinalValue = birthdayValue => {
  return birthdayValue === "" ? null : stringDateToISODateString(birthdayValue);
};

export const getSelectFinalValue = selectValue => {
  return selectValue === null ? null : selectValue.label;
};

export const getCurrentDate = () => {
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  return currentDate;
};
