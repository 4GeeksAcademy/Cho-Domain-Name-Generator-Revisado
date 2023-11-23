window.onload = function() {
  document.querySelector("#generate").addEventListener("click", function() {

    let domains = domainGenerator(pronouns, adjectives, nouns, extensions);
    document.querySelector("#domainsGen").innerHTML = domains
      .map(function(item) {
        return '<li class="list-group-item">' + item + '</li>';
      }).join("");
  });
};

let pronouns = ['the', 'our'];
let adjectives = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];


function domainGenerator(pronouns, adjectives, nouns, extensions) {
  let domains = [];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < extensions.length; l++) {

          let domain = pronouns[i] + adjectives[j] + nouns[k] + extensions[l];
          domains.push(domain);
        }
      }
    }
  }
  return domains;
};


let generatedDomains = domainGenerator(pronouns, adjectives, nouns, extensions);
console.log(generatedDomains.join('\n'));
