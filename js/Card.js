const teamMembers = [
    { name: "Dominic Toreuellas", position: "WEB UI", cohort: "WEBPT-5", repoLinkTitle: "https://github.com/djtorel", image: "https://ca.slack-edge.com/T4JUEB3ME-UFCHJST0C-g5cdca5e357a-48" },
    { name: "Ernesto Pena", position: "WEB UI", cohort: "WEBPT-5", repoLinkTitle: "https://github.com/ErnestoPena", image: "https://ca.slack-edge.com/T4JUEB3ME-UF63KJE5N-g15bfb1d666f-48" },
    { name: "Joseph Luna", position: "WEB UI", cohort: "WEBPT-5", repoLinkTitle: "https://github.com/joeluna17", image: "https://ca.slack-edge.com/T4JUEB3ME-UFPQNAWGM-f9eca12accb9-48" },
    { name: "James Wigdor", position: "FRONT END", cohort: "WEBPT-5", repoLinkTitle: "https://github.com/jpwigdor", image: "https://ca.slack-edge.com/T4JUEB3ME-UC9P18Z2N-1058ebfdadb8-48" },
    { name: "Reed Turgeon", position: "FRONT END", cohort: "WEBPT-5", repoLinkTitle: "https://github.com/MrT3313", image: "https://ca.slack-edge.com/T4JUEB3ME-UCBBW0HJL-4ad9221b63c2-48" },
    { name: "Noah Stocekel", position: "BACK END", cohort: "WEBPT-3", repoLinkTitle: "https://github.com/BoxOfCereal", image: "https://ca.slack-edge.com/T4JUEB3ME-UAWE50TDX-ced9d9cef354-48" },
];



class Card {
    constructor(member) {
        this.element = document.querySelector(".card-wrapper")
        this.card = document.createElement("div");
        this.nameTitle = document.createElement("h2");
        this.poitionTitle = document.createElement("h3");
        this.repoLinkTitle = document.createElement("a");
        this.img = document.createElement("img");


        this.nameTitle.textContent = member.name;
        this.poitionTitle.textContent = member.position + " : " + member.cohort;
        this.repoLinkTitle.textContent = "GIT HUB Repo";
        this.repoLinkTitle.href = member.repoLinkTitle;
        this.img.src = member.image;
        this.card.appendChild(this.img);
        this.card.appendChild(this.nameTitle);
        this.card.className = "card-view";
        this.card.appendChild(this.poitionTitle);
        this.card.appendChild(this.repoLinkTitle);
        this.element.appendChild(this.card)

    }

}


teamMembers.forEach(member => new Card(member))

//GreenSock Animation
TweenMax.staggerFrom(".card-view", 0.5, { opacity: 0, y: 300, scale: 2, delay: 0.2 }, 0.2);



function filterMemebers(filterData) {

    const myFilter = teamMembers.filter(member => member.position === filterData)
    myFilter.forEach(member => new Card(member))
}



const button = document.querySelectorAll(".filter-button")

button.forEach(button => {
    button.addEventListener('click', e => {

        if (e.target.textContent === 'ALL') {

            refreshAll()
        }
        else {
            clickEvent(e.target.textContent)
        }

    })
})


function clickEvent(data) {
    const cardWrapper = document.querySelector(".card-wrapper");
    const cards = document.querySelectorAll(".card-view")
    cards.forEach(card => cardWrapper.removeChild(card))

    filterMemebers(data);
}


function refreshAll() {
    const cardWrapper = document.querySelector(".card-wrapper");
    const cards = document.querySelectorAll(".card-view")
    cards.forEach(card => cardWrapper.removeChild(card))
    teamMembers.forEach(member => new Card(member));

}




