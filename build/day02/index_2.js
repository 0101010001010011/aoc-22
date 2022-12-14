"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.challengeTwoPartTwo = void 0;
var fs_1 = require("fs");
var challengeTwoPartTwo = function () {
    /*
    A =     Rock        =   X       1, Win     6
    B =     Paper       =   Y       2, Draw    3
    C =     Scissors    =   Z       3, Lose    0

    X = lose
    Y = draw
    Z = win
    */
    var data = (0, fs_1.readFileSync)('C:\\Users\\Tim\\Documents\\GitHub\\aoc-22\\src\\public\\day02.txt', { encoding: 'utf8' });
    var playData = data.split("\r\n");
    var singleData = data.split("");
    var lose = ["C Z", "B X", "A Y"]; //  X
    var draw = ["A Z", "C X", "B Y"]; //,  Y
    var win = ["B Z", "A X", "C Y"]; //,  Z
    var comparePlay = function (pattern) {
        return playData.map(function (value) {
            return pattern.includes(value);
        }).filter(Boolean).length;
    };
    function handShape(letter) {
        return singleData.filter(function (x) { return x == letter; }).length;
    }
    var points = handShape("Y") * 3 + handShape("Z") * 6 + comparePlay(lose) + comparePlay(draw) * 2 + comparePlay(win) * 3;
    return points;
};
exports.challengeTwoPartTwo = challengeTwoPartTwo;
