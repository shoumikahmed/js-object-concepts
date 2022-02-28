// const myFriend = {
//     name: 'hasib',
//     isStudent: true,
//     id: 120,
//     money: 5000,
//     familyMember: {
//         sodossho: 5,
//         address: 'rn road'
//     },
//     array: [34, 25, 13, 78],
//     treatDey: function (expense) {
//         this.money = this.money - expense
//         return this.money
//     }
// }

// const treat = myFriend.treatDey(500)
// console.log(treat)

// const loadFriend = `
//     name:${myFriend.name}, address:${myFriend.familyMember.address}
//     array:${myFriend.array[1]}
// `
// console.log(loadFriend)

const divide = x => {
    const division = x / 7
    return division
}
const result = divide(14)
// console.log(result)

const sum = (x, y) => {
    const sumNumber = (x + y) / 2
    return sumNumber
}
const result1 = sum(15, 15)
// console.log(result1)

const sum7 = (x, y) => {
    const sum = (x + 7) + (y + 7)
    return sum
}
const result2 = sum7(10, 20)
// console.log(result2)

const numbers = [14, 21, 28, 35]
const divide2 = numbers.map(number => number / 7)
// console.log(divide2)

const oddNumber = numbers.filter(number => number % 2 !== 0)
// console.log(oddNumber)

const evenNumber = numbers.find(number => number % 2 === 0)
// console.log(evenNumber)

const company = {
    name: 'gp',
    ceo: { id: 20, name1: 'ajmol', food: 'fuchka' },
    web: { work: 'website development', employee: 22, framework: 'react' }
}
const { name1, food } = company.ceo
const { work, employee } = company.web
console.log(name1, food, work, employee)
