/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const followersArray = ['ddaskan', 'adilzeshan', 'UmutKor', 'dyna-dot', 'brudnak', 'louismoura', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

var res = [];

// function myFollowers(userName) {

//   const userNames = arr.map(user => axios.get(`https://api.github.com/users/${user}`));

//   axios.get(`https://api.github.com/users/${userName}/followers`)
//     .then(response => {
//       let names = response.map(r => r.login)
//       console.log(names)
//       // result.map(function (followers) {
//       //   return followers.login;
//       // })
//     })
// }

// myFollowers('eralpkor')
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
const cards = document.querySelector('.cards');

function gitHubComponent(params) {
  // create elements
  let card = document.createElement('div');
  card.classList.add('card');

  let newImage = document.createElement('img');
  newImage.classList.add('user-img');
  // newImage.src = params;

  let cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  let usersName = document.createElement('h3');
  usersName.classList.add('name');

  let usersUserName = document.createElement('p');
  usersUserName.classList.add('username');

  let location = document.createElement('p');
  let profile = document.createElement('p');
  let link = document.createElement('a');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');

  // append to div
  card.appendChild(newImage);
  card.appendChild(cardInfo);
  // cardInfo.appendChild(usersName);
  // cardInfo.appendChild(usersUserName);
  // cardInfo.appendChild(location);
  // cardInfo.appendChild(profile)
  // profile.appendChild(link);
  // cardInfo.appendChild(followers);
  // cardInfo.appendChild(following);
  // cardInfo.appendChild(bio);

  cardInfo.append(usersName, usersUserName, location, profile, followers, following, bio);
  profile.append(link);

  newImage.src = params.avatar_url;
  usersName.textContent = params.name;
  usersUserName.textContent = params.login;
  location.textContent = `Location: ${params.location}`;
  profile.textContent = `Profile: `;
  // link.href = params.html_url
  // link.textContent = params.html_url
  profile.innerHTML += `<a href=${params.html_url}>${params.html_url}</a>`;


  followers.textContent = `Followers: ${String(params.followers)}`;
  following.textContent = `Following: ${String(params.following)}`;
  bio.textContent = `Bio: ${params.bio}`;

  return card;
}

// Async IIFE to fetch data
(async (arr) => {
  const userNames = arr.map(user => axios.get(`https://api.github.com/users/${user}`));

  Promise.all(userNames).then(result => {
      res = result.map(r => r.data)
      // console.log(res)
      res.map(function (users) {
        cards.appendChild(gitHubComponent(users))
      })
    })
    .catch((error) => {
      console.log(error)
    });

})(followersArray);



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/