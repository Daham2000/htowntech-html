const contactTemplate = `
<style>

.btnHireMe {
    border: none;
    height: 30px;
    color: white;
    font-size: 11px;
    text-align: center;
    cursor: pointer;
    background: #064EA3 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 371px;
    font-family: Montserrat;
}

.columnSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5px;
}

@font-face {
    font-family: Montserrat;
    src: url("../assets/montserrat.regular.ttf");
}

.blueText {
    color: #0F52BA;
    font-family: Montserrat;
    font-size: 13px;
    letter-spacing: 2.33px;
    margin: 0;
}

.blackText {
    color: #343434;
    font-family: Montserrat;
    font-size: 25px;
    letter-spacing: 0.04px;
    margin: 0;
    margin-top: 12px;
}

#contactBackground{
    width: 96%;
    height: 600px;
    background-image: url("../assets/cntct.png");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: 100% 100%;
}

#contactForm{
    display: flex;
    flex-direction: column;
    margin: 20px;
    margin-left: 16vw;
    margin-top: 80px;
    width: 433px;
    align-items: center;
    align-content: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.formLabel{
    font-family: Montserrat;
    color: #767676;
    font-size: 14px;
    padding-bottom: 7px;
    padding-top: 9px;
}

input{
    width: 371px;
    margin-bottom: 20px;
    height: 40px;
    border: 0.30000001192092896px solid #C4C4C4;
    border-radius: 5px;
    opacity: 1;
    padding-left: 10px;
    transition: 180ms box-shadow ease-in-out;
}

input:focus {
  outline: 3px solid transparent;
}

.labelClass{
    display: flex;
    width: 371px;
    flex-direction: row;
    justify-items: left;
    justify-content: left;
    align-content: flex-start;
    align-items: flex-start;
    text-align: left;
}

textarea {
   width: 371px;
    margin-bottom: 20px;
    height: 40px;
    border: 0.30000001192092896px solid #C4C4C4;
    border-radius: 5px;
    opacity: 1;
    padding-left: 10px;
    padding-top: 5px;
  resize: none;
}

textarea:focus {
  outline: 3px solid transparent;
}

@media screen and (max-width: 800px) {
    #contactForm{
        margin-top: 25px;
        margin-left: 0vw;
    }
    #contactBackground{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
}

@media screen and (max-width: 697px) {
    #contactForm{
        margin-top: 25px;
        margin-left: 0;
        width: 70vw;
        margin-right: 0;
    }
    #contactBackground{
        display: flex;
        width: 75vw;
        flex-direction: row;
        justify-content: center;
    }
    .labelClass{
        width: 60vw;
    }
    input {
        width: 55vw;
    }
    textarea {
        width: 55vw;
    }
    .btnHireMe{
        width: 55vw;
    }
}
#toastMessage{
    position: fixed;
    bottom: 5%;
    width: 225px;
    height: 20px;
    background-color: #12b412;
    color: #FFFFFF;
    font-family: Arial,serif;
    font-size: 14px;
    animation-name: example;
    animation-duration: 2s;
    padding: 10px 10px 25px;
    display: none;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
    border-radius: 5px;
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>

<section class="columnSection">
    <h5 class="blueText">Contact</h5>
    <h4 class="blackText">GET IN TOUCH</h4>
    <div id="contactBackground">
        <div>
            <form id="contactForm" onsubmit="onFormSubmit();return false" action="">

                <div class="labelClass">
                    <label for="fname" class="formLabel">FIRST NAME*</label>
                </div>
                <input type="text" id="fname" name="firstname" required>

                <div class="labelClass">
                    <label class="formLabel" for="lname">LAST NAME*</label>
                </div>
                <input type="text" id="lname" name="lastname" required>

                <div class="labelClass">
                    <label class="formLabel" for="email">EMAIL*</label>
                </div>
                <input type="text" id="email" name="email" required>

                <div class="labelClass">
                    <label class="formLabel" for="message">MESSAGE*</label>
                </div>
                <textarea id="message" name="message" style="height: 60px"></textarea>

                <input class="btnHireMe" type="submit" value="SEND MESSAGE">
            </form>
        </div>
    </div>
    <div id="toastMessage">Your message sent. We will get back to you ASAP. Thanks.</div>
</section>
`;

async function onFormSubmit() {
    const fName = document.getElementById("fname");
    const lName = document.getElementById("lname");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    if (fName.value !== "" && lName.value !== "" && email.value !== "" && message.value !== "") {
        try {
            const data = {
                "email": email.value,
                "firstName": fName.value,
                "message": message.value,
                "lastName": lName.value
            };
            fetch('https://portfolio-web-be.herokuapp.com/root/contact-me', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((data) => {
                if (data.status === 200) {
                    const message = "Your message sent. We will get back to you ASAP. Thanks.";
                    const toastMessageElement = document.getElementById("toastMessage");
                    toastMessageElement.textContent = message;
                    toastMessageElement.style.display = "block";
                    setTimeout(function() {
                        toastMessageElement.style.display = "none";
                    }, 3000);
                }
            });
        } catch (e) {
            console.log(e)
        }
    }
}

class ContactComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = contactTemplate;
    }
}

window.customElements.define('contact-component', ContactComponent);