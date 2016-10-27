"use strict";
require("../../env.js")
const https = require("https");
const qs = require("../helpers/querystring");

module.exports = {

  get: function(searchString) {

    var promise = new Promise((resolve, reject) => {

        var urlParams = {
          "q": searchString
        };

        var httpsOpts = {
          "hostname": "www.googleapis.com",
          "method": "GET",
          "path": "/books/v1/volumes?" + qs(urlParams)
        }
        console.log(httpsOpts);
        var request = https.request(httpsOpts, (response) => {

          var string = "";

          response.setEncoding("utf-8");

          response.on("data", (chunk) => {
            string += chunk;
          });

          response.on("end", () => {

            try {
              var jsonData = JSON.parse(string);
            } catch (error) {
              reject(error);
            }

            if (response.statusCode === 200) {
              resolve(jsonData);
            } else {
              reject(jsonData);
            }
          });
        });
        request.on("error", (error) => {
          reject(error);
        });
        request.end();
      });
      return promise;
  }
};
