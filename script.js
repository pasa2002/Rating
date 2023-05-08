let lastClickedButton = null;

function addBackgroundToButton(buttonId) {
    let button = document.getElementById(buttonId);
    
    if (lastClickedButton !== null) {
        lastClickedButton.classList.remove('button-style');
    }

    
    button.classList.add('button-style');
    lastClickedButton = button;
}

function submit(){
    document.getElementById('front-page').classList.add('hide');
    let submitForm = document.getElementById('thank-you');
    submitForm.classList.remove('hide')
    submitForm.innerHTML = '';

    submitForm.innerHTML = thankYouPage();
}

function thankYouPage(){
    const rating = document.querySelector('.button-style').textContent;
    return`
        <div class="thank-you-img">
        <img src="images/illustration-thank-you.svg">
    </div>

    <div class="selection">
        <p>
        You selected ${rating} out of 5
        </p>
    </div>

    <div class="thankyou-text">
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, dont hesitate to<br> get in touch!
        </p>
    </div>
    `
}