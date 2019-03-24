// export const dynamicSort = (property, order) => {
//   let sortOrder = 1;
//   if (order === false) {
//     sortOrder = -1;
//     property = property.substr(1);
//   }
//   return function(a, b) {
//     let result =
//       a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
//     return result * sortOrder;
//   };
// };

export const dynamicSort = (key, ascending = true) => {
  return (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toLowerCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toLowerCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return ascending === false ? comparison * -1 : comparison;
  };
};

export const matcher = (object, key, value) =>
  String(object[key])
    .toLowerCase()
    .match(value);

export const quickSearch = (input, data) => {
  if (input.length > 0) {
    data = data.filter(item => {
      let found = false;
      for (let key in item) {
        if (matcher(item, key, input)) {
          found = true;
          break;
        }
      }
      return found && item;
    });
  }

  return data;
};

export const dateToStr = date => {
  return [date.getDate(), date.getMonth(), date.getFullYear()]
    .map(n => (n < 10 ? `0${n}` : `${n}`))
    .join("-");
};

export const strToDate = str => {
  let arrDate = str.split("-");
  return new Date(arrDate[2], arrDate[1], arrDate[0]);
};

export const formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0
});
