

// Initialize the news api parameters

// Grab the news container
let newsAccordion = document.getElementById('accordionNews');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?q=in&token=bd5d47042ebffa0b5052eb6efbc95273`, true);

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
                    <img src="${element.image}" class="mr-3" alt="${element.title}" style="width: 15%;">
   
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


