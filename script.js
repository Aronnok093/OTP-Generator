document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("generateOtpBtn");
    const dis = document.getElementById("otpDisplay");
    const submitBtn = document.querySelector(".btn-submit");
    let generatedOtp = '';

    btn.addEventListener("click", () => {
        generatedOtp = generateOtp();
        dis.innerHTML = `<h4 style="color:white">${generatedOtp}</h4>`;
    });

    submitBtn.addEventListener("click", () => {
        const userInput = Array.from(document.querySelectorAll(".text-fild"))
                               .map(input => input.value)
                               .join('');
        if (userInput === generatedOtp) {
            alert("OTP Matched!");
        } else {
            alert("OTP does not match. Please try again.");
        }
    });

    function generateOtp() {
        const length = 6;
        const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let otp = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            otp += characters[randomIndex];
        }
        return otp;
    }
});
