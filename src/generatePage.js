
// Generates the HTML skeleton and where the team member cards are placed, calls the buildCards() function.
const buildPage = (data) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./node_modules/bulma/css/bulma.min.css">
    <link rel="stylesheet" href="./dist/style.css">
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
<script src="./src/generatePage.js" rel="text/javascript"></script>
</html>
  `
}

// Takes the data fed from the saved array that is passed in and maps over each element, calling cardBuilder(). Then joins the array elements 
// into a string to be inserted into the HTML.
const buildCards = (data) => {
const cardArr = data.map((element) => cardBuilder(element))
return cardArr.join('')
}

// Called by the buildCards() function and receives an employee class with it's own data and methods. Then builds an HTML card element,
// while extracting the data from the employee instances. Uses a switch statement to determine if the employee instance is a Manager, Engineer,
// or Intern class by peeking at the role key:value pair.
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
                ${data.role} 
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
                ${data.role} 
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
                ${data.role} 
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
    buildPage,
}