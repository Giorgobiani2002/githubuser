let searchBar = document.querySelector(".searchBar");
let searchForm = document.querySelector(".searchForm");
let dark = document.querySelector(".dark");
dark.addEventListener("click", function () {
  let body = document.querySelector("body");
  body.classList.toggle("dark-mode");
  let name = document.querySelector(".name");

  if (body.classList.contains = "dark-mode") {
    name.style.color = "white";
  } else {
    name.style.color = "black";
  }
});
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let userName2 = searchBar.value.trim();
  if (userName2 === "") {
    alert("Do not leave blank!");
  }
  let userName = userName2.split(" ").join("");
  let url = `https://api.github.com/users/${userName}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let avatar = document.querySelector(".bitmap");
      let nickName = document.querySelector(".nickName");
      let joinDate = document.querySelector(".joinDate");
      let nickname2 = document.querySelector(".nickname2");
      let bio = document.querySelector(".bio");
      let repos = document.querySelector(".repos");
      let followers = document.querySelector(".followersCount");
      let following = document.querySelector(".following");
      let location = document.querySelector(".location");
      let twtLink = document.querySelector(".twt-link");
      let blog = document.querySelector(".link");
      let company = document.querySelector(".building");

      avatar.src = data.avatar_url;
      nickName.textContent = data.login;
      joinDate.textContent = ` Joined at ${data.created_at}`;
      nickname2.textContent = ` @${data.login}`;
      bio.textContent = data.bio;
      repos.textContent = data.public_repos;
      followers.textContent = data.followers;
      following.textContent = data.following;
      location.textContent = data.location;
      twtLink.textContent = data.twitter_username;
      blog.textContent = data.html_url;
      company.textContent = data.company;
      if (data.bio === null) {
        bio.textContent = "This profile has no bio";
      }
      if (data.location === null) {
        location.textContent = "Not Available";
        location.style.color = "red";
        location.style.textDecoration = "line-through";
      }
      if (data.twitter_username === null) {
        twtLink.textContent = "Not Available";
        twtLink.style.color = "red";
        twtLink.style.textDecoration = "line-through";
      }
      if (data.blog === null) {
        blog.textContent = "Not Available";
        blog.style.color = "red";
        blog.style.textDecoration = "line-through";
      }
      if (data.company === null) {
        company.textContent = "Not Available";
        company.style.color = "red";
        company.style.textDecoration = "line-through";
      }
    });
});
