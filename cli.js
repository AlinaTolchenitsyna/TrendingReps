const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiUrl = 'http://localhost:3000';

function showMenu() {
  console.log(`
  1. Get the repository by ID or name
  2. Get all repositories
  3. Start forced synchronization with GitHub
  4. Exit
  `);

  rl.question('Select an option: ', async (option) => {
    switch (option) {
      case '1':
        rl.question('Enter the repository ID or name: ', async (identifier) => {
          try {
            const response = await axios.get(`${apiUrl}/repository/${identifier}`);
            console.log(response.data);
          } catch (error) {
            console.log('Error:', error.message);
          }
          showMenu();
        });
        break;
      case '2':
        try {
          const response = await axios.get(`${apiUrl}/repositories`);
          console.log(response.data);
        } catch (error) {
          console.log('Error:', error.message);
        }
        showMenu();
        break;
      case '3':
        try {
          const response = await axios.post(`${apiUrl}/sync`);
          console.log(response.data);
        } catch (error) {
          console.log('Error:', error.message);
        }
        showMenu();
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Invalid option, please try again.');
        showMenu();
        break;
    }
  });
}

showMenu();
