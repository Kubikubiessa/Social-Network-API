const connection = require('../config/connection');
const { User, Thought } = require('../models');

const users = [
    {
        username: 'Otto',
        email: 'Otto@gmail.com',
    },
    {
        username: 'Ben',
        email: 'ben@gmail.com'
    },
    {
        username: 'Carl',
        email: 'carl@gmail.com'
    },
    {
        username: 'Dolly',
        email: 'd@gmail.com'
    },
    {
        username: 'Kendra',
        email: 'Kenny@gmail.com'
    },
    {
        username: 'Floyd',
        email: 'floyd@gmail.com'
    },
    {
        username: 'Gustav',
        email: 'Gus@gmail.com'
    },
    {
        username: 'Heidrun',
        email: 'hk@gmail.com'
    },
    {
        username: 'Enno',
        email: 'Enno@gmail.com'
    },
    {
        username: 'Jonas',
        email: 'jonas@gmail.com'
    },
    {
        username: 'cole',
        email: 'cole@gmail.com'
    },
  ]

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});
  
    await User.collection.insertMany(users);

    console.info('Seeding complete! 🌱');
    process.exit(0);
  });
  
