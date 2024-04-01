const apiurl = "https://api.quotable.io/random";

let quote = document.getElementById("quote");
let author = document.getElementById("author");
async function getquote(url) {
    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
    console.log(data);
}
getquote(apiurl);

function twitter(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---by" +  author.innerHTML ,"Tweet Window" ,  "width=600 , height=300")
}