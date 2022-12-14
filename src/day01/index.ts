import fs, { readFileSync } from 'fs'
import path from 'path'


export const challengeOne = () => {
    
    const data = fs.readFileSync('C:\\Users\\Tim\\Documents\\GitHub\\aoc-22\\src\\public\\day01.txt',{encoding:'utf8'})
    
    const splitString = data.split("\r\n\r\n")
    
    const sumArray = splitString.map((value:string)=>{
        const splitVarString = value.split("\r\n")
        const sum = splitVarString.reduce(sumData)
        const numbSum = +sum
        return numbSum
    })
    
    function sumData(previousValue: string, currentValue: string, currentIndex: number, array: string[]){
        const numbPreviousValue = +previousValue
        const numbCurrentValue = +currentValue
        const result =  numbPreviousValue + numbCurrentValue
        return result.toString()

    }
    
    sumArray.sort(function(a, b){return b - a})

    function treeArray(){
        return sumArray[0] + sumArray[1] + sumArray [2]
    }
    
    return  treeArray()

}
