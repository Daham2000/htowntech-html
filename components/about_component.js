function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

function getComponent() {
    return `
        <style>
#rowSection{
    margin: 20px;
    display: flex;
    flex-direction: row;
}

#imageSection{
    position: relative;
}

.photoOne{
    width: 435px;
    height: 300px;
}

.photoTwo{
    width: 390px;
    height: 160px;
    position: absolute;
    bottom: -3%;
    left: 25%;
}

#param{
    width: 20vw;
    margin: 0;
    color: #413F42;
    letter-spacing: 1.86px;
    font-size: 13px;
}

.aboutRowSection{
    display: flex;
    flex-direction: row;
    padding-top: 33px;
}

#buttonSection{
    display: flex; 
    flex-direction: row; 
    margin-top: 10px; 
    width: 20vw;
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
    font-family: Montserrat;
    align-items: center;
    color: #FFFFFF;
    text-transform: uppercase;
}

#paramSection{
    display: flex;
    flex-direction: column;
    justify-items: start;
    justify-content: start;
    margin: 0;
    padding: 0;
    margin-left: 100px;
}

#profilePhoto{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

#nameSection{
    letter-spacing: 1.35px;
    color: #343434;
    text-transform: uppercase;
    opacity: 1;
    font-family: Montserrat, serif;
    font-size: 15px;
    margin: 0;
    margin-top: 17px;
}

#fullstackText{
    letter-spacing: 0.85px;
    color: #0F52BA;
    text-transform: capitalize;
    opacity: 1;
    font-family: Montserrat, serif;
    font-size: 11px;
    margin: 0;
    margin-top: 5px;
}

.nameSection{
    display: flex;
    flex-direction: column;
    padding-left: 16px;
}

.socialIcon {
    width: 16px;
    color: white;
    padding-right: 10px;
}

.btnBold {
    border: none;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 15px;
    height: 30px;
    color: white;
    font-size: 12px;
    cursor: pointer;
    display: inline-block;
    background: #0F52BA 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
}

#arrowRight{
    width: 11px;
    color: white;
    padding-left: 6px;
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

@media screen and (max-width: 800px) {
    #rowSection{
        margin: 20px;
        display: flex;
        flex-direction: column;
    }
    .photoTwo{
        width: 330px;
        height: 120px;
        position: absolute;
        bottom: -11%;
        left: 25%;
    }
    #param{
        width: 50vw;
        color: #413F42;
        letter-spacing: 1.86px;
        font-size: 13px;
        margin: 50px 0 30px;
        text-align: center;
    }
    #paramSection{
        display: flex;
        flex-direction: column;
        justify-items: center;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
    }
    .aboutRowSection {
        display: flex;
        flex-direction: row;
        justify-items: center;
        padding-top: 0px;
    }
    #buttonSection{
        display: flex; 
        flex-direction: row; 
        margin-top: 10px; 
        width: 45vw;
    }
    .btnHireMe {
        width: 300px;
    }
}
@media screen and (max-width: 580px){
    .photoOne{
        height: 60vw;
        width: 85vw;
    }
    .photoTwo{
            width: 65vw;
            height: 25vw;
            position: absolute;
            bottom: -6%;
            left: 15%;
    }
    #param {
        width: 65vw;
        color: #413F42;
        letter-spacing: 1.86px;
        font-size: 13px;
        margin: 50px 0 30px;
    }
    #buttonSection{
        display: flex; 
        flex-direction: row; 
        margin-top: 10px; 
        width: 65vw;
    }
    .btnHireMe {
        width: 30vw;
    }
}
</style>

<section class="columnSection">
    <h5 class="blueText">About</h5>
    <h4 class="blackText">WHO AM I</h4>
    <div id="rowSection">
        <div id="imageSection">
            <img class="photoOne" src="assets/photoone.png">
            <img class="photoTwo" src="assets/photoTwo.png">
        </div>
        <div id="paramSection">
            <p id="param">
                I am a person who is looking for new challenges and opportunities
                that are always meaningful to me. I am always open to helping others
                and solving their problems. As a full-stack developer, I have really
                enjoyed my journey so far. My undeniable love for making things,
                delivering the best product, working with a team, and my mission-driven
                work ethic literally help to achieve organizational goals. That's why I
                like to give my contribution to a high-growth organization.
            </p>
            <section style="display: flex; flex-direction: column">
                <div class="aboutRowSection">
                    <img src="assets/Daham-photo.jpg" id="profilePhoto" alt="Avatar">
                    <div class="nameSection">
                        <h4 id="nameSection">DAHAM AKALANKA</h4>
                        <h4 id="fullstackText">Fullstack Developer</h4>
                        <div style="padding-top: 10px">
                            <img src="assets/twitter-icon-black.png" class="socialIcon">
                            <img src="assets/facebook-icon-black.png" class="socialIcon">
                            <img src="assets/instagram-icon-black.png" class="socialIcon">
                            <img onclick=openInNewTab("https://www.linkedin.com/in/daham-akalanka-b673a9195/") src="assets/linkedin-black.svg" class="socialIcon">
                        </div>
                    </div>
                </div>
                <div id="buttonSection">
                    <button onclick=openInNewTab("https://drive.google.com/file/d/16Wek-g5pC16qFwFlmJy7buvY0Wjpt0wi/view?usp=sharing") class="btnHireMe">DOWNLOAD CV<img src="assets/down-arrow.png" id="arrowRight"></button>
                    <button onclick=openInNewTab("https://dahamblog.com") 
                    class="btnHireMe" style=" background-color: #413F42; margin-left: 16px">VISIT MY BLOG<img src="assets/arrow_right_icon.png" style="width: 11px; padding-left: 6px;">
                    </button>
                </div>
            </section>

        </div>
    </div>
</section>
    `;
}

class AboutComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = getComponent();
    }
}

window.customElements.define('about-component', AboutComponent);