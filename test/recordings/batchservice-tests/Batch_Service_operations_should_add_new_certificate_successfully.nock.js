// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/certificates?api-version=2018-08-01.7.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  location: 'https://lchency4.westcentralus.batch.azure.com/certificates(ThumbprintAlgorithm=sha1,Thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '0b81a406-bf7f-4fd0-b6d2-79b02e3bea15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/certificates(ThumbprintAlgorithm=sha1,Thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)',
  date: 'Tue, 21 Aug 2018 20:05:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/certificates?api-version=2018-08-01.7.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  location: 'https://lchency4.westcentralus.batch.azure.com/certificates(ThumbprintAlgorithm=sha1,Thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '0b81a406-bf7f-4fd0-b6d2-79b02e3bea15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/certificates(ThumbprintAlgorithm=sha1,Thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)',
  date: 'Tue, 21 Aug 2018 20:05:03 GMT',
  connection: 'close' });
 return result; }]];