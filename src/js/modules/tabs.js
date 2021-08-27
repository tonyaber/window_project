const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);
    
    const hideTabContent = () => {
        content.forEach(item => item.style.display = 'none');
        tab.forEach(item => item.classList.remove(activeClass));
    }

    const showTabContent = (i = 0) => {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }
    
    hideTabContent();
    showTabContent();

    header.addEventListener('click', (evt) => {
        const target = evt.target;
        if (target &&
            (target.classList.contains(tabSelector.slice(1)) ||
            target.parentNode.classList.contains(tabSelector.slice(1)))) {
                tab.forEach((item, index) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(index);
                    }            
                })
        }
    })
};

export default tabs;