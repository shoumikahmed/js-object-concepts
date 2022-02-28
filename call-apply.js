const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function (expense, boksish) {
        this.money = this.money - expense - boksish
        console.log(this.money)
        return this.money
    }
}

const heroBalam = {
    id: 200,
    money: 6000,
    name: 'hero balam'
}

// const heroTreatDey = kibria.treatDey.bind(heroBalam)
// heroTreatDey(500, 50)

// kibria.treatDey.call(heroBalam, 600, 100)

kibria.treatDey.apply(heroBalam, [500, 100])