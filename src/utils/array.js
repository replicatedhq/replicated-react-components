var arrayUtils = {
  without: function(arr) {
    var els = Array.prototype.slice.call(arguments);
    els.shift();
    var nextArr = [];
    if (!arr) {
      return [];
    }
    arr.forEach(function(el) {
      if (els.indexOf(el) === -1) {
        nextArr.push(el);
      }
    });
    return nextArr;
  },
};

module.exports = arrayUtils;
