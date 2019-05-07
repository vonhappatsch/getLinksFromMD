function getLinksFromMD(str) {
  let matches = [];
  const matcher = /\[([^\]]*)\]\(([^)]*)\)/g;
  let result = '';

  while(result = matcher.exec(str)) {
    matches.push(result);
  }
  const finalMatches = matches.map(match => ({
    href: match[2],
    text: match[1]
  }));
  return finalMatches;
}
module.exports.getLinksFromMD = getLinksFromMD;
console.log(getLinksFromMD(`[example](www.example.com) oieeee turu pom? [text](www.link.com)`));
console.log(getLinksFromMD(`lalalala no link here`));