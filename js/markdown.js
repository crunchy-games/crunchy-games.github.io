const markdownInput = document.getElementById('markdown-input');
const htmlPreview = document.getElementById('html-preview');

// For Marked.js
markdownInput.addEventListener('input', () => {
    htmlPreview.innerHTML = marked.parse(markdownInput.value);
});

markdownInput.dispatchEvent(new Event('input'));