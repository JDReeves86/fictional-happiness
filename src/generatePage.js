

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
    ${data.map(element => buildCards(element))}
    </section>

</body>
<script src="../src/generatePage.js" rel="text/javascript"></script>
</html>

  `
}

const buildCards = (data) => {
  switch(data.role) {
    case 'Manager':
    return string = 'MAnager TBD';
    case 'Engineer':
      return string = 
      `
      <div class="card">
      <div class="card-content">
        <p class="title">
          ${data.role}
        </p>
        <p class="subtitle">
          ${data.name}
        </p>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            View on <a href="${data.getEmail()}">Email</a>
          </span>
        </p>
        <p class="card-footer-item">
          <span>
            Share on <a href="${data.getGithub()}" target="none">Github</a>
          </span>
        </p>
      </footer>
    </div>
      `;
    case 'Intern':
      return string = 'Intern TBD';
  }

}








module.exports = {
    generatePage,
}