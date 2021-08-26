const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);
        
        trigger.forEach(item => {
            item.addEventListener('click', (evt) => {
                if (evt.target) {
                    evt.preventDefault();
                }

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';

            });
        })
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (evt) => {
            if(evt.target===modal){
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(()=>{
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = '';
        }, time)
    }
    
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');

    showModalByTime('.popup', 50000);
    
};

export default modals;