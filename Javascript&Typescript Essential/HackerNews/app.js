//let ajax = new XMLHttpRequest();   //변수
const ajax = new XMLHttpRequest(); //상수
const container = document.getElementById('root');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTECT_URL = `https://api.hnpwa.com/v0/item/@id.json`;
const content = document.createElement('div');

function getData(url){
    ajax.open('GET',rul,false);
    ajax.send();
    return JSON.parse(ajax.response);
}


const newsFeeds = getData(NEWS_URL)
const ul = document.createElement('ul');
window.addEventListener('hashchange',function(){
    const id = location.hash.substr(1);
    const newsContent = getData(CONTECT_URL.replace('@id',id))
    const title = document.createElement('h1');
    title.innerHTML = newsContent.title;
    content.appendChild(title);
})
for(let i=0;i<newsFeeds.length;i++){
    const div = document.createElement('div');
    const li = document.createElement('li');
    const a = document.createElement('a');
    div.innerHTML = `
    <li>
        <a href="#${newsFeeds[i].id}">
            ${newsFeeds[i].title} (${newsFeeds[i].comments_count})
        </a>
    </li>
    `;
    ul.appendChild(div.firstElementChild)
}
container.appendChild(ul)
container.appendChild(content)



