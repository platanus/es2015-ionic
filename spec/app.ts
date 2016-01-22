import "angular";
import sum from "js/sum.ts!"

describe('Check configuration', () => {
  it ('is true', () => {
    var test:number = "Hola"
    expect(sum(1, 1)).toEqual(2)
  })
});
