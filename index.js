const body = document.querySelector("body");

// User name
const element1 = document.getElementById("A");
const element2 = document.getElementById("B");
const element3 = document.getElementById("C");

// avatar_url
const prof1 = document.getElementById("1");
const prof2 = document.getElementById("2");
const prof3 = document.getElementById("3");

// bio|skills
const bio1 = document.getElementById("bio1");
const bio2 = document.getElementById("bio2");
const bio3 = document.getElementById("bio3");

//url - follow me - github
const url1 = document.getElementById("url1");
const url2 = document.getElementById("url2");
const url3 = document.getElementById("url3");

const git1 = document.getElementById("git1");
const git2 = document.getElementById("git2");
const git3 = document.getElementById("git3");

const api = [
  "https://api.github.com/user/72607039",
  "https://api.github.com/user/71908688",
  "https://api.github.com/user/92760416",
];
fetch(api[0])
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    element1.innerHTML = data.login;
    bio1.innerHTML = data.bio;
    url1.href = data.blog;
    git1.href = data.html_url;
    prof1.src = data.avatar_url;
  });
fetch(api[1])
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    element2.innerHTML = data.login;
    bio2.innerHTML = data.bio;
    url2.href = data.blog;
    git2.href = data.html_url;
    prof2.src = data.avatar_url;
  });
fetch(api[2])
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    element3.innerHTML = data.login;
    bio3.innerHTML = data.bio;
    url3.href = data.blog;
    git3.href = data.html_url;
    prof3.src = data.avatar_url;
  });
