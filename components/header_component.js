const headerComponent = document.createElement('template');

headerComponent.innerHTML = `
<style>
#headerSection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}

#dahamIDName {
    font-family: Arial;
    color: #0f52ba;
    letter-spacing: 3px;
    margin-left: 30px;
}

#headerButtonSection {
    display: flex;
    flex-direction: row;
}

.btnHeader {
    color: black;
    font-family: Arial;
    padding-right: 20px;
    font-size: 11px;
}

.btn {
    border: none;
    background-color: inherit;
    padding: 14px 28px;
    font-size: 12px;
    cursor: pointer;
    display: inline-block;
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

.btn:hover {
    background: #eee;
}

.success {
    color: dodgerblue;
}
</style>

<section id="headerSection">
    <div>
        <h2 id="dahamIDName">DAHAM.</h2>
    </div>
    <div id="headerButtonSection">
        <button class="btn success">HOME</button>
        <button class="btn" onclick="onClickAbout()">ABOUT</button>
        <button class="btn">SERVICES</button>
        <button class="btn">PROJECTS</button>
        <button class="btn" onclick="onClickContact()">CONTACTS</button>
    </div>
    <button class="btnBold">HIRE ME</button>
</section>
`;

class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(headerComponent.content.cloneNode(true));
    }
}

function onClickContact(){
    window.scrollBy(0, 1250);
}

function onClickAbout(){
    window.scrollBy(0, 650);
}

window.customElements.define('header-component', HeaderComponent);