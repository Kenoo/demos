function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class Bork {
    constructor() {
      _defineProperty(this, "instanceProperty", "bork");
  
      _defineProperty(this, "boundFunction", () => {
        return this.instanceProperty;
      });
    }
  
  }
  
  _defineProperty(Bork, "staticProperty", "babelIsCool");
  
  _defineProperty(Bork, "staticFunction", function () {
    return Bork.staticProperty;
  });
  
  module.exports = Bork;