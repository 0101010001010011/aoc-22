"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.challengeOne = void 0;
var fs_1 = __importDefault(require("fs"));
var challengeOne = function () {
    var data = fs_1.default.readFileSync('C:\\Users\\Tim\\Documents\\GitHub\\aoc-22\\src\\public\\day01.txt', { encoding: 'utf8' });
    var splitString = data.split("\r\n\r\n");
    var sumArray = splitString.map(function (value) {
        var splitVarString = value.split("\r\n");
        var sum = splitVarString.reduce(sumData);
        var numbSum = +sum;
        return numbSum;
    });
    function sumData(previousValue, currentValue, currentIndex, array) {
        var numbPreviousValue = +previousValue;
        var numbCurrentValue = +currentValue;
        var result = numbPreviousValue + numbCurrentValue;
        return result.toString();
    }
    sumArray.sort(function (a, b) { return b - a; });
    function treeArray() {
        return sumArray[0] + sumArray[1] + sumArray[2];
    }
    return treeArray();
};
exports.challengeOne = challengeOne;
