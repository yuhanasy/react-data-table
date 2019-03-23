export const dynamicSort = property => {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function(a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
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
