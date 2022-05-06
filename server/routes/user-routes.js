const express = require('express');
const router = express.Router();

// configure the service interface object
const AWS = require('aws-sdk');
const awsConfig = {
  region: 'us-east-2',
};
AWS.config.update(awsConfig);
const dynamodb = new AWS.DynamoDB.DocumentClient();
const table = 'Thoughts';

// ================================================= API ENDPOINTS ==================================================

// return all users and their thoughts
router.get('/users', (req, res) => {
  const params = {
    TableName: table,
  };
  // Scan return all items in the table
  dynamodb.scan(params, (err, data) => {
    if (err) {
      res.status(500).json(err); // an error occured
    } else {
      res.json(data.Items);
    }
  })
})

// return thoughts from a specific user
router.get('/users/:username', (req, res) => {
  console.log(`Querying for thought(s) from ${req.params.username}.`)

  const params = {
    TableName: table,
    KeyConditionExpression: '#un = :user',
    // definition of attribute names - must be an abbreviation followed by pound
    ExpressionAttributeNames: {
      '#un': 'username',
      '#ca': 'createdAt',
      '#th': 'thought',
      '#img': 'image'
    },
    ExpressionAttributeValues: {
      ':user': req.params.username,
    },
    ProjectionExpression: '#th, #ca, #un, #img',
    // sets the most recent 'post' on top
    ScanIndexForward: false, // false makes the order descending
  };

  dynamodb.query(params, (err, data) => {

    if (err) {
      console.error('Unable to query. Error:', JSON.stringify(err, null, 2));
      res.status(500).json(err); // an error occurred
    } else {
      console.log('Query succeeded.');
      res.json(data.Items);
    }

  });

});

// Create new user at /api/users/
router.post('/users', (req, res) => {
  const params = {
    TableName: table,
    Item: {
      username: req.body.username,
      createdAt: Date.now(),
      thought: req.body.thought,
      image: req.body.image  // add new image attribute
    }
  };

  // database call
  dynamodb.put(params, (err, data) => {

    if (err) {
      console.error('Unable to add item. Error JSON:', JSON.stringify(err, null, 2));
      res.status(500).json(err); // an error occured
    } else {
      console.log('Added item:', JSON.stringify(data, null, 2));
      res.json({ 'Added': JSON.stringify(data, null, 2) });
    }
  });
});


module.exports = router;