export const gender = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" }
];
export const preferredGender = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "I don't mind", label: "I don't mind" }
];

export const defaultPreferredGender = "I don't mind";

export const countOfTheMostPopularDestinations = 6; /* 10 */

export const ISODateFormat = "YYYY-MM-DDTHH:mm:ss.sssZ";

export const inputValidationRegex = /[^A-Za-z0-9.,'"\s]+/g;

export const inputMaxLength = process.env.REACT_APP_INPUT_LENGTH;

export const textareaMaxLength = process.env.REACT_APP_TEXTAREA_LENGTH;
