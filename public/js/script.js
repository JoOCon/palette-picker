let colorPalette = [
  { hexValue: '#2e30a7', locked: false }, 
  { hexValue: '#af3964', locked: false },
  { hexValue: '#a72a2a', locked: false }, 
  { hexValue: '#d6c138', locked: false }, 
  { hexValue: '#5daf0f', locked: false }
];

const randomColorGenerator = () => ('#' + '0123456789abcdef'.split('').map(
  (hexvalue, index, hexValuesArray) => {
    let randomIndex = Math.floor(Math.random() * 16)
    return index > 5 ? null : hexValuesArray[randomIndex]
  }).join('')
);

const newPalette = (e) => {
  if (e.which === 18) {
    const updatedPalette = colorPalette.map(color => {
      let randomColor = randomColorGenerator();
      if (color.locked) {
        return color
      } else {
        return { hexValue: randomColor, locked: false }
      }
    })
    colorPalette = updatedPalette;
    displayPalette();
  }
};

const displayPalette = () => {
  colorPalette.map((color, index) => {
    $(`.color-${index + 1}`).css('background-color', `${color.hexValue}`);
    $(`.color-text-${index + 1}`).text(`${color.hexValue}`);
  })
}

const handleLock = (e) => {
  let selectedColor = e.target.previousSibling.previousSibling.innerText;
  colorPalette.map(color => {
    color.hexValue === selectedColor ? color.locked = !color.locked : null
  });
  $(e.target).toggleClass('unlocked');
  $(e.target).toggleClass('locked');
};

$(window).keydown(newPalette);
$('.unlocked').click(handleLock);
