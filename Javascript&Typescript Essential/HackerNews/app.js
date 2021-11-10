//let ajax = new XMLHttpRequest();   //변수
const ajax = new XMLHttpRequest(); //상수
const container = document.getElementById('root');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTECT_URL = `https://api.hnpwa.com/v0/item/@id.json`;
const content = document.createElement('div');

function getData(url) {
    ajax.open('GET', url, false);
    ajax.send();
    return JSON.parse(ajax.response);
}
function newsDetail() {
    const id = location.hash.substr(1);
    const newsContent = getData(CONTECT_URL.replace('@id', id))
    const title = document.createElement('h1');

    container.innerHTML = `
        <h1>${newsContent.title}</h1>
        <div>
            <a href="#">목록으로</a>
        </div>
    `;
}
function newsFeed() {
    const newsFeeds = getData(NEWS_URL)
    const newsList = [];
    newsList.push('<ul>');
    for (let i = 0; i < newsFeeds.length; i++) {
        newsList.push(`
    <li>
        <a href="#${newsFeeds[i].id}">
            ${newsFeeds[i].title} (${newsFeeds[i].comments_count})
        </a>
    </li>
    `);
    }
    newsList.push('</ul>');
    container.innerHTML = newsList.join('');
}
function router(){
    const routePath = location.hash;
    if(routePath === ''){
        newsFeed();
    }else{
        newsDetail();
    }
}
window.addEventListener('hashchange', router);

router();