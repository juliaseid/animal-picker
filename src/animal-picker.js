//let rand = math.random()
//if (rand > .5) {show random image of puppy (up to 768)}
//else if (rand <= .5) {show random image of hedgehog (up to 26)}


export class hedgehogImageService {
  async getRandomHedgeHog() {
    try {
      let url = 'https://api.pexels.com/v1/search?query=hedgehog&per_page=1&page=1';
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