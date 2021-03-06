// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2915bbd6-1252-405f-8173-6c00428146d9',
    name: 'Batch-MatthChr',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/xplatTestPool/evaluateautoscale?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.AutoScaleRun\",\"timestamp\":\"2016-08-04T00:01:47.9104512Z\",\"results\":\"$TargetDedicated=3;$NodeDeallocationOption=requeue\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'cfc8a44a-fbb3-4c15-a4cf-d62fa87308fb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '6a52e3cd-74b2-48cc-91a0-34e4a39b987e',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool/evaluateautoscale',
  date: 'Thu, 04 Aug 2016 00:01:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/xplatTestPool/evaluateautoscale?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.AutoScaleRun\",\"timestamp\":\"2016-08-04T00:01:47.9104512Z\",\"results\":\"$TargetDedicated=3;$NodeDeallocationOption=requeue\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'cfc8a44a-fbb3-4c15-a4cf-d62fa87308fb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '6a52e3cd-74b2-48cc-91a0-34e4a39b987e',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool/evaluateautoscale',
  date: 'Thu, 04 Aug 2016 00:01:47 GMT',
  connection: 'close' });
 return result; }]];