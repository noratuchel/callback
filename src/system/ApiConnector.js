import Config from "../config.json";

class ApiConnector {
  constructor() {
    this.baseUrl = "https://www.googleapis.com/blogger/v3";
  }

  /* Get blog by the blog url */
  getBlog(cb) {
    fetch(this.baseUrl + "/blogs/byurl?url=" + Config.BLOG_URL + "&key=" + Config.API_TOKEN, {
      // credentials: 'include',
      method: 'GET',
      headers: {'Content-Type': 'application/json', 'Authorization': Config.API_TOKEN},
      //body: JSON.stringify(sampledata),
    })
    .then(res => res.json())
    .then(function(res) {
      cb(res);
    });
  }

  /* Get pages */
  getPages(blogId, cb) {
    fetch(this.baseUrl + "/blogs/" + blogId + "/pages?key=" + Config.API_TOKEN, {
      // credentials: 'include',
      method: 'GET',
      headers: {'Content-Type': 'application/json', 'Authorization': Config.API_TOKEN},
      //body: JSON.stringify(sampledata),
    })
    .then(res => res.json())
    .then(function(res) {
      cb(res);
    });
  }

  /* Get specific page */
  getPage(blogId, pageId, cb) {
    fetch(this.baseUrl + "/blogs/" + blogId + "/pages/" + pageId + "?key=" + Config.API_TOKEN, {
      // credentials: 'include',
      method: 'GET',
      headers: {'Content-Type': 'application/json', 'Authorization': Config.API_TOKEN},
      //body: JSON.stringify(sampledata),
    })
    .then(res => res.json())
    .then(function(res) {
      cb(res);
    });
  }

  /* Search for posts */
  getSearchResults(blogId, searchQuery, cb) {
    fetch(this.baseUrl + "/blogs/" + blogId + "/posts/search?q=" + searchQuery + "&key=" + Config.API_TOKEN, {
      // credentials: 'include',
      method: 'GET',
      headers: {'Content-Type': 'application/json', 'Authorization': Config.API_TOKEN},
      //body: JSON.stringify(sampledata),
    })
    .then(res => res.json())
    .then(function(res) {
      cb(res);
    });
  }

  /* Get articles */
  getArticles(blogId, cb) {
    fetch(this.baseUrl + "/blogs/" + blogId + "/posts?key=" + Config.API_TOKEN, {
      // credentials: 'include',
      method: 'GET',
      headers: {'Content-Type': 'application/json', 'Authorization': Config.API_TOKEN},
      //body: JSON.stringify(sampledata),
    })
    .then(res => res.json())
    .then(function(res) {
      cb(res.items);
    });
  }

  /* Get specific article */
  getArticle(blogId, articleId, cb) {
    fetch(this.baseUrl + "/blogs/" + blogId + "/posts/" + articleId + "?key=" + Config.API_TOKEN, {
      // credentials: 'include',
      method: 'GET',
      headers: {'Content-Type': 'application/json', 'Authorization': Config.API_TOKEN},
      //body: JSON.stringify(sampledata),
    })
    .then(res => res.json())
    .then(function(res) {
      cb(res);
    });
  }

  /* Get comments */
  getComments(blogId, articleId, cb) {
    fetch(this.baseUrl + "/blogs/" + blogId + "/posts/" + articleId + "/comments?key=" + Config.API_TOKEN, {
      // credentials: 'include',
      method: 'GET',
      headers: {'Content-Type': 'application/json', 'Authorization': Config.API_TOKEN},
      //body: JSON.stringify(sampledata),
    })
    .then(res => res.json())
    .then(function(res) {
      cb(res.items);
    });
  }
 }

let instance = new ApiConnector();

export default instance
