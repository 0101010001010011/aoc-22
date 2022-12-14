import { readFileSync } from 'fs'


export const challengeTwoPartTwo = () => {

    /*
    A =     Rock        =   X       1, Win     6
    B =     Paper       =   Y       2, Draw    3
    C =     Scissors    =   Z       3, Lose    0

    X = lose
    Y = draw
    Z = win
    */ 

    const data = readFileSync('C:\\Users\\Tim\\Documents\\GitHub\\aoc-22\\src\\public\\day02.txt',{encoding:'utf8'})
    const playData = data.split("\r\n")
    const singleData = data.split("")
    
    const lose = ["C Z","B X","A Y"]    //  X
    const draw = ["A Z","C X","B Y"]    //  Y
    const win = ["B Z","A X","C Y"]     //  Z
    
    const comparePlay = (pattern:string[])=>
    playData.map((value:string)=>
    pattern.includes(value)).filter(Boolean).length

    function handShape(letter:string){
        return singleData.filter(x => x == letter).length
    }
    
    const points = handShape("Y") * 3 + handShape("Z") * 6 + comparePlay(lose) + comparePlay(draw) * 2 + comparePlay(win) * 3

    return points

}