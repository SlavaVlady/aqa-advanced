
async function getTodo() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      return await response.json();
    } catch (error) {
      console.log("Error fetching todo:", error);
    }
  }
  
  async function getUser() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      return await response.json();
    } catch (error) {
      console.log("Error fetching user:", error);
    }
  }
  
  async function fetchAllData() {
    try {
      const [todo, user] = await Promise.all([getTodo(), getUser()]);
      console.log("Todo:", todo);
      console.log("User:", user);
    } catch (error) {
      console.log("Error in Promise.all:", error);
    }
  }
  
  async function fetchRaceData() {
    try {
      const result = await Promise.race([getTodo(), getUser()]);
      console.log("First result:", result);
    } catch (error) {
      console.log("Error in Promise.race:", error);
    }
  }
  
  fetchAllData();
  fetchRaceData();
  