const cardContainer = document.getElementById('card-container')


const generatePage = (response) => {
    response.forEach(element => {
        const node = document.createElement('div');
        node.setAttribute('class', 'card');
        node.innerHTML = `
        <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">${element.role}</p>
            <p class="subtitle is-6">${element.name}</p>
          </div>
        </div>
    
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
        `
        cardContainer.appendChild(node)
    });
}






module.exports = {
    generatePage,
}