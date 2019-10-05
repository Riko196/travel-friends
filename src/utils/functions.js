import moment from "moment";
import {
  ISODateFormat,
  preferredGender,
  inputValidationRegex
} from "./constants";
import { uploadPhotoURL } from "./config";
import axios from "axios";
import cookie from "react-cookies";

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

export const isPreferredGender = genderString => {
  for (const element of preferredGender) {
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

export const getAge = dateString => {
  if (dateString != null) {
    var today = new Date();
    var birthDate = new Date();
    if (dateString.includes("/")) {
      birthDate.setDate(dateString.substring(0, 2));
      birthDate.setMonth(dateString.substring(3, 5));
      birthDate.setFullYear(dateString.substring(6, 10));
    } else {
      birthDate = new Date(dateString);
    }
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return ", " + age;
  } else return "";
};

export const uploadProfilePhoto = profilePhotoUrl => {
  fetch(profilePhotoUrl)
    .then(response => {
      return response.blob();
    })
    .then(file => {
      const data = new FormData();
      const userId = cookie.load("userId");
      data.append("blob", file, `profile_picture_${userId}.jpeg`);

      axios.post(uploadPhotoURL, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          token: cookie.load("token"),
          userId: userId
        }
      });
    });
};
