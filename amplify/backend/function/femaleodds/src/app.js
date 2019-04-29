/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/
const AWS = require('aws-sdk')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var bodyParser = require('body-parser')
var express = require('express')

AWS.config.update({ region: process.env.TABLE_REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

let tableName = "femalefertility";
if(process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
}

const userIdPresent = false; // TODO: update in case is required to use that definition
const partitionKeyName = "id";
const partitionKeyType = "S";
const sortKeyName = "";
const sortKeyType = "";
const hasSortKey = sortKeyName !== "";
const path = "/odds";
const UNAUTH = 'UNAUTH';
const hashKeyPath = '/:' + partitionKeyName;
const sortKeyPath = hasSortKey ? '/:' + sortKeyName : '';
// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

// convert url string param to expected Type
const convertUrlType = (param, type) => {
  switch(type) {
    case "N":
      return Number.parseInt(param);
    default:
      return param;
  }
}

/********************************
 * HTTP Get method for list objects *
 ********************************/

app.get(path + hashKeyPath, function(req, res) {
  var condition = {}
  condition[partitionKeyName] = {
    ComparisonOperator: 'EQ'
  }
  
  if (userIdPresent && req.apiGateway) {
    condition[partitionKeyName]['AttributeValueList'] = [req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH ];
  } else {
    try {
      condition[partitionKeyName]['AttributeValueList'] = [ convertUrlType(req.params[partitionKeyName], partitionKeyType) ];
    } catch(err) {
      res.statusCode = 500;
      res.json({error: 'Wrong column type ' + err});
    }
  }

  let queryParams = {
    TableName: tableName,
    KeyConditions: condition
  } 

  dynamodb.query(queryParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({error: 'Could not load odds: ' + err});
    } else {
      res.json(data.Items);
    }
  });
});

/*****************************************
 * HTTP Get method for get single object *
 *****************************************/

app.get(path + '/object' + hashKeyPath + sortKeyPath, function(req, res) {
  var params = {};
  if (userIdPresent && req.apiGateway) {
    params[partitionKeyName] = req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
  } else {
    params[partitionKeyName] = req.params[partitionKeyName];
    try {
      params[partitionKeyName] = convertUrlType(req.params[partitionKeyName], partitionKeyType);
    } catch(err) {
      res.statusCode = 500;
      res.json({error: 'Wrong column type ' + err});
    }
  }
  if (hasSortKey) {
    try {
      params[sortKeyName] = convertUrlType(req.params[sortKeyName], sortKeyType);
    } catch(err) {
      res.statusCode = 500;
      res.json({error: 'Wrong column type ' + err});
    }
  }

  let getItemParams = {
    TableName: tableName,
    Key: params
  }

  dynamodb.get(getItemParams,(err, result) => {
    if(err) {
      res.statusCode = 500;
      res.json({error: 'Could not load items: ' + err.message});
    } else {
      if (result.Item) {
        let age = (new Date()).getFullYear() - result.Item.age;
        let age2 = Math.pow(age,2);
        let age3 = Math.pow(age,3);
        let agespl = (age > 35) ? (age-35) : 0;
        let agespl3 = (age > 29) ? (Math.pow((age-29),3)) : 0;
        let yrsinfer = result.Item.amountYearsChildlessSex;
        let currentIVF = result.Item.currentIVF;
        let yrsspl = (yrsinfer > 5) ? (yrsinfer-35) : 0;
        let prevcycles = result.Item.ivfcycles
        let prevspl = (prevcycles > 1) ? (prevcycles-1) :0;
        let prevlvbr = result.Item.amountChildren;
        let endomet = (result.Item.whichGynecologicalCauses == 'endometriosis') ? 1 : 0;
        let mis = (result.Item.miscarriages == 'yes') ? 1 : 0;
        let ect = (result.Item.hadEctopicPregnancy == 'yes') ? 1 : 0;
        let logOddsLiveBirth1Emb, propLiveBirth1Emb = 0;
        let logOddsLiveBirth2Emb, propLiveBirth2Emb = 0;
        let logOddsLiveBirth3Emb, propLiveBirth3Emb = 0;
        let logOddsMultiBirth1Emb, propMultiBirth1Emb = 0;
        let logOddsMultiBirth2Emb, propMultiBirth2Emb = 0;
        let logOddsMultiBirth3Emb, propMultiBirth3Emb = 0;
        let odds = {};
        
        if(currentIVF === 'yes') {
          logOddsLiveBirth1Emb = (-0.2448841) - (0.3747376*age) + (0.0193421*age2) - (0.0002913*age3) + (0.0002637*agespl3) - (0.025903*yrsinfer) - (0.4144238*prevcycles) + (0.3954898*prevspl) + (0.1239286*prevlvbr) - (0.2573125*endomet) - (0.4106893*mis) - (1.795355*ect);
          propLiveBirth1Emb = (Math.exp(logOddsLiveBirth1Emb) / 1+Math.exp(logOddsLiveBirth1Emb))
          logOddsLiveBirth2Emb = (-0.2448841) - (0.3747376*age) + (0.0193421*age2) - (0.0002913*age3) + (0.0002637*agespl3) - (0.025903*yrsinfer) - (0.4144238*prevcycles) + (0.3954898*prevspl) + (0.1239286*prevlvbr) - (0.2573125*endomet) - (0.4106893*mis) - (1.795355*ect) + 1.098584;
          propLiveBirth2Emb = (Math.exp(logOddsLiveBirth2Emb) / 1+Math.exp(logOddsLiveBirth2Emb))
          logOddsLiveBirth3Emb = (-0.2448841) - (0.3747376*age) + (0.0193421*age2) - (0.0002913*age3) + (0.0002637*agespl3) - (0.025903*yrsinfer) - (0.4144238*prevcycles) + (0.3954898*prevspl) + (0.1239286*prevlvbr) - (0.2573125*endomet) - (0.4106893*mis) - (1.795355*ect) + 1.276571;
          propLiveBirth3Emb = (Math.exp(logOddsLiveBirth3Emb) / 1+Math.exp(logOddsLiveBirth3Emb))
          logOddsMultiBirth1Emb = -2.724034 - 0.0245054*age - 0.079958*agespl + 0.0074175*yrsinfer - 0.0343089*yrsspl - 0.0785381*prevcycles - 0.1321438*endomet - 0.9741574*mis - 1.950923*ect;
          propMultiBirth1Emb = (Math.exp(logOddsMultiBirth1Emb) / 1+Math.exp(logOddsMultiBirth1Emb))
          logOddsMultiBirth2Emb = -2.724034 - 0.0245054*age - 0.079958*agespl + 0.0074175*yrsinfer - 0.0343089*yrsspl - 0.0785381*prevcycles - 0.1321438*endomet - 0.9741574*mis - 1.950923*ect + 2.484202;
          propMultiBirth2Emb = (Math.exp(logOddsMultiBirth2Emb) / 1+Math.exp(logOddsMultiBirth2Emb))
          logOddsMultiBirth3Emb = -2.724034 - 0.0245054*age - 0.079958*agespl + 0.0074175*yrsinfer - 0.0343089*yrsspl - 0.0785381*prevcycles - 0.1321438*endomet - 0.9741574*mis - 1.950923*ect + 2.985791;
          propMultiBirth3Emb = (Math.exp(logOddsMultiBirth3Emb) / 1+Math.exp(logOddsMultiBirth3Emb))
          odds = {
            age: age,
            age2: age2, 
            age3: age3,
            agespl3: agespl3,
            yrsinfer: yrsinfer, 
            prevcycles: prevcycles,
            prevspl: prevspl,
            prevlvbr: prevlvbr,
            endomet: endomet,
            mis: mis,
            ect: ect,
            logOddsLiveBirth1Emb: logOddsLiveBirth1Emb,
            propLiveBirth1Emb: propLiveBirth1Emb,
            logOddsLiveBirth2Emb: logOddsLiveBirth2Emb,
            propLiveBirth2Emb: propLiveBirth2Emb,
            logOddsLiveBirth3Emb: logOddsLiveBirth3Emb,
            propLiveBirth3Emb: propLiveBirth3Emb,
            logOddsMultiBirth1Emb: logOddsMultiBirth1Emb,
            propMultiBirth1Emb: propMultiBirth1Emb,
            logOddsMultiBirth2Emb: logOddsMultiBirth2Emb,
            propMultiBirth2Emb: propMultiBirth2Emb,
            logOddsMultiBirth3Emb: logOddsMultiBirth3Emb,
            propMultiBirth3Emb: propMultiBirth3Emb
          }
        } else if (age < 35 ) {
          let propLiveBirth = 27; // 25 to 30 percent if you’re under 35
          odds = {
            age: age,
            age2: age2, 
            age3: age3,
            agespl3: agespl3,
            yrsinfer: yrsinfer, 
            endomet: endomet,
            mis: mis,
            ect: ect,
            propLiveBirth: propLiveBirth
          }
        } else if (age >= 35 && age < 40 ) {
          let propLiveBirth = 11; // eight to 15 percent if you’re 35 to 39
          odds = {
            age: age,
            age2: age2, 
            age3: age3,
            agespl3: agespl3,
            yrsinfer: yrsinfer, 
            endomet: endomet,
            mis: mis,
            ect: ect,
            propLiveBirth: propLiveBirth
          }
        } else if (age >= 40 && age < 43 ) {
          let propLiveBirth = 5; // five percent if you’re 40 to 42
          odds = {
            age: age,
            age2: age2, 
            age3: age3,
            agespl3: agespl3,
            yrsinfer: yrsinfer, 
            endomet: endomet,
            mis: mis,
            ect: ect,
            propLiveBirth: propLiveBirth
          }
        } else if (age >= 43 ) {
          let propLiveBirth = 1; // one to two percent at age 43
          odds = {
            age: age,
            age2: age2, 
            age3: age3,
            agespl3: agespl3,
            yrsinfer: yrsinfer, 
            endomet: endomet,
            mis: mis,
            ect: ect,
            propLiveBirth: propLiveBirth
          }
        }
        res.JSON.stringify(odds);
      } else {
        let age = (new Date()).getFullYear() - result.age;
        let age2 = Math.pow(age,2);
        let age3 = Math.pow(age,3);
        let agespl = (age > 35) ? (age-35) : 0;
        let agespl3 = (age > 29) ? (Math.pow((age-29),3)) : 0;
        let yrsinfer = result.amountYearsChildlessSex;
        let currentIVF = result.currentIVF;
        let yrsspl = (yrsinfer > 5) ? (yrsinfer-35) : 0;
        let prevcycles = result.ivfcycles
        let prevspl = (prevcycles > 1) ? (prevcycles-1) :0;
        let prevlvbr = result.amountChildren;
        let endomet = (result.whichGynecologicalCauses == 'endometriosis') ? 1 : 0;
        let mis = (result.miscarriages == 'yes') ? 1 : 0;
        let ect = (result.hadEctopicPregnancy == 'yes') ? 1 : 0;
        let logOddsLiveBirth1Emb, propLiveBirth1Emb = 0;
        let logOddsLiveBirth2Emb, propLiveBirth2Emb = 0;
        let logOddsLiveBirth3Emb, propLiveBirth3Emb = 0;
        let logOddsMultiBirth1Emb, propMultiBirth1Emb = 0;
        let logOddsMultiBirth2Emb, propMultiBirth2Emb = 0;
        let logOddsMultiBirth3Emb, propMultiBirth3Emb = 0;
        let odds = {};
        
        if(currentIVF === 'yes') {
          logOddsLiveBirth1Emb = (-0.2448841) - (0.3747376*age) + (0.0193421*age2) - (0.0002913*age3) + (0.0002637*agespl3) - (0.025903*yrsinfer) - (0.4144238*prevcycles) + (0.3954898*prevspl) + (0.1239286*prevlvbr) - (0.2573125*endomet) - (0.4106893*mis) - (1.795355*ect);
          propLiveBirth1Emb = (Math.exp(logOddsLiveBirth1Emb) / 1+Math.exp(logOddsLiveBirth1Emb))
          logOddsLiveBirth2Emb = (-0.2448841) - (0.3747376*age) + (0.0193421*age2) - (0.0002913*age3) + (0.0002637*agespl3) - (0.025903*yrsinfer) - (0.4144238*prevcycles) + (0.3954898*prevspl) + (0.1239286*prevlvbr) - (0.2573125*endomet) - (0.4106893*mis) - (1.795355*ect) + 1.098584;
          propLiveBirth2Emb = (Math.exp(logOddsLiveBirth2Emb) / 1+Math.exp(logOddsLiveBirth2Emb))
          logOddsLiveBirth3Emb = (-0.2448841) - (0.3747376*age) + (0.0193421*age2) - (0.0002913*age3) + (0.0002637*agespl3) - (0.025903*yrsinfer) - (0.4144238*prevcycles) + (0.3954898*prevspl) + (0.1239286*prevlvbr) - (0.2573125*endomet) - (0.4106893*mis) - (1.795355*ect) + 1.276571;
          propLiveBirth3Emb = (Math.exp(logOddsLiveBirth3Emb) / 1+Math.exp(logOddsLiveBirth3Emb))
          logOddsMultiBirth1Emb = -2.724034 - 0.0245054*age - 0.079958*agespl + 0.0074175*yrsinfer - 0.0343089*yrsspl - 0.0785381*prevcycles - 0.1321438*endomet - 0.9741574*mis - 1.950923*ect;
          propMultiBirth1Emb = (Math.exp(logOddsMultiBirth1Emb) / 1+Math.exp(logOddsMultiBirth1Emb))
          logOddsMultiBirth2Emb = -2.724034 - 0.0245054*age - 0.079958*agespl + 0.0074175*yrsinfer - 0.0343089*yrsspl - 0.0785381*prevcycles - 0.1321438*endomet - 0.9741574*mis - 1.950923*ect + 2.484202;
          propMultiBirth2Emb = (Math.exp(logOddsMultiBirth2Emb) / 1+Math.exp(logOddsMultiBirth2Emb))
          logOddsMultiBirth3Emb = -2.724034 - 0.0245054*age - 0.079958*agespl + 0.0074175*yrsinfer - 0.0343089*yrsspl - 0.0785381*prevcycles - 0.1321438*endomet - 0.9741574*mis - 1.950923*ect + 2.985791;
          propMultiBirth3Emb = (Math.exp(logOddsMultiBirth3Emb) / 1+Math.exp(logOddsMultiBirth3Emb))
          odds = {
            age: age,
            age2: age2, 
            age3: age3,
            agespl3: agespl3,
            yrsinfer: yrsinfer, 
            prevcycles: prevcycles,
            prevspl: prevspl,
            prevlvbr: prevlvbr,
            endomet: endomet,
            mis: mis,
            ect: ect,
            logOddsLiveBirth1Emb: logOddsLiveBirth1Emb,
            propLiveBirth1Emb: propLiveBirth1Emb,
            logOddsLiveBirth2Emb: logOddsLiveBirth2Emb,
            propLiveBirth2Emb: propLiveBirth2Emb,
            logOddsLiveBirth3Emb: logOddsLiveBirth3Emb,
            propLiveBirth3Emb: propLiveBirth3Emb,
            logOddsMultiBirth1Emb: logOddsMultiBirth1Emb,
            propMultiBirth1Emb: propMultiBirth1Emb,
            logOddsMultiBirth2Emb: logOddsMultiBirth2Emb,
            propMultiBirth2Emb: propMultiBirth2Emb,
            logOddsMultiBirth3Emb: logOddsMultiBirth3Emb,
            propMultiBirth3Emb: propMultiBirth3Emb
          }
        } else if (age < 35 ) {
          let propLiveBirth = 27; // 25 to 30 percent if you’re under 35
          odds = {
            age: age,
            age2: age2, 
            age3: age3,
            agespl3: agespl3,
            yrsinfer: yrsinfer, 
            endomet: endomet,
            mis: mis,
            ect: ect,
            propLiveBirth: propLiveBirth
          }
        } else if (age >= 35 && age < 40 ) {
          let propLiveBirth = 11; // eight to 15 percent if you’re 35 to 39
          odds = {
            age: age,
            age2: age2, 
            age3: age3,
            agespl3: agespl3,
            yrsinfer: yrsinfer, 
            endomet: endomet,
            mis: mis,
            ect: ect,
            propLiveBirth: propLiveBirth
          }
        } else if (age >= 40 && age < 43 ) {
          let propLiveBirth = 5; // five percent if you’re 40 to 42
          odds = {
            age: age,
            age2: age2, 
            age3: age3,
            agespl3: agespl3,
            yrsinfer: yrsinfer, 
            endomet: endomet,
            mis: mis,
            ect: ect,
            propLiveBirth: propLiveBirth
          }
        } else if (age >= 43 ) {
          let propLiveBirth = 1; // one to two percent at age 43
          odds = {
            age: age,
            age2: age2, 
            age3: age3,
            agespl3: agespl3,
            yrsinfer: yrsinfer, 
            endomet: endomet,
            mis: mis,
            ect: ect,
            propLiveBirth: propLiveBirth
          }
        }
        res.JSON.stringify(odds) ;
      }
    }
  });
});


/************************************
* HTTP put method for insert object *
*************************************/

app.put(path, function(req, res) {
  
  if (userIdPresent) {
    req.body['userId'] = req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
  }

  let putItemParams = {
    TableName: tableName,
    Item: req.body
  }
  dynamodb.put(putItemParams, (err, data) => {
    if(err) {
      res.statusCode = 500;
      res.json({error: err, url: req.url, body: req.body});
    } else{
      res.json({success: 'put call succeed!', url: req.url, data: data})
    }
  });
});

/************************************
* HTTP post method for insert object *
*************************************/

app.post(path, function(req, res) {
  
  if (userIdPresent) {
    req.body['userId'] = req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
  }

  let putItemParams = {
    TableName: tableName,
    Item: req.body
  }
  dynamodb.put(putItemParams, (err, data) => {
    if(err) {
      res.statusCode = 500;
      res.json({error: err, url: req.url, body: req.body});
    } else{
      res.json({success: 'post call succeed!', url: req.url, data: data})
    }
  });
});

/**************************************
* HTTP remove method to delete object *
***************************************/

app.delete(path + '/object' + hashKeyPath + sortKeyPath, function(req, res) {
  var params = {};
  if (userIdPresent && req.apiGateway) {
    params[partitionKeyName] = req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
  } else {
    params[partitionKeyName] = req.params[partitionKeyName];
     try {
      params[partitionKeyName] = convertUrlType(req.params[partitionKeyName], partitionKeyType);
    } catch(err) {
      res.statusCode = 500;
      res.json({error: 'Wrong column type ' + err});
    }
  }
  if (hasSortKey) {
    try {
      params[sortKeyName] = convertUrlType(req.params[sortKeyName], sortKeyType);
    } catch(err) {
      res.statusCode = 500;
      res.json({error: 'Wrong column type ' + err});
    }
  }

  let removeItemParams = {
    TableName: tableName,
    Key: params
  }
  dynamodb.delete(removeItemParams, (err, data)=> {
    if(err) {
      res.statusCode = 500;
      res.json({error: err, url: req.url});
    } else {
      res.json({url: req.url, data: data});
    }
  });
});
app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
