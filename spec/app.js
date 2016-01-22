define(["require", "exports", "js/sum.ts!", "angular"], function (require, exports, sum_ts_1) {
    describe('Check configuration', function () {
        it('is true', function () {
            var test = "Hola";
            expect(sum_ts_1["default"](1, 1)).toEqual(2);
        });
    });
});
