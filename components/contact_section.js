const aboutTemplate = document.createElement('template');

aboutTemplate.innerHTML = `
<style>

.btnHireMe {
    border: none;
    height: 30px;
    color: white;
    font-size: 11px;
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
    padding-top: 40px;
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
</style>

<section class="columnSection">
    <h5 class="blueText">Contact</h5>
    <h4 class="blackText">GET IN TOUCH</h4>
    <div id="contactBackground">
        <div>
            <form id="contactForm">

                <div class="labelClass">
                    <label for="fname" class="formLabel">FIRST NAME*</label>
                </div>
                <input type="text" id="fname" name="firstname">

                <div class="labelClass">
                    <label class="formLabel" for="lname">LAST NAME*</label>
                </div>
                <input type="text" id="lname" name="lastname">

                <div class="labelClass">
                    <label class="formLabel" for="email">EMAIL*</label>
                </div>
                <input type="text" id="email" name="email">

                <div class="labelClass">
                    <label class="formLabel" for="message">MESSAGE*</label>
                </div>
                <input type="text" id="message" name="message" style="height: 60px">

                <input class="btnHireMe" type="submit" value="SEND MESSAGE">
            </form>
        </div>
    </div>
</section>
`;

class AboutComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(aboutTemplate.content.cloneNode(true));
    }
}

window.customElements.define('contact-component', AboutComponent);