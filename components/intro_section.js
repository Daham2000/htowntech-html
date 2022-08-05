const introTemplate = document.createElement('template');

introTemplate.innerHTML = `
<style>
#sectionIntro{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
}

#introText{
    letter-spacing: 0;
    font-family: Arial;
    color: #413F42;
    text-transform: uppercase;
    opacity: 1;
    font-size: 28px;
    padding-top: 20px;
    margin: 0;
    font-weight: bold;
}

#introDescription{
    font-family: Arial;
    color: #707070;
    font-size: 12px;
    text-align: center;
    padding: 0 60px;
}

#sectionIntroBtn{
    display: flex;
    flex-direction: row;
    justify-items: center;
}

.btnHireMe{
    border: none;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 15px;
    height: 30px;
    color: white;
    font-size: 10px;
    cursor: pointer;
    background: #0F52BA 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.btnContactMe{
    border-color: #0F52BA ;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 15px;
    height: 30px;
    color: #0F52BA;
    font-size: 10px;
    cursor: pointer;
    background: white 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    text-align: center;
}

#arrowRight{
    width: 11px;
    color: white;
    padding-left: 6px;
}
</style>

<section id="sectionIntro">
    <h3 id="introText">MAKE YOUR OWN WORLD</h3>
    <p id="introDescription">You want a high performance application to scale up your business or
    to convert your own genuine app idea to a real world application. Can you contact me anytime you want.</p>
    <div id="sectionIntroBtn">
        <button class="btnHireMe">HIRE ME <img src="assets/arrow_right_icon.png" id="arrowRight"></button>
        <button class="btnContactMe" onclick="moveToContact()">CONTACT ME</button>
    </div>
</section>
`;

class IntroComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(introTemplate.content.cloneNode(true));
    }
}

function moveToContact(){
    document.getElementById('contact').scrollIntoView();
}

window.customElements.define('intro-component', IntroComponent);