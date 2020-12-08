require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('./config/ppConfig');
const flash = require('connect-flash');
const SECRET_SESSION = process.env.SECRET_SESSION;
const app = express();
const axios = require('axios'); 
let db = require("./models")
let newReleases = require('./routes/controllers/newReleases')
let searchedGames = require('./routes/controllers/searchedgame')

// isLoggedIn middleware
const isLoggedIn = require('./middleware/isLoggedIn');

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(express.json())
// secret: What we actually will be giving the user on our site as a session cookie
// resave: Save the session even if it's modified, make this false
// saveUninitialized: If we have a new session, we save it, therefore making that true

const sessionObject = {
  secret: SECRET_SESSION,
  resave: false,
  saveUninitialized: true
}

app.use(session(sessionObject));

// Initialize passport and run through middleware
app.use(passport.initialize());
app.use(passport.session());

// Flash
// Using flash throughout app to send temp messages to user
app.use(flash());

// Messages that will be accessible to every view
app.use((req, res, next) => {
  // Before every route, we will attach a user to res.local
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', (req, res) => {
  console.log(res.locals.alerts);
  res.render('index', { alerts: res.locals.alerts });
});

app.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile');
});


app.use('/auth', require('./routes/auth'));
// My routes

app.get('/',(req,res)=>{
  res.render('landing')
})

app.get('/faves',(req,res)=>{
  db.favorites.findAll().then(allFaves =>{
      res.render('faves', {allFaves})
  })
})

// app.get('/games',(req,res)=>{
//   res.render('games')
// })

app.use('/games',searchedGames)

// app.get('/main', (req,res)=>{
//   res.render('main')
// })

app.use('/main',newReleases)

app.get('/',(req,res) => {
  const url3= `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${req.query.game}&page=1&page_size=25`
  axios.get(url3
    ).then(resArray =>{
        console.log('hello')
        res.render('games',{
            searchedGame: resArray.data.results.slice(0,13)
        })
    })
})

// app.use('/newReleases',newReleases)

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
