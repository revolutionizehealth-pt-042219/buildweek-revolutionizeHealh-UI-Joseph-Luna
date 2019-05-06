const teamMembers = [
    { name: "Dominic Toreuellas", position: "WEB UI", cohort: "WEBPT-5", repoLinkTitle: "https://github.com/djtorel", image: "https://ca.slack-edge.com/T4JUEB3ME-UFCHJST0C-g5cdca5e357a-512" },
    { name: "Ernesto Pena", position: "WEB UI", cohort: "WEBPT-5", repoLinkTitle: "https://github.com/ErnestoPena", image: "https://ca.slack-edge.com/T4JUEB3ME-UF63KJE5N-g15bfb1d666f-512" },
    { name: "Joseph Luna", position: "WEB UI", cohort: "WEBPT-5", repoLinkTitle: "https://github.com/joeluna17", image: "https://ca.slack-edge.com/T4JUEB3ME-UFPQNAWGM-f9eca12accb9-512" },
    { name: "James Wigdor", position: "FRONT END", cohort: "WEBPT-5", repoLinkTitle: "https://github.com/jpwigdor", image: "https://ca.slack-edge.com/T4JUEB3ME-UC9P18Z2N-1058ebfdadb8-512" },
    { name: "Reed Turgeon", position: "FRONT END", cohort: "WEBPT-5", repoLinkTitle: "https://github.com/MrT3313", image: "https://ca.slack-edge.com/T4JUEB3ME-UCBBW0HJL-4ad9221b63c2-512" },
    { name: "Noah Stocekel", position: "BACK END", cohort: "WEBPT-3", repoLinkTitle: "https://github.com/BoxOfCereal", image: "https://ca.slack-edge.com/T4JUEB3ME-UAWE50TDX-ced9d9cef354-512" },
];



class Card {
    constructor(member) {
        this.element = document.querySelector(".card-wrapper")
        this.card = document.createElement("div");
        this.nameTitle = document.createElement("h2");
        this.poitionTitle = document.createElement("h3");
        this.repoLinkTitle = document.createElement("a");
        this.repoImg = document.createElement("img")
        this.repoImg.className = 'repo-image';
        this.img = document.createElement("img");


        this.nameTitle.textContent = member.name;
        this.poitionTitle.textContent = member.position + " : " + member.cohort;
        this.repoImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAbFBMVEX////wUDPvRCDvRiT+9fT5xL35wbnvPhX4sajvPBDvOQf5wrz3qJ75x8HwSyzwSSn6zMbzgnL60Mv0iXr71dDwVTr2o5j84+Dzemn1lIf+8O7yaFL729bzdWHxYkr96+n4uLDxW0HuLgDybVgY446fAAACeklEQVRYhc3YW3eCMAwAYIJztQWKCFO3uaHs///HgdyaXlIKe1jP2cOMfCdNQ0SjyLeqK0Bx8b7Nu1IhAaTYb3Y4PNdWKWUwLJ78jQPANkiqs0XCTiutrNOZg7b4OuloQGvP7sj+kXROXFJYnVImsl4y6xTSmd258146CUNa3k99/zC3tHB3Yx+OOTU7EPGK3aVTWQbppf17zWXo2aVKeQfpqT0CpRQdkyLV+PyEZ3fGfTqHSpSSp590RxZz7BUXnOwC3YH8fQ4eNYiQDAfkdY4ednrUtTvTad/7MoUzszPtUmreVnhv2bL5ZHXaQqSKtGSqOByA+CdIcjqt1JXpnrkkXCdbnce1e95rzclVJ7ULKGeAYnZynd0skc4IwSg18OC4N0eJdiZolLp/EzxV+joRdcYQ8NNUDMtUqcxNuyBVqvFl4hJdpfVyKwRyPqACXSfLyMMgiJgqb0EQNVW0FD0ZOadKm+sloNj97dKvT5RAc4uivUdSoXlv+KlAHLrX9nQjqdA0VSr8YXPoX00W3SL9ij+z+qMqkcMOY56khCGQMRcstzu0pEHGUh2yTh6II4c6O0ZCQnPcEjt30Yu0962ej1vityH8sEk2x16n+D5GPyxRu2OVdnO0zPUgcziWLlDnRmI8RDgdU6LmBuUYu5Nfc+iOn0Zc9ZlywmenPI384HHvcfQuyMtpZ5a5ESL1/ajPjSVOuzt0Tfyd1HVVWOePNye0i3Zu8BjVhz4vlBM56ZY7+u7WO9R8WlqfSXJMlVDH6MzVjj2nZf1jSOYPCKscvZ9Cz8strXfwnbrFUb/3r63PJIkt54WkpvuxrtnstJ+N5RsUN+/bfgH7lh6/nIPCugAAAABJRU5ErkJggg==";
        this.repoLinkTitle.href = member.repoLinkTitle;
        this.img.src = member.image;
        this.repoLinkTitle.appendChild(this.repoImg)
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




