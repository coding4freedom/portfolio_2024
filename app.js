// 2:22:36

let isModalOpen = false;
let darkToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll('.shape');
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;

        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}

function toggleDarkMode() {
    darkToggle = !darkToggle;
    if (darkToggle) {
        document.body.classList += " dark-theme";
    } 
    else {
        document.body.classList.remove('dark-theme');
    }
}

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

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal__open")
    }
    isModalOpen = true;
    document.body.classList += " modal__open";
}

