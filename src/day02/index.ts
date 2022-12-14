import { readFileSync } from 'fs'


export const challengeTwo = () => {
    
    /*                                                         Round 2
    A =     Rock        =   X       1       Win     6       =   lose
    B =     Paper       =   Y       2       Draw    3       =   draw
    C =     Scissors    =   Z       3       Lose    0       =   win
    */ 
   
    const draw = ["A X", "B Y", "C Z"]
    const lose = ["A Z", "B X", "C Y"]
    const win = ["A Y", "B Z", "C X"]

    const data = readFileSync('C:\\Users\\Tim\\Documents\\GitHub\\aoc-22\\src\\public\\day02.txt',{encoding:'utf8'})
    const playData = data.split("\r\n")

    const comparePlay = (pattern:string[])=>
    playData.map((value:string)=>
    pattern.includes(value)).filter(Boolean).length

    const singleData = data.split("")
    
    function handShape(letter:string){
        return singleData.filter(x => x == letter).length
    }

    const points = comparePlay(win) * 6 + comparePlay(draw) * 3 + handShape("X") + handShape("Y") * 2 + handShape("Z") * 3
    
    return points
    

}