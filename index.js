dropArticle();

function dropArticle(){
    var AWSES = require("aws-es");
    var esconfig = require('./prod-config');
    var es = new AWSES(esconfig);
    
    var table = 'task';

    es.delete({
        index: table.toLocaleLowerCase()
    }, function (err, data) {
        console.log("out: %j",[err, data]);
 });
}
function createIndex(){
    var AWSES = require("aws-es");
    var esconfig = require('./prod-config');
    var es = new AWSES(esconfig);
    
    var table = 'dev_activityreport';

    es.createIndex({
        index: table.toLocaleLowerCase()
    }, function (err, data) {
        console.log("out: %j",[err, data]);
 });
}

