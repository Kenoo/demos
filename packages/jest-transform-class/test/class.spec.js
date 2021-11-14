let Bork = require("@src/class");
let bork = new Bork();

describe('Test Bork Class', () => {
    test('boundFunction is run', () => {
      expect(bork.boundFunction()).toBe("bork");
    });

    test('staticFunction is run', () => {
        expect(Bork.staticFunction()).toBe("babelIsCool");
    });

    test('__proto__.boundFunction is undefined', () => {
        expect(bork.__proto__.boundFunction).toBeUndefined();
    });

    test('boundFunction.call(undefined) is run', () => {
        expect(bork.boundFunction.call(undefined)).toBe("bork");
    });
  
  });