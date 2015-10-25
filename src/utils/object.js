var objectUtils = {
  omit: function(obj) {
    var els = Array.prototype.slice.call(arguments);
    els.shift();
    var nextObj = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        nextObj[prop] = obj[prop];
      }
    }
    return nextObj;
  },
};

module.exports = objectUtils;
