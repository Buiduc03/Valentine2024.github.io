const slider = document.querySelector('.slider');
const activateSlider = (event) => {
    const items = document.querySelectorAll('.item');

    if (event.target.classList.contains('next')) {
        slider.append(items[0]);
    } else if (event.target.classList.contains('prev')) {
        slider.prepend(items[items.length - 1]);
    }
};

document.addEventListener('click', activateSlider, false);