
import candy from './images/candy.png'
import map from './images/map.png'
import mine from './images/mine.png'
import ticker from './images/ticker.png'
import guess from './images/guess.png'
import hackbright from './images/hackbright.jpg'

const projects = {
  codeMap: {
    name: 'Code Map',
    main: 'A website made for organizing all of your coding resources into collections called “learning paths.”  By tracking user ratings of coding resources and learning paths we could harness the graph database Neo4J to recommended new learning paths to users.',
    role: '  Schema design, modular fuzzy-match search feature, UI construction, front-end and API routes',
    img: map,
    repo: 'https://github.com/code-map/capstone-1804',
    link: 'http://code-map.herokuapp.com/'
    },
    stockTicker: {
      name: 'Ethereum Orderbook',
      main: 'This little widget shows the current price of Ethereum to USD.  The data comes from the Coinbase websocket feed.  I loved this project because working with the firehose amount of data that is coming from the websocket feed challenged me to optimize my code to be able to keep up with all the updates.',
      img: ticker,
      repo: 'https://github.com/maubertw/ticker',
      link: 'https://crypto-orderbook.firebaseapp.com/'
    },
    candyCrushers: {
      name: 'Candy Crushers',
      main: 'An e-commerce website for selling candy.  Users can go from shopping to purchasing and admins can manage user accounts and orders.  A classic CRUD application, Candy Crushers was built with React, Redux, Sequelize, Postgres, Node, Express, and the Stripe API.',
      role: '  developed persistence strategy for shopping cart, Google OAuth, UI construction, front-end and API routes',
      img: candy,
      repo: 'https://github.com/candy-crushers/candy-crushers',
      link: 'https://candy-crushers.herokuapp.com/'
    },
    wordsInMotion: {
      name: 'Words in Motion',
      main: 'An app combining the Oxford English Dictionary with CSS animations.  I wanted to explore using UI motion to enhance user experience.  I built Words in Motion over the course of 4 days for a hackathon, and won the user interface design award.',
      repo: '',