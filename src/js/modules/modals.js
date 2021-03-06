const modals = () => {
    let count = 0;

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
            item.addEventListener('click', (evt) => {
                if (evt.target) {
                    evt.preventDefault();
                }
                count++;
                windows.forEach(item => item.style.display = 'none');
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';

            });
        })

        close.addEventListener('click', () => {
            windows.forEach(item => item.style.display = 'none');
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (evt) => {
            if (evt.target === modal && closeClickOverlay) {
                windows.forEach(item => item.style.display = 'none');
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            if (count === 0) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = '';
            }
        }, time)
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    showModalByTime('[data-modal-main]', 50000);

};

export default modals;