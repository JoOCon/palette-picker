const randomColorGenerator = () => ('#' + '0123456789abcdef'.split('').map(
  (hexvalue, index, hexValuesArray) => {
    let randomIndex = Math.floor(Math.random() * 16)
    return index > 5 ? null : hexValuesArray[randomIndex]
  }).join('')
);

$(window).keydown((e) => {
  if (e.which === 18) {
    let randomColor = randomColorGenerator()
    $('.color-1').css("background-color", `${randomColor}`);
  }
});
