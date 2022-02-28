const player = { name: 'sakib', job: 'cricketer' }

const person = new Object(player.name)

const human = Object.create(player)
// console.log(human.name)

// class people {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }
// const peop = new people('manush', 24)
// console.log(peop)


function manush(name) {
    this.name = name
}
const man = new manush('rubel')
console.log(man)