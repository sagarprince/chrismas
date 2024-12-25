// Trigger Popup on Tree Click
const treeContainer = document.querySelector('.tree-container');
const popup = document.getElementById('popup');

treeContainer.addEventListener('click', () => {
    popup.style.display = 'block';
});

// Close Popup
function closePopup() {
    popup.style.display = 'none';
}

// Snowfall Effect (Create Multiple Snowflakes)
const snowContainer = document.querySelector('.snow-container');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.position = 'absolute';
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animation = `snowfall ${Math.random() * 5 + 5}s linear infinite`;

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 10000); // Remove after 10 seconds
}

// Generate Snowflakes every 200ms
setInterval(createSnowflake, 200);
