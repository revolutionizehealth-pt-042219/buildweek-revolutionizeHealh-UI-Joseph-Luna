 const teamMembers = [
    {name:"Dominic Toreuellas", position:"Web UI", cohort:"WEBPT-5",image:"https://ca.slack-edge.com/T4JUEB3ME-UFCHJST0C-g5cdca5e357a-48"},
    {name:"Ernesto Pena", position:"Web UI", cohort:"WEBPT-5",image:"https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-450w-418179856.jpg"},
    {name:"Joseph Luna", position:"Web UI", cohort:"WEBPT-5",image:"https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-450w-418179856.jpg"},
    {name:"James Wigdor", position:"Front End ", cohort:"WEBPT-5",image:"https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-450w-418179856.jpg"},
    {name:"Reed Turgeon", position:"Front End ", cohort:"WEBPT-5",image:"https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-450w-418179856.jpg"},
    {name:"Noah Stocekel", position:"BackEnd", cohort:"WEBPT-5",image:"https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-450w-418179856.jpg"},
];



class Card{
    constructor(member){
        this.element = document.querySelector(".card-wrapper")
        this.card = document.createElement("div");
        this.nameTitle = document.createElement("h2");
        this.poitionTitle = document.createElement("h3");
        this.cohortTitle = document.createElement("h3");
        this.img = document.createElement("img");
        

        this.nameTitle.textContent = member.name;
        this.poitionTitle.textContent = member.position +" : " + member.cohort ;
        //this.cohortTitle.textContent = member.cohort;
        this.img.src = member.image;
        this.card.appendChild(this.img);
        this.card.appendChild(this.nameTitle);
        this.card.className = "card-view";
        this.card.appendChild(this.poitionTitle);
        this.card.appendChild(this.cohortTitle);
        this.element.appendChild(this.card)
       
    }

}


teamMembers.forEach(member => new Card(member))
TweenMax.staggerFrom(".card-view",0.5,{opacity:0, y:300,rotation:360, scale:2,delay:0.2},0.2);

