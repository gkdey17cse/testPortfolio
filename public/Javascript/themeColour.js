
const themes = [
    'teal',
    'amber',
    'red',
    'lime',
    'blue',
    'purple',
    'cyan',
    'rose'
];

function setTheme(theme) {
    const body = document.body;

    // Remove any previously applied theme class
    themes.forEach(t => body.classList.remove(`theme-${t}`));

    // Add the selected theme
    body.classList.add(`theme-${theme}`);

    // Save the selected theme in local storage
    localStorage.setItem('theme', theme);
}

// On page load, restore previously selected theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'teal';
    setTheme(savedTheme);
});

