var brain = require('brain');
var net = new brain.NeuralNetwork();

var data = [
    //input:[open,high,low,close]
    //output:[next day close]
    {
        input: [.63],
        output: [.77]
    },
    {
        input: [.47],
        output: [.75]
    },
    {
        input: [.50],
        output: [.76]
    },
    {
        input: [.63],
        output: [.82]
    },
    {
        input: [.53],
        output: [.80]
    }
]

net.train(data, {
    errorThresh: .0001,
    iterations: 200000,
    log: true,
    logPeriod: 1000,
    learningRate: .3
})

console.log(net.run([.43]) * 100);