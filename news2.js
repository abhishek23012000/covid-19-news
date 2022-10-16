// Grab the news container
const newsAccordion = document.getElementById("accordionNews");

// Main function
const main = async () => {
  // Calling the api
  const response = await fetch(
    `https://gnews.io/api/v4/search?q=in&token=bd5d47042ebffa0b5052eb6efbc95273`
  );

  // Make the response json
  const data = await response.json();

  // Rendering the articles
  if (data.articles) {
    const articles = data.articles;
    let newsHtml = "";

    // Looping through the articles to render each one of them
    articles.forEach(function (element) {
      let news = `
        <li class="media my-4">
          <img src="${element.image}" class="mr-3" alt="${element.title}" style="width: 15%;" />
            <div class="media-body">
              <h3 class="mt-0 mb-1" >${element.title}</h3>
              <p>${element.content}<br/>
                <a href="${element.url}" target="_blank">Read More</a>
              </p>
            </div>
        </li>
      `;
      newsHtml += news;
    });

    accordionNews.innerHTML = newsHtml;
  }
};

// Calling the main function
main();
