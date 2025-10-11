const avatars = document.querySelectorAll('avatar');
avatars.forEach(avatar => {
    const img = avatar.getAttribute('img');
    const link = avatar.getAttribute('href');
    const name = avatar.getAttribute('name');

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

    if (avatar.hasAttribute('circle')) {
      image.style.borderRadius = '100%';
    }

    a.append(image, blurDiv, image.cloneNode());
    avatar.replaceWith(a);
});
