// 2:22:36

function contact(event) {
    event.preventDefault();

    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

    loading.classList += " modal__overlay--visible";

    emailjs.sendForm(
        'service_jxk5l3a',
        'template_2o5ryjj',
        event.target,
        'VD-uYzGHZ1BJrmOpZ'
    ).then(() => {        
        loading.classList.remove("modal__overlay--visible");
        success.classList += ' modal__overlay--visible';
        console.log('This is working');
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. " +
            "Please contact me directly at chris.hawkins.cyber@gmail.com"
        );
    })
}

let isModalOpen = false;

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal__open")
    }
    isModalOpen = true;
    document.body.classList += " modal__open";
}