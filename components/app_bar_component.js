const appBarTemplate = document.createElement('template');

appBarTemplate.innerHTML = `
<style>
#appBarSection {
    background-color: #1d1e59;
    height: 30px;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.appBarIcon {
    width: 13px;
    color: white;
    margin-left: 10vw;
}

.contactText {
    color: white;
    padding-left: 5px;
    font-family: Inter;
}

.contactEmail {
    display: flex;
    flex-direction: row;
    font-family: Inter;
}

#contactNameSection {
    display: flex;
    flex-direction: row;
    align-content: space-between;
    align-items: center;
    justify-content: space-between;
}

#socialIconSec {
    display: flex;
    flex-direction: row;
    width: 50px;
    padding-right: 5vw;
}

.socialIcon {
    width: 16px;
    color: white;
    padding-right: 10px;
}
</style>

<section id="appBarSection">
    <div id="contactNameSection">
        <div class="contactEmail">
            <img src="assets/email_icon.svg" class="appBarIcon">
            <h6 class="contactText">dhmakal2000@gmail.com</h6>
        </div>
        <div class="contactEmail">
            <img src="assets/phone_icon.svg" class="appBarIcon">
            <h6 class="contactText">+94 772934677</h6>
        </div>
    </div>
    <div id="socialIconSec">
        <img src="assets/twitter_icon.png" class="socialIcon">
        <img src="assets/facebook_icon.png" class="socialIcon">
        <img src="assets/instagram_icon.png" class="socialIcon">
        <img src="assets/linkedin_icon.png" class="socialIcon">
    </div>
</section>
`;

class AppBarComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(appBarTemplate.content.cloneNode(true));
    }
}

window.customElements.define('app-bar-component', AppBarComponent);