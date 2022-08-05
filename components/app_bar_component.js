const appBarTemplate = document.createElement('template');

appBarTemplate.innerHTML = `
<style>
@font-face {
    font-family: SegoeUI;
    src: url("../assets/SegoeUI.ttf");
}

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
    width: 11px;
    color: white;
}

.contactText {
    color: white;
    padding: 0 0 2.5px 5px;
    font-family: SegoeUI,serif;
    letter-spacing: 1.4px;
    font-size: 11px;
    margin: 0;
}

.contactEmail {
    display: flex;
    flex-direction: row;
    margin-left: 31px;
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
    /*width: 50px;*/
    /*padding-right: 5vw;*/
     margin-right: 2vw;
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
            <p class="contactText">dhmakla2000@gmail.com</p>
        </div>
        <div class="contactEmail">
            <img src="assets/phone_icon.svg" class="appBarIcon">
            <p class="contactText">+94 772934677</p>
        </div>
    </div>
    <div id="socialIconSec">
        <img src="assets/twitter_icon.png" class="socialIcon">
        <img src="assets/facebook_icon.png" class="socialIcon">
        <img src="assets/instagram_icon.png" class="socialIcon">
        <img onclick=openInNewTab("https://www.linkedin.com/in/daham-akalanka-b673a9195/") src="assets/linkedin_icon.png" class="socialIcon">
    </div>
</section>
`;

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

class AppBarComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(appBarTemplate.content.cloneNode(true));
    }
}

window.customElements.define('app-bar-component', AppBarComponent);