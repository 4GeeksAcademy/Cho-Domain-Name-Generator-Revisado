window.onload = function() {
  //write your code here
  document.querySelector("#generate").addEventListener("click", domainGenerator);
  
};


function domainGenerator() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extension = ['.com', '.net', '.us', '.io'];

  let domains = []; 

  for (let p = 0; p < pronoun.length; ++p) {
    for (let a = 0; a < adj.length; ++a) {
      for (let n = 0; n < noun.length; ++n) {
        for (let e = 0; e < extension.length; ++e) {
          let domain = pronoun[p] + adj[a] + noun[n] + extension[e];
          domains.push(domain);
          console.log(domain);
        }
      }
    }
  }

  document.querySelector("#domains").innerHTML = "<li>" + domains.join("</li><li>") + "</li>";
};