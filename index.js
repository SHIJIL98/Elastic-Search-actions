var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client(require('./config'));  
function checkHealth() {
    client.indices.exists({ index: 'gov' }, function (err, resp, status) {
        if (err) {
            console.log("-- Client Health error --", err);
        }
        console.log("-- Client Health --", resp);
    });
}

function createIndex() {
    client.indices.create({
        index: 'gov'
    }, function (err, resp, status) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("create", resp);
        }
    });
  
}
function deleteIndex() {
    client.indices.delete({ index: 'vendorreport' }, function (err, resp, status) {
        console.log("delete", resp);
    });
}
function deletedata() {
    client.delete({  
        index: 'taskreport',
        id: '2018-02053',
        type: 'taskreport'
      }, function (err, resp, status) {
        console.log("delete", resp);
    });
}

function addDataToIndex(){
    client.index({  
        index: 'gov',
        id: '1',
        type: 'constituencies',
        body: {
          "ConstituencyName": "Ipswich",
          "ConstituencyID": "E14000761",
          "ConstituencyType": "Borough",
          "Electorate": 74499,
          "ValidVotes": 48694,
        }
      },function(err,resp,status) {
          console.log(resp);
      });
      client.count({index: 'gov',type: 'constituencies'},function(err,resp,status) {  
        console.log("constituencies",resp);
      });    
}