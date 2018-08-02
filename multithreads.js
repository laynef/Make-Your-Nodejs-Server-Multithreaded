const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

global.clusters = {};

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    global.clusters.master = Number(process.env.PORT);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('online', function (worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork();
    });
} else {
    require('<PATH-TO-YOUR-NODE-JS-SERVER>');
}
