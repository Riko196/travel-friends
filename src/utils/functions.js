import moment from "moment";
import { ISODateFormat, gender, inputValidationRegex } from "./constants";

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

export const isISODateFormat = isoDateString => {
  return (
    moment(isoDateString, "YYYY-MM-DDTHH:mm:ss.sssZ").isValid() &&
    isoDateString.length === ISODateFormat.length
  );
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

export const getDefaultValue = value => {
  return value === null ? "" : value;
};

export const isGender = genderString => {
  for (const element of gender) {
    if (element.value === genderString) {
      return true;
    }
  }
  return false;
};

export const isDestinationName = (destinations, destinationName) => {
  for (const destination of destinations) {
    if (destination.destinationName === destinationName) {
      return true;
    }
  }
  return false;
};

export const isInputValid = inputString => {
  return inputString.match(inputValidationRegex) === null;
};
