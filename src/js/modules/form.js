const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');
    
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так... Перезагрузите страницу'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => inputs.forEach(input => input.value = '');
    
    form.forEach(item => {
        item.addEventListener('submit', (evt) => {
            evt.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finnally(() => {
                    clearInputs();
                    setTimeout(() => statusMessage.remove(), 5000);
            })
            
            
        })
    })

};

export default forms;