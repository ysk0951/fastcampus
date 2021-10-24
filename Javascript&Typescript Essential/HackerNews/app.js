//let ajax = new XMLHttpRequest();   //변수
const ajax = new XMLHttpRequest(); //상수
const news_URL = 'https://api.hnpwa.com/v0/news/1.json'
ajax.open('GET',news_URL,false);
ajax.send();

const newsFeeds = JSON.parse(ajax.response);
const ul = document.createElement('ul');
for(let i=0;i<newsFeeds.length;i++){
    const li = document.createElement('li');
    li.innerHTML = newsFeeds[i].title;
    ul.appendChild(li);
}
document.getElementById('root').appendChild(ul)


