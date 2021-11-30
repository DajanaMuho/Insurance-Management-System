const express = require('express');
const cors = require('cors');
const { status } = require("./lib/constansts");
const path = require('path');

//CONTROLLERS
const customerController = require("./controllers/CustomerController");
const insuranceCompanyController = require("./controllers/InsuranceCompanyController");
const deviceController = require("./controllers/DeviceController");
const machineGeneratedController = require("./controllers/machineGeneratedDataController");

const connectDB = require('./drivers/db');
const connectRedis = require('./drivers/redis');
const pushToBQ = require('./drivers/bigQuery');

const app = express();
const apiPort = 8080;

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
//allow OPTIONS on all resources
app.options('*', cors())


//VERIFY TOKEN 
function verifyToken(req, res, next) {
  const token = req.headers['auth-token'];
  if (!token) return res.send(status.NO_ACCESS);

  const result = insuranceCompanyController.verifyToken(token);
  if (!result) return res.send(status.NO_ACCESS);
  
  req.insuranceCompany = result;
  next();
}

//ROUTES

connectDB().then(async () => {

    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    app.listen(apiPort, () => 
      console.log(`Server is running on port: ${apiPort}`),
    );
    // const clientRedis = await connectRedis();

    //DEVICE ROUTES
    app.post('/main/editDevice', verifyToken, async (req, res) => {
      return res.send(await deviceController.editDevice(req));
    });

    app.get('/main/getDevices', verifyToken, async (req, res) => {
      return res.send(await deviceController.getDevices(req));
    });

    app.get('/main/deleteDevice', verifyToken, async (req, res) => {
      return res.send(await deviceController.deleteDevice(req));
    });


    //CUSTOMER ROUTES 
    app.post('/main/editCustomer', verifyToken, async (req, res) => {
      return res.send(await customerController.editCustomer(req));
    });

    app.get('/main/getCustomers', verifyToken, async (req, res) => {
      return res.send(await customerController.getCustomers(req));
    });

    app.get('/main/getCustomerById', verifyToken, async (req, res) => {
      return res.send(await customerController.getCustomerById(req));
    });

    app.get('/main/deleteCustomer', verifyToken, async (req, res) => {
      return res.send(await customerController.deleteCustomer(req));
    });

    //INSURANCE COMPANY ROUTES
    app.post('/register', async (req, res) => {
      //Just an example of Redis usage
      // await clientRedis.set('insuranceCompanyName', req.body.name); 
      // const name = await clientRedis.get('insuranceCompanyName');
      // console.log(name);
      //Just an example of Big Query usage
      // pushToBQ([req.body]);
      res.send(await insuranceCompanyController.addInsuranceCompany(req));
    });

    app.post('/login', async (req, res) => {
      return res.send(await insuranceCompanyController.authenticate(req));
    });

    app.get('/getLoggedUser', verifyToken, async (req, res) => {
      return res.send(req.insuranceCompany);
    });

    app.post('/editInsuranceCompany', verifyToken, async (req, res) => {
      res.send(await insuranceCompanyController.editInsuranceCompany(req));
    });

    // MACHINE GENERATED ROUTES

    app.post('/main/addMachineGeneratedData', verifyToken, async (req, res) => { 
      res.send(await machineGeneratedController.addMachineGeneratedData());
    });

    app.get('/main/getMachineGeneratedData', verifyToken, async (req, res) => {
      res.send(await machineGeneratedController.getMachineGeneratedData(req));
    });

    // app.get('/*', function(req, res) {
    //   res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'), function(err) {
    //     if (err) {
    //       err.dirname = __dirname;
    //       err.path = path.join(__dirname, '/frontend/build', 'index.html');
    //       res.status(500).send(err)
    //     }
    //   })
    // })

    app.use(express.static(path.join(__dirname, "..", "build")));
    app.use(express.static("public"));
    
    app.use((req, res, next) => {
      res.sendFile(path.join(__dirname, "..", "build", "index.html"), function(err) {
            if (err) {
              err.dirname = __dirname;
              err.path = path.join(__dirname, "..", "build", "index.html");
              res.status(500).send(err)
            }
          });
    });
    
  }).catch((err) => {
      console.log(err)
    console.log('Failed to connect with database!');
  });