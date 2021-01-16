var getUserRepos = function(user) {
  // format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  // make a request to the url
  fetch(apiUrl).then(function(response) {
    console.log(response);
    response.json().then(function(data) {
    displayRepos(data, user);
    });
  });
};

var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");


var formSubmitHandler = function(event) {
  event.preventDefault();
  console.log(event);
};

userFormEl.addEventListener("submit", formSubmitHandler);

// get value from input element
var username = nameInputEl.value.trim();

if (username) {
  getUserRepos(username);
  nameInputEl.value = "";
  response.json().then(function(data) {
  displayRepos(data, user);
});

} else {
  alert("Please enter a GitHub username");
}
 var repoContainerEl = document.querySelector("#repos-container");
 var repoSearchTerm = document.querySelector("#repo-search-term");


var displayRepos = function(repos, searchTerm) {
    // clear old content
  repoContainerEl.textContent = "";
  repoSearchTerm.textContent = searchTerm;
  console.log(repos);
  console.log(searchTerm);

};
getUserRepos();