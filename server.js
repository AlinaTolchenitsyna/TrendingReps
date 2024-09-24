const express = require('express');
const axios = require('axios');
const Repository = require('./Repository');
const sequelize = require('./database');

const app = express();
app.use(express.json());

// Get repository by name or ID
app.get('/repository/:identifier', async (req, res) => {
  const { identifier } = req.params;
  const repository = await Repository.findOne({
    where: {
      [isNaN(identifier) ? 'name' : 'id']: identifier,
    },
  });
  if (repository) {
    res.json(repository);
  } else {
    res.status(404).json({ error: 'Repository not found' });
  }
});

// Get all repositories
app.get('/repositories', async (req, res) => {
  const repositories = await Repository.findAll();
  res.json(repositories);
});

// Start or force sync
app.post('/sync', async (req, res) => {
  await syncWithGitHub();
  resetTimer();
  res.json({ message: 'Sync started' });
});

// Sync function
async function syncWithGitHub() {
  try {
    const response = await axios.get('https://api.github.com/search/repositories', {
      params: { q: 'stars:>10000', sort: 'stars', order: 'desc' },
    });

    const repositories = response.data.items;

    // Saving repositories
    for (const repo of repositories) {
      await Repository.upsert({
        name: repo.name,
        stars: repo.stargazers_count,
        description: repo.description,
        url: repo.html_url,
      });
    }
  } catch (error) {
    console.error('Error syncing with GitHub:', error.message);
  }
}

// Timer for periodic synchronization
let syncInterval = 10 * 60 * 1000;
let timer = setTimeout(syncWithGitHub, syncInterval);

// Resetting timer for automatic synchronization
function resetTimer() {
  clearTimeout(timer);
  timer = setTimeout(syncWithGitHub, syncInterval);
}

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});