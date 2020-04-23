export class hedgehogImageService {
  async getRandomHedgeHog() {
    try {
      let rand = Math.random()*26;
      let url = `https://api.pexels.com/v1/search?query=hedgehog&per_page=1&page=${rand}`;
      let response = await fetch(url, {
        headers: {
          'Authorization': process.env.API_KEY
        }
      });
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch {
      return false;
    }
  }
}

export class puppyImageService {
  async getRandomPuppy() {
    try {
      let rand = Math.random()*768;
      let url = `https://api.pexels.com/v1/search?query=puppy&per_page=1&page=${rand}`;
      let response = await fetch(url, {
        headers: {
          'Authorization': process.env.API_KEY
        }
      });
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch {
      return false;
    }
  }
}
