const options = {
  bottom: "64px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();

async function getGames() {
  const getGames = await fetch("/api/games", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  console.log(getGames);
}

getGames();

console.log("im wokring");

// const get = await fetch ('/api/users/login', {
//     method: 'POST',
//     body: JSON.stringify({ email, password }),
//     headers: { 'Content-Type': 'application/json'},
// });
// const response = await fetch ('/api/users/login', {
//     method: 'POST',
//     body: JSON.stringify({ email, password }),
//     headers: { 'Content-Type': 'application/json'},
// });
// const response = await fetch ('/api/users/login', {
//     method: 'POST',
//     body: JSON.stringify({ email, password }),
//     headers: { 'Content-Type': 'application/json'},
// });
// const response = await fetch ('/api/users/login', {
//     method: 'POST',
//     body: JSON.stringify({ email, password }),
//     headers: { 'Content-Type': 'application/json'},
// });
