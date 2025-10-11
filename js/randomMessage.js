const randomMessages = [
  "Is this the real life? Is this just fantasy?",
  "America is a nation, that can be defined in a single word... hemlguffghhu",
  "i don't think numbers are funny ngl",
  "jesus loves you 💖",
  "ERROR 420: TOO HIGH TO FUNCTION",
  "ERROR 404: Message not found",
  "my friend won't shut the HELL UP about KPOP demon hunters... and it SUCKS!",
  "NCSources is a guy who likes JS. Who likes JS? Him apparently. Psychopath tbh."
];

const ranIndex = Math.round(Math.random() * randomMessages.length);
const element = document.getElementById("ran-message");

element.innerHTML = randomMessages[ranIndex];