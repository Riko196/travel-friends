export const gender = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" }
];
export const relationship = [
  { value: "single", label: "Single" },
  { value: "engaged", label: "Engaged" },
  { value: "married", label: "Married" },
  { value: "complicated", label: "It is complicated" },
  { value: "openRelationship", label: "In an open relationship" },
  { value: "widowed", label: "Widowed" },
  { value: "separated", label: "Separated" },
  { value: "divorced", label: "Divorced" },
  { value: "civilUnion", label: "In a civil union" },
  { value: "domesticPartnership", label: "In a domestic partnership" }
];
export const addiction = [
  { value: "regularly", label: "Regularly" },
  { value: "occasionally", label: "Occasionally" },
  { value: "never", label: "Never" }
];

export const destinations = [
  { value: "Vienna", label: "Vienna" },
  { value: "Bratislava", label: "Bratislava" },
  { value: "Prague", label: "Prague" },
  { value: "Zurich", label: "Zurich" },
  { value: "Cernobyl", label: "Cernobyl" }
];

export const countOfTheMostPopularDestinations = 6; /* 10 */

export const ISODateFormat = "YYYY-MM-DDTHH:mm:ss.sssZ";

export const inputValidationRegex = /[^A-Za-z0-9.,'"\s]+/g;

export const inputMaxLength = process.env.REACT_APP_INPUT_LENGTH;

export const textareaMaxLength = process.env.REACT_APP_TEXTAREA_LENGTH;
