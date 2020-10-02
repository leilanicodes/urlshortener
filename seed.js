'use strict';
const db = require('./server/db');
const { Url } = require('./server/db/models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const urls = await Promise.all([
    Url.create({
      url: 'https://www.google.com',
    }),
  ]);

  console.log(`seeded ${urls.length} urls`);
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
