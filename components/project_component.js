function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

function getComponentProject(name, description, image, projectLink) {
    return `
        <div style="
            margin: 10px;
            background-color: #FFFFFF;
            border-radius: 15px;
            width: 300px;
            height: 350px;
            animation-name: fade;
            animation-duration: 1.5s;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            justify-items: center;
            align-items: center;">

        <img src=${image} style="width: 145px; margin: 0; padding: 0;"/>
        <div style="width: 225px; text-align: center;">
            <h4 style="padding: 0; margin: 0; font-family: OpenSans,serif; font-size: 16px;">${name}</h4>
        </div>
        <div style="width: 246px;">
            <p style="padding: 11px; margin: 0; font-family: OpenSans,serif; font-size: 12px; text-align: center">
                ${description}
            </p>
        </div>
        <div
            style="margin-top:10px; width: 246px; display: flex; align-content: center; justify-items: center; justify-content: center;">
            <button class="btnContactMe" onclick=openInNewTab('${projectLink}')>EXPLORE</button>
        </div>

    </div>
    `;
}

class ProjectComponent extends HTMLElement {
    constructor() {
        super();
        const name = this.attributes.name.value
        const description = this.attributes.description.value
        const image = this.attributes.image.value
        const projectLink = this.attributes.link.value
        this.innerHTML = getComponentProject(name,
            description,
            image,
            projectLink);
    }
}

window.customElements.define('project-component', ProjectComponent);