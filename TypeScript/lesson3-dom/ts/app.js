// const h1= document.querySelector('h1') as HTMLHeadElement;  
// const h1= document.querySelector<HTMLHeadElement>('h1') ;  
var ul = document.querySelector("ul");
var fetchData = function (url) {
    fetch(url)
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var li = "";
        data.map(function (item, index) {
            li += "<li>".concat(item.title, "</li>");
        });
        ul.innerHTML = li;
    });
};
fetchData('https://jsonplaceholder.typicode.com/todos');
