/* RULES
1.   Follow rules set by chunk makers
2.   THIS is the only js file
3.   Don't ruin anything
4.   Name chunks
5.   3 lines in between chunks
*/

/* CUSTOM ELEMENTS
  <avatar img="imageURL" href="link" name="name" circle?></avatar>
  <markdown>Markdown text</markdown>
  <md>Markdown text</md>
*/

/* CHUNK DICTIONARY
1.   AVATAR ELEMENT
2.   RANDOM MESSAGES
3.   MARKDOWN
*/



// AVATAR ELEMENT
const avatars = document.querySelectorAll('avatar');
avatars.forEach(e => {
    const img = e.getAttribute('img');
    const link = e.getAttribute('href');
    const name = e.getAttribute('name');

    const a = document.createElement('a');
    a.href = link;
    a.title = name;
    a.target = '_blank';
    a.classList.add('avatar');

    const blurDiv = document.createElement('div');
    blurDiv.className = 'blur';

    const image = document.createElement('img');
    image.src = img;
    image.alt = name;

    if (e.hasAttribute('circle')) {
      image.style.borderRadius = '100%';
    }

    a.append(image, blurDiv, image.cloneNode());
    e.replaceWith(a);
});



// RANDOM MESSAGES
const randomMessages = [
  "Is this the real life? Is this just fantasy?",
  "America is a nation, that can be defined in a single word... hemlguffghhu",
  "i don't think numbers are funny ngl",
  "jesus loves you 💖",
  "ERROR 218: This is fine",
  "ERROR 404: Message not found",
  "ERROR 418: I'm a teapot",
  "ERROR 420: TOO HIGH TO FUNCTION",
  "my friend won't shut the HELL UP about KPOP demon hunters... and it SUCKS!",
  "NCSources is a guy who likes JS. Who likes JS? Him apparently. Psychopath tbh."
];

const ranIndex = Math.floor(Math.random() * randomMessages.length);
const element = document.getElementById("ran-message");

if (element) element.innerHTML = randomMessages[ranIndex];



// MARKDOWN - No editing under any circumstances
function formatMD(text) {
  const newlineRegex = /(?:[\n ]{2,}$)+/gm;
  text = text.replace(newlineRegex, '<br>\n');
  
  const boldRegex = /([_*]{2})(.*?)\1/g;
  text = text.replace(boldRegex, '<strong>$2</strong>');

  const italicRegex = /([_*])(.*?)\1/g;
  text = text.replace(italicRegex, '<em>$2</em>');

  const strikethroughRegex = /~~(.*?)~~/g;
  text = text.replace(strikethroughRegex, '<del>$1</del>');

  const imgRegex = /!\[(.*?)]\((.*?)\)/g;
  text = text.replace(imgRegex, '<img alt="$1" src="$2">');

  const linkRegex = /\[(.*?)]\((.*?)\)/g;
  text = text.replace(linkRegex, '<a href="$2">$1</a>');

  const blockRegex = /```(.*?)```/gs;
  text = text.replace(blockRegex, '<pre><code>$1</code></pre>');

  const inlineRegex = /`(.*?)`/g;
  text = text.replace(inlineRegex, '<code>$1</code>');

  for (let i = 6; i >= 1; i--) {
    const headerRegex = new RegExp(`^#{${i}}(.*)$`, 'gm');
    text = text.replace(headerRegex, `<h${i}>$1</h${i}>`);
  }

  const element = document.createElement('div');
  element.innerHTML = text;

  element.querySelectorAll('pre br').forEach(br => br.remove());

  for (let i = 6; i >= 1; i--) {
    element.querySelectorAll(`h${i} br`).forEach(br => br.remove());
  }

  return element.innerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
  const mdElements = document.body.querySelectorAll('markdown, md');
  mdElements.forEach(e => {
    const div = document.createElement('div');
    div.className = 'markdown';
    div.innerHTML = formatMD(e.innerHTML);

    e.replaceWith(div);
  });
});