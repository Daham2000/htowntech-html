const servicesTemplate = document.createElement('template');

servicesTemplate.innerHTML = `
<style>
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

@font-face {
    font-family: OpenSans;
    src: url("../assets/OpenSans-Regular.ttf");
}

@font-face {
    font-family: OpenSansBold;
    src: url("../assets/OpenSans-Bold.ttf");
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

.description {
    font-family: Arial;
    color: #707070;
    font-size: 12px;
    text-align: center;
    padding: 0 80px;
    width: 60%;
}

.serviceBox {
    width: 304px;
    height: 350px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 6px 6px 17px #00000029;
    border-radius: 10px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 25px;
}

.blackTextServiceBox {
    color: #111F2C;
    font-family: OpenSansBold, serif;
    font-size: 17px;
    letter-spacing: 0.04px;
    margin: 0;
    margin-top: 12px;
    font-weight: bolder;
}

.arrowRight {
    width: 11px;
    color: white;
    padding-left: 6px;
}

.serviceBoxTop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
}

.serviceBoxTopImg {
    width: 130px;
    height: 130px;
    padding-top: 20px;
}
.btnHireMe {
    border: none;
    height: 30px;
    font-size: 9px;
    cursor: pointer;
    background: #0F52BA 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 150px;
    font-family: Montserrat;
    align-items: center;
    color: #FFFFFF;
    text-transform: uppercase;
    margin-bottom: 30px;
}
</style>

<section class="columnSection">
    <h4 class="blueText">Services</h4>
    <h4 class="blackText">WHAT I DO</h4>
    <p class="description">There are all services that I'm providing to the world to 
    scale up for business and to make your idea real.</p>
    <br>
    <section style="display: flex; flex-direction: row; margin: 25px">
        <div class="serviceBox">
            <div class="serviceBoxTop">
                <img src="assets/web.png" class="serviceBoxTopImg">
                <h3 class="blackTextServiceBox">WEB
                    DEVELOPMENT</h3>
                <p class="description">I can build your web app using ReactJs</p>
            </div>
            <button class="btnHireMe" onclick="onClickContact()">CONTACT ME<img src="assets/arrow_right_icon.png" class="arrowRight"></button>
        </div>
        <div class="serviceBox">
            <div class="serviceBoxTop">
                <img src="assets/backend.png" class="serviceBoxTopImg">
                <h3 class="blackTextServiceBox">BACK-END DEVELOPMENT</h3>
                <p class="description">I can build your back-end using Nodejs, MongoDB, Mysql, Python, Flask framework,
                    Firebase, Google cloud platform, AWS</p>
            </div>
            <button class="btnHireMe" onclick="onClickContact()">CONTACT ME<img src="assets/arrow_right_icon.png" class="arrowRight"></button>
        </div>
        <div class="serviceBox">
            <div class="serviceBoxTop">
                <img src="assets/mobile.png" class="serviceBoxTopImg">
                <h3 class="blackTextServiceBox">MOBILE DEVELOPMENT</h3>
                <p class="description">I can build your mobile app using Flutter and Android native</p>
            </div>
            <button class="btnHireMe" onclick="onClickContact()">CONTACT ME<img src="assets/arrow_right_icon.png" class="arrowRight"></button>
        </div>
    </section>

</section>
`;
function onClickContact(){
    document.getElementById('contact').scrollIntoView();
}
class ServicesComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(servicesTemplate.content.cloneNode(true));
    }
}

window.customElements.define('services-component', ServicesComponent);