const { response } = require("express");
const fs = require("fs");
const fileName = "Contacts";

function saveTo(request, response) {
  let json = JSON.stringify(request.body);
  console.log(request.body);
  let newData = JSON.parse(json);

  let obj;
  console.log(fs.existsSync("./Contacts.json"));
  fs.exists(fileName, function (exists) {
    if (exists) {
      fs.readFile(fileName, function readFileCallback(err, data) {
        if (err) {
          console.log(err);
        } else {
          obj = JSON.parse(data);
          let alreadyExists;
          for (let i = 0; i < newData.length; i++) {
            alreadyExists = false;
            for (let j = 0; j < obj.length; j++) {
              if (newData[0].firstName == obj[j].firstName) {
                alreadyExists = true;
                console.log(obj[i].firstName);
                console.log(newData[0].firstName);
                break;
              }
            }
            try {
              if (alreadyExists) {
                throw "Data Already exists so not added";
              } else {
                obj.push(newData[i]);
                console.log(obj);
              }
            } catch (err) {
              console.log(err);
            }
          }
          let json = JSON.stringify(obj);
          fs.writeFile(fileName, json, function (err) {
            if (err) throw err;
            console.log("File Written");
          });
        }
      });
    } else {
      fs.writeFile(fileName, json, function (err) {
        if (err) throw err;
        console.log("File Written");
      });
    }
  });
}

function readFrom(fileName) {
  let obj;
  fs.exists(fileName, function (exists) {
    console.log(exists);
    if (exists) {
      fs.readFile(fileName, function readFileCallback(err, data) {
        if (err) {
          console.log(err);
        } else {
          // obj = JSON.parse(data);
          console.log("results");
          response.send(results);
          //console.log(obj);
        }
      });
    } else {
      console.log("File does not exists");
    }
  });
}
module.exports = { saveTo, readFrom };
