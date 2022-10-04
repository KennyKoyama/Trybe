const main = document.querySelector('main');
const mainStyle = main.style;
const bgColorPicker = document.querySelector('#bgColorPicker');
const fontColorPicker = document.querySelector('#fontColorPicker');
const fontSizeSlider = document.querySelector('#fontSizeSlider');
const textLineGapSlider = document.querySelector('#textLineGapSlider');
const fontFamilyArialBtn = document.querySelector('#fontFamilyArialBtn');
const fontFamilyVerdanaBtn = document.querySelector('#fontFamilyVerdanaBtn');
const fontFamilyImpactBtn = document.querySelector('#fontFamilyImpactBtn');
const fontFamilyGeorgiaBtn = document.querySelector('#fontFamilyGeorgiaBtn');
const fontFamilyCursiveBtn = document.querySelector('#fontFamilyCursiveBtn');

mainStyle.backgroundColor = localStorage.getItem('bgColor');
mainStyle.color = localStorage.getItem('fontColor');
mainStyle.fontSize = localStorage.getItem('fontSize');
mainStyle.lineHeight = localStorage.getItem('lineGap');
mainStyle.fontFamily = localStorage.getItem('fontFamily');


bgColorPicker.addEventListener('input', () => {
    mainStyle.backgroundColor = bgColorPicker.value;
    localStorage.setItem('bgColor', bgColorPicker.value);
});
fontColorPicker.addEventListener('input', () => {
    mainStyle.color = fontColorPicker.value;
    localStorage.setItem('fontColor', fontColorPicker.value);
});
fontSizeSlider.addEventListener('input', () => {
    mainStyle.fontSize = fontSizeSlider.value + 'px';
    localStorage.setItem('fontSize', fontSizeSlider.value + 'px');
});
textLineGapSlider.addEventListener('input', () => {
    mainStyle.lineHeight = textLineGapSlider.value;
    localStorage.setItem('lineGap', textLineGapSlider.value);
});
fontFamilyArialBtn.addEventListener('click', () => {
    mainStyle.fontFamily = 'Arial, sans-serif';
    localStorage.setItem('fontFamily', 'Arial, sans-serif');
});
fontFamilyVerdanaBtn.addEventListener('click', () => {
    mainStyle.fontFamily = 'Verdana, sans-serif';
    localStorage.setItem('fontFamily', 'Verdana, sans-serif');
});
fontFamilyImpactBtn.addEventListener('click', () => {
    mainStyle.fontFamily = 'Impact, sans-serif';
    localStorage.setItem('fontFamily', 'Impact, sans-serif');
});
fontFamilyGeorgiaBtn.addEventListener('click', () => {
    mainStyle.fontFamily = 'Georgia, sans-serif';
    localStorage.setItem('fontFamily', 'Georgia, sans-serif');
});
fontFamilyCursiveBtn.addEventListener('click', () => {
    mainStyle.fontFamily = 'cursive, sans-serif';
    localStorage.setItem('fontFamily', 'cursive, sans-serif');
});

