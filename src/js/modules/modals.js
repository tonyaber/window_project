const modals = () => {
    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', (evt) => {
            if (evt.target) {
                evt.preventDefault;
            }

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';

        });
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (evt) => {
            if (evt.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        })
    }

    const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
        modalEngineer = document.querySelector('.popup_engineer'),
        modalEngineerClose = document.querySelector('.popup_engineer .popup_close');
    
    bindModal(callEngineerBtn, modalEngineer, modalEngineerClose);
};

export default modals;