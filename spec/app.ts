import 'angular';
import appFn from 'www/js/app';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(appFn()).toBe(2);
  });
});
