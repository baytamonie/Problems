"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = void 0;
function expect(val) {
    return {
        toBe: (valToCheck) => valToCheck === val,
        notToBe: (valToCheck) => valToCheck !== val,
    };
}
exports.expect = expect;
//# sourceMappingURL=ToBeOrNotToBe.js.map