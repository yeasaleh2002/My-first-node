// step-1
const express = require('express');

// step-2
const app = express();
// use cors 
const cors = require('cors')

//middleware process a  call cors
app.use(cors())

// middleware ar data string theke json a convert korbe
app.use(express.json());

// step-3 -- port  value 4 digit ar je kono value use kora jay. but react developerder jonno  3000 use na korai valo. sei jonno amra 5000 use kora.
// const port = process.eventNames.PORT || 3000;
const port = 5000

// step-4 
app.get('/', (req, res ) => {
    res.send('Hello i am using nodemon and express  From My first/ second ever node')

})

/* 
// hardcoded lekha pawyar process and aita local host 5000/users diya search korle pawya jabe.
app.get('/users', (req, res) => {
    res.send('here is my users')
})

*/
/* 

// app.get ar modde sudu hardcoded lekhai pathno jay na. object o pathno jay.
app.get('/users', (req, res) => {
    res.send({id:1 , name: "sabana", email: "sabana@gmail.com", phone: "0183320930"})
})

 */



//  object o je sodo akta pathano jay amon ta na. aita chaile onek gula object pathaite pari. akta variable declare kore array ar modde onek  object pathaite pari.and aro onek gula process use kore data pathite pari.. and variable name app.get ar modde res.send(variable name) ar modde use kora jay.

const users = [

     {id:0 , name: "sabana", email: "sabana@gmail.com", phone: "0183320930"},
     {id:1 , name: "sabnur", email: "sabnur@gmail.com", phone: "0183320931"},
     {id:2 , name: "purnima", email: "purnima@gmail.com", phone: "0183320932"},
     {id:3 , name: "bubli", email: "bubli@gmail.com", phone: "0183320933"},
     {id:4 , name: "kalalagarwal", email: "kalalagarwal@gmail.com", phone: "0183320934"},
     {id:5 , name: "Pujahegde", email: "pujahegde@gmail.com", phone: "0183320935"},
     {id:6 , name: "rasmika ", email: "rasmika@gmail.com", phone: "0183320936"},
     {id:7 , name: "susmita", email: "susmita@gmail.com", phone: "0183320937"}

]

app.get('/users', (req, res) => {
    const search = req.query.search;

    // use query parameters 
 
    if(search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    
    else {
    res.send(users)
    }
})


 // app.METHOD 
   app.post('/users', (req, res) => {
      
      const newUser = req.body;
       newUser.id = users.length;
       users.push(newUser);
       console.log('hitting the post', req.body);
      //----2  ta same e---- res.send(JSON.stringify(newUser))
       res.json(newUser);
   }) 


// app.get ar modde req(request) use kora hoy onek gula data r modde particular data paite. orthat users ar modde jekono id diya kono data paite chaile users/(id number) diya search korte hobe. ata korar jonno req use korte hoy. atar korar jonno variable declare korte hobe app.get ar modde . const variableName = req.params.id( /users/:id --- othata app.get ar modde jeta diya dekhar sujok kore dibe seta dita hobe.) , and arpor ar akta variable diya user = users[id] -- array ar modde theke data nite hobe and sob ses a res.get use kore data access korte hobe.
app.get('/users/:id' , (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})


// step-5
app.listen(port, () => {
    console.log('listening to port', port);
})

/* 
//  ** npm init ar question gula answer korte na chile commad npm init ar poriborte -------- npm init -y ------- use korte hobe.
// *** jehuto node js ar sob kj express js diya korbo tai express js install korte hobe. ai jonno ---- npm  install express -- save / npm install express / npm i express use korte hobe.
// ------- ar por index.js file create korte hobe.---
// ---- node js use korar 5 step -- opar a kora hoise.
// ---- node ar kono value run korte hobe node file name(je file a run korce seta dite hobe) diya run korte hobe. and kono maan jodi update kora hoy taholew update hobe na. seta update korte hole node file name(index.js) diya run korte hobe. but tar agy ctrl +  c use kora previous file stop korte hobe.

*/


/*
// ----- bare bare save korar problem theke baste hole -nodemon- install korte hobe. (npm install -g nodemon   == aita use kora node mon install kora hoy.) 
// ---- nodemon install kora  hole kono  kiso update kore save korle ar new kore restart korte hobe na, atai automethic update kore dibe..
// ----- install kora por ar 2 ta kj korte hobe. seta holo package.json file a {script ar modde}==> ("start": "node index.js",) ("start-dev": "nodemon index.js",)  bracket a thaka ai 2 ta line use korte hobe.
// ---- sob ses a -- nodemon fileName(index.js) -- diya code run korte hobe. and update korte  brower a refresh diye hobe.ta hole autometic update hoye jabe.
// ----- npm run start-dev (start-dev -- package.json ar modde use kora hoisiclo) -- diyaw ran kora jay. and ata autometic node update kore dibe and update hobe webpage a giya refresh dite hobe.

*/


/* 
 
// ---- app.get ar pore jeta use kori, oi get onosare je data dorkar sei data pathaite pari.
// ----- query search use korar jonnoo req.query,search use korte hobe. othat query use korte hobe. query parameters use kore lekha onosare data sohoj a powya jay. and query parameters bujar process holo aita ? -- question mark diya ar pore use kore hoy. and akadin jinis diya  search korte && use kora hoy.  and aita condition ar modde conditon diya use kora hoy. ja upor a kora hoise
// ------ //localhost:5000/users/?search=p&&order=rs
*/


/* 
  *** localhost ar kono data ba api jodi onno kono local host use korte chai tahole besh kiso process flow korte hobe. ta hole hole data access kora jabe na.
  //----- http://expressjs.com/en/resources/middleware/cors.html-- ai website theke first a cros install(npm install cors) korte hobe. then je khane node express use kora hoise sei jaigate fist a cros import(---const cors = require('cors') ---) korte hobe and second a cors call(---app.use(cors())--) korte hobe middleware process a3. then project a fetch use kore data access nite hobe previous rulse onsare.

*/

// -----------req ar maddom a data ase and res(response) ar maddom a data pathay.

//------- express medile ware use kore data string theke json a convert korte hobe.


//  ------- node ar data github a pathite .gitignore name a file create korte hobe and  oitar modde node_modules likte hobe