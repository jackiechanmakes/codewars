/*
 *
 * Write a function that when given a URL as a string, parses out just the domain name and returns
 *  it as a string. For example:
 *
 * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
 * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
 * url = "https://www.cnet.com"                -> domain name = cnet"
 */

function domainName(url){
    let pattern = /:\/\/(.*).com/;
    let arr = url.match(pattern);
    return arr[1];
  }

// Test cases
console.log(domainName("http://google.com"));     // "google"
console.log(domainName("http://google.co.jp"));   // "google"
console.log(domainName("www.xakep.ru"));          // "xakep"
console.log(domainName("https://youtube.com"));   // "youtube"
