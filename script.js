

const generatedNumberElement = document.getElementById('generated-number');

function generateNumber() {
    const randomNumber = Math.floor(Math.random() * 10000000000000000);
    generatedNumberElement.innerText = randomNumber.toString();
}

// Generate number every 2 minutes
setInterval(generateNumber, 120000);

// Initial generation
generateNumber();
