import checkNumInputs from "./checkNumInputs";
const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfil = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    const bindActionsToElems = (event, elem, prop) => {
        elem.forEach((item, index) => {
            item.addEventListener(event, () => {
                if (elem.length > 1) {
                    state[prop] = index + 1;
                } else {
                    state[prop] = item.value;
                }
            });
        });
    }

    bindActionsToElems('click', windowForm, 'form');
    bindActionsToElems('change', windowHeight, 'hight');
    bindActionsToElems('change', windowWidth, 'width');
    bindActionsToElems('change', windowType, 'type');
    bindActionsToElems('change', windowProfil, 'profil');
};

export default changeModalState;