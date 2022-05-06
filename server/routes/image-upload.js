const express = require('express');
const router = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const paramsConfig = require('../utils/params-config');

// temporary storage container until the image files are ready to be uploaded to the s3 bucket
const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, '');
  },
});

// upload object containing the storage destination and key
const upload = multer({ storage }).single('image');

// instantiation of s3 service object
const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
});

// route - upload is a secondary argumet to define the key and storage destination
router.post('/image-upload', upload, (req, res) => {
  // set up params config - retrieving req.file from the upload parameter from multer
  const params = paramsConfig(req.file);

  // set up S3 service call
  s3.upload(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.json(data);
  });

});

module.exports = router;