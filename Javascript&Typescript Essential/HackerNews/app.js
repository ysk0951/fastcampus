//let ajax = new XMLHttpRequest();   //변수
const ajax = new XMLHttpRequest(); //상수
const container = document.getElementById('root');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTECT_URL = `https://api.hnpwa.com/v0/item/@id.json`;
const content = document.createElement('div');
ajax.open('GET',NEWS_URL,false);
ajax.send();

const newsFeeds = JSON.parse(ajax.response);
const ul = document.createElement('ul');
window.addEventListener('hashchange',function(){
    let id = location.hash.substr(1);
    ajax.open(`GET`,CONTECT_URL.replace('@id',id),false);
    ajax.send();
    const newsContent = JSON.parse(ajax.response);
    const title = document.createElement('h1');
    title.innerHTML = newsContent.title;
    content.appendChild(title);
})
for(let i=0;i<newsFeeds.length;i++){
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${newsFeeds[i].id}`;
    a.innerHTML = `${newsFeeds[i].title} (${newsFeeds[i].comments_count})`;
    li.appendChild(a)
    ul.appendChild(li);
}
container.appendChild(ul)
container.appendChild(content)



