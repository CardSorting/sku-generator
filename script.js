document.addEventListener("DOMContentLoaded", function() {
    // Get the generate button element
    var generateBtn = document.getElementById('generateBtn');

    // Attach click event to the button
    generateBtn.addEventListener("click", function() {
        // Clear existing SKUs
        var skuList = document.getElementById('skuList');
        skuList.innerHTML = '';

        // Generate 4 sets of SKUs
        for(var i = 0; i < 4; i++) {
            var randomSKU = generateRandomSKU();
            var listItem = document.createElement('li');
            listItem.innerText = randomSKU;
            skuList.appendChild(listItem);
        }
    });
});

function generateRandomSKU() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var length = 6;  // Length of SKU
    var result = '';

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}