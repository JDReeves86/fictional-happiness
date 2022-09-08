
//
const generatePage = (data) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../node_modules/bulma/css/bulma.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Our Team</title>
</head>
<body>
    <header>
        <h1 class="title is-1 has-text-centered py-6">Our Team</h1>
    </header>
    <section class="container.is-full-hd p-6" id="card-container">
      <div class="columns is-multiline is-centered">
        ${buildCards(data)}
      </div>
    </section>

</body>
<script src="../src/generatePage.js" rel="text/javascript"></script>
</html>
  `
}

//
const buildCards = (data) => {
const cardArr = data.map((element) => cardBuilder(element))
return cardArr.join('')
}

//
function cardBuilder(data) {
  switch(data.role) {
      case 'Manager':
        return string = `
        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <p class="title px-4 py-2">
                ${data.name}
              </p>
              <p class="subtitle px-4">
                ${data.role}; 
              </p>
              <p class="subtitle px-4">
              ${data.getId()}
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                  Email: <a href="${data.getEmail()}">${data.email}</a>
                </span>
              </p>
              <p class="card-footer-item">
                <span>
                  ${data.getOfficeNumber()}
                </span>
              </p>
            </footer>
          </div>
        </div>
        `;
      case 'Engineer':
        return string = `
        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <p class="title px-4 py-2">
                ${data.name}
              </p>
              <p class="subtitle px-4">
                ${data.role}; 
              </p>
              <p class="subtitle px-4">
              ${data.getId()}
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                  Email: <a href="${data.getEmail()}">${data.email}</a>
                </span>
              </p>
              <p class="card-footer-item">
                <span>
                  Find on <a href="${data.getGithub()}" target="none">Github</a>
                </span>
              </p>
            </footer>
          </div>
        </div>
        `;
      case 'Intern':
        return string = `
        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <p class="title px-4 py-2">
                ${data.name}
              </p>
              <p class="subtitle px-4">
                ${data.role}; 
              </p>
              <p class="subtitle px-4">
              ${data.getId()}
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                  Email: <a href="${data.getEmail()}">${data.email}</a>
                </span>
              </p>
              <p class="card-footer-item">
                <span>
                  ${data.getSchool()}
                </span>
              </p>
            </footer>
          </div>
        </div>
        `;
    }
}

module.exports = {
    generatePage,
}