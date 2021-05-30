

// Initialize the news api parameters
let source = 'bbc-news';
let apiKey = '743d771ba1604ea1a3f82b26ea6956f0'

// Grab the news container
let newsAccordion = document.getElementById('accordionNews');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element){
            let news = `
                <li class="media my-4">
                    <img src="${element.urlToImage}" class="mr-3" alt="${element.title}" style="width: 15%;">
   
                    <div class="media-body">
                    <h3 class="mt-0 mb-1" >${element.title}</h1>
                    <p>${element.content}<br/>
                    <a href="${element.url}" target="_blank">Read More</a></p>
                    </div>
                </li>
            `
            newsHtml += news;
        });
        accordionNews.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();


