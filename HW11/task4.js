class DataFetcher {
  async getTodo() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      return await response.json();
    } catch (error) {
      console.log('Error fetching todo:', error);
    }
  }

  async getUser() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1',
      );
      return await response.json();
    } catch (error) {
      console.log('Error fetching user:', error);
    }
  }

  async fetchAllData() {
    try {
      const [todo, user] = await Promise.all([this.getTodo(), this.getUser()]);
      console.log('Todo:', todo);
      console.log('User:', user);
    } catch (error) {
      console.log('Error in Promise.all:', error);
    }
  }

  async fetchRaceData() {
    try {
      const result = await Promise.race([this.getTodo(), this.getUser()]);
      console.log('First result:', result);
    } catch (error) {
      console.log('Error in Promise.race:', error);
    }
  }
}

const dataFetcher = new DataFetcher();
dataFetcher.fetchAllData();
dataFetcher.fetchRaceData();
