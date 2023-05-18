const users=[
    {
        id:1, 
        username:"Ali",
        img:'ali',
        job:'developer'
    },
    {
        id:2,
        username:'bedbext_developer',
        img:'bedbext_developer',
        job:'test2',
    },
    {
        id:3,
        username:'duman',
        img:'duman',
        job:'test3',
    },
    {
        id:4,
        username:'js_oyrenen_shexs',
        img:'js_oyrenen_shexs',
        job:'test4',
    },
    {
        id:5,
        username:'qarli_daglar',
        img:'qarli_daglar',
        job:'test5',
    },
    {
        id:6,
        username:'qoca_cinar',
        img:'qoca_cinar',
        job:'test6',
    },
    {
        id:7,
        username:'visselka',
        img:'visselka',
        job:'test7',
    },
    {
        id:8,
        username:'novxani',
        img:'novxani',
        job:'test8',
    },
]
const root=document.getElementById('root')
const cards = document.createElement("div")
root.append(cards)
cards.classList.add("cards")

users.forEach((user)=>{
    const card = document.createElement("div")
    card.classList.add("card")
    cards.append(card)
    card.innerHTML = 
    `<img src=img/${user.img}.jpg alt=""> 
     <h3>${user.username}</h3> <p>${user.job}</p>`
})
console.log();