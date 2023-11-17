/* eslint-disable */
window.onload = function() {
  //write your code here
  console.log("Here are the different domains!");

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extension = ['.com', '.net', '.us', '.io'];

  for (let p = 0; p < pronoun.length; ++p) {
    for (let a = 0; a < adj.length; ++a) {
      for (let n = 0; n < noun.length; ++n) {
        for (let e = 0; e < extension.length; ++e) {
          console.log(pronoun[p] + adj[a] + noun[n] + extension[e]);
        }
      }
    }
  }
};
