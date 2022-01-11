export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;

  if (!rules) return true;

  if (rules.required && typeof value === "string") {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  // if (rules.isErpId) {
  //   if (value.length == 11) {
  //     isValid = ["S", "E"].includes(value[0]) && isValid;
  //   } else {
  //     isValid = false;
  //   }
  // }

  if (rules.isEmail) {
    const pattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isURL) {
    const pattern =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  // if (rules.isId) {
  //   const pattern = /^\d+$/;
  //   isValid = pattern.test(value) && isValid;
  // }

  if (rules.isMobile) {
    const pattern = /^[0-9]{10}$/;
    isValid = pattern.test(value) && isValid;
  }
  // if (rules.isPass) {
  //   const pattern = /^[0-9]{10}$/;
  //   isValid = pattern.test(value) && isValid;
  // }

  if (rules.isBoolean) {
    isValid = [true, false, 0, 1].includes(value) && isValid;
  }
  // if (rules.isDate) {
  //   isValid = [true, false, 0, 1].includes(value) && isValid;
  // }

  return isValid;
};
