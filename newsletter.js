const inputArea = document.getElementById("inputArea");
const subscribeBtn = document.getElementById("subscribeBtn");
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const messageContainer = document.querySelector(".container");
const messageSuccess = ` 
<div class="thanks">
    <div class="thanksBox">
        <div class="checkIcon">
            <i class="fa-solid fa-circle-check" style="color: #000;"></i>

        </div>
        <div class="thanksText">
            <h1>Thanks for subscribing?</h1>
            <p>you will be recieving our daily newsletter which will keep you uptodate with the latest trends </p>
        </div>
        <div class="thanksButton">
            <button class="thanksBtn">Dismiss Message</button>
        </div>
    </div>
</div>
`;

const messageFailure = `
       
<div class="thanks">
<div class="thanksBox">
    <div class="checkIcon">
        <i class="fa-solid fa-triangle-exclamation" style="color: #ea0606;"></i>

    </div>
    <div class="thanksText">
        <h1>you entered an invalid address</h1>
        <p>you will not be recieving our daily newsletter which will keep you uptodate with the latest trends because you choose not to give us a valid email</p>
    </div>
    <div class="thanksButton">
        <button class="thanksBtn">Dismiss Message</button>
    </div>
</div>
</div>
`;

const newsLetter = () => {
    if (emailPattern.test(inputArea.value)) {
        messageContainer.innerHTML = messageSuccess;
    } else {
        messageContainer.innerHTML = messageFailure;
    }
    const disBtn = document.querySelector(".thanksBtn");
    disBtn.addEventListener("click", dismissBtn);
};
const dismissBtn = () => {
    messageContainer.innerHTML = "what else you want me to do";
};
