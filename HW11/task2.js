function getTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .catch((error) => console.log('Error fetching todo:', error));
}

function getUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json())
    .catch((error) => console.log('Error fetching user:', error));
}

Promise.all([getTodo(), getUser()])
  .then(([todo, user]) => {
    console.log('Todo:', todo);
    console.log('User:', user);
  })
  .catch((error) => console.log('Error in Promise.all:', error));

Promise.race([getTodo(), getUser()])
  .then((result) => console.log('First result:', result))
  .catch((error) => console.log('Error in Promise.race:', error));
