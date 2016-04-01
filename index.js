var brain = require('brain');
var net = new brain.NeuralNetwork();
var fs = require('fs');
var data = JSON.parse(fs.readFileSync('./outpuData.json', 'utf8'));

console.log(JSON.stringify(data[0]));

net.train(data, {
    errorThresh: .00001,
    iterations: 400000,
    log: true,
    logPeriod: 1000,
    learningRate: .1,
    hiddenLayers: [2, 3, 4, 5, 6]
})

console.log(net.run([.43]) * 100);

//console.log(JSON.stringify(net.toJSON()));
