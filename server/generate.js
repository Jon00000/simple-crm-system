module.exports = function(){
    var faker = require('faker');
    var _= require("lodash");
    var statusArray= ['Prospective','Current','Non-Active'];
    return {
        customers: _.times(100, function(n){
            return {
                id: faker.finance.account(),
                name: faker.name.findName(),
                time: faker.date.past(),
                email: faker.internet.email(),
                status:statusArray[faker.random.number(2)],
                notes:[
                    "some word some word some word some word",
                    "you can add what you want",
                    "you can delete what you dont want"
                  ]

            }
        })
    }
}