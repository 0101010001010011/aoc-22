"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.challengeTwo = void 0;
var fs_1 = require("fs");
var challengeTwo = function () {
    /*                                                         Round 2
    A =     Rock        =   X       1       Win     6       =   lose
    B =     Paper       =   Y       2       Draw    3       =   draw
    C =     Scissors    =   Z       3       Lose    0       =   win
    */
    var draw = ["A X", "B Y", "C Z"];
    var lose = ["A Z", "B X", "C Y"];
    var win = ["A Y", "B Z", "C X"];
    var data = (0, fs_1.readFileSync)('C:\\Users\\Tim\\Documents\\GitHub\\aoc-22\\src\\public\\day02.txt', { encoding: 'utf8' });
    var playData = data.split("\r\n");
    var comparePlay = function (pattern) {
        return playData.map(function (value) {
            return pattern.includes(value);
        }).filter(Boolean).length;
    };
    var singleData = data.split("");
    function handShape(letter) {
        return singleData.filter(function (x) { return x == letter; }).length;
    }
    var points = comparePlay(win) * 6 + comparePlay(draw) * 3 + handShape("X") + handShape("Y") * 2 + handShape("Z") * 3;
    return points;
};
exports.challengeTwo = challengeTwo;
