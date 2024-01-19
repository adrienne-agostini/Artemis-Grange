const btn = document.getElementById('shop-submit');

const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'shop_service';
    const templateID = 'shop_template_24';
    console.log(this)
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
        }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
        });
});