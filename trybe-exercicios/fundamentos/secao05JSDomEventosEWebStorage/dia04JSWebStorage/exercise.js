const main = document.querySelector('main');
const mainStyle = main.style;
const bgColorPicker = document.querySelector('#bgColorPicker');
const bgColorBtn = document.querySelector('#bgColorBtn');
const fontColorPicker = document.querySelector('#fontColorPicker');
const fontColorBtn = document.querySelector('#fontColorBtn');
const fontSizeSlider = document.querySelector('#fontSizeSlider');
const fontSizeBtn = document.querySelector('#fontSizeBtn');
const textLineGapSlider = document.querySelector('#textLineGapSlider');
const textLineGapBtn = document.querySelector('#textLineGapBtn');
const fontFamilyArialBtn = document.querySelector('#fontFamilyArialBtn');
const fontFamilyVerdanaBtn = document.querySelector('#fontFamilyVerdanaBtn');
const fontFamilyImpactBtn = document.querySelector('#fontFamilyImpactBtn');
const fontFamilyGeorgiaBtn = document.querySelector('#fontFamilyGeorgiaBtn');
const fontFamilyCursiveBtn = document.querySelector('#fontFamilyCursiveBtn');

// bgColorBtn.addEventListener('click', () => mainStyle.backgroundColor = bgColorPicker.value);
bgColorPicker.addEventListener('input', () => mainStyle.backgroundColor = bgColorPicker.value);

// fontColorBtn.addEventListener('click', () => mainStyle.color = fontColorPicker.value);
fontColorPicker.addEventListener('input', () => mainStyle.color = fontColorPicker.value);

// fontSizeBtn.addEventListener('click', () => mainStyle.fontSize = fontSizeSlider.value + 'px');
fontSizeSlider.addEventListener('input', () => mainStyle.fontSize = fontSizeSlider.value + 'px');

// textLineGapBtn.addEventListener('click', () => mainStyle.lineHeight = textLineGapSlider.value);
textLineGapSlider.addEventListener('input', () => mainStyle.lineHeight = textLineGapSlider.value);

fontFamilyArialBtn.addEventListener('click', () => mainStyle.fontFamily = 'Arial, sans-serif');
fontFamilyVerdanaBtn.addEventListener('click', () => mainStyle.fontFamily = 'Verdana, sans-serif');
fontFamilyImpactBtn.addEventListener('click', () => mainStyle.fontFamily = 'Impact, sans-serif');
fontFamilyGeorgiaBtn.addEventListener('click', () => mainStyle.fontFamily = 'Georgia, sans-serif');
fontFamilyCursiveBtn.addEventListener('click', () => mainStyle.fontFamily = 'cursive, sans-serif');
