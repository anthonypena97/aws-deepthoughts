# aws-deepthoughts
![MIT License badge](https://img.shields.io/badge/license-MIT_License-green)

![aws-deepthougths-demo](https://user-images.githubusercontent.com/79285555/167049872-7473790d-3ed0-4fc8-96be-1a212ffbcfbf.gif)

To visit live site, enter http://18.216.240.2/ in your Web Browser url bar

<p> ---------------------------------------- </p>
Full Stack Web Application for positing Inspirational Quotes and Images.

This Project is written using React, JavaScript, HTML, and CSS.

The following Amazon Web Services are used:
- DynamoDB - NoSQL Backend Database
- S3 Bucket - Image Storage
- EC2 - Virtual Machine for Serving Project Online

## Table of Contents

- [Usage](#usage)
- [Installation](#installation)
- [License](#license)
- [Version History](#version)
- [Contributing](#contributing)
- [Questions](#questions)
- [Acknowledgmenets](#acknowledgments)

## Usage

In order to use application, enter http://18.216.240.2/ in your Web Browser url bar. From there you may create a post by adding a name, quote and image. In order to add an image, you must choose file and then click upload before submitting post.

## Installation

* As this uses AWS, in order to run and modify your own copy, you will have to sign up for [AWS](https://aws.amazon.com) in order to configure the project with your own services keys

To install on your machine for your own use:

- make sure you have [Node](https://nodejs.dev/) downloaded on your machine
- make sure you have [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) downloaded on your machine
- make sure you have [DynamoDB](https://aws.amazon.com/dynamodb/) downloaded on your machine
- download, fork, or clone this repository
- open terminal in application root directory
- enter,`npm install`
- create .env file and write, S3_BUCKET="REPLACE WITH YOUR OWN S3 BUCKET KEY"
- enter,`npm run start:dev` for development
- enter,`npm run start build` to build your version of this project

## License

MIT License

Copyright (c) 2022 Anthony Pena

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation fil (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge,publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Version History

- v1.0.0 is latest version
  - - See [commit change](https://github.com/anthonypena97/aws-deepthougts/commits/main) or See [release history](https://github.com/anthonypena97/aws-deepthoughts/releases)

## Contributing

Please refer to the [Contributor Covenenant](https://www.contributor-covenant.org/) for guidelines on contributing on this project.

## Questions

For any inquiries or questions, please contact Anthony Pena via:

- GitHub: [anthonypena97](https://github.com/anthonypena97)
- Email: <anthony.e.p3na@gmail.com>

## Acknowledgments

Inspiration, code snippets, etc.

- [React: Lifting State](https://reactjs.org/docs/lifting-state-up.html)
