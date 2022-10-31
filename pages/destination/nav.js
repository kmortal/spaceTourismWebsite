const img = document.getElementsByTagName('img')
const title = document.querySelector('main h1')
const text = document.querySelector('main p')
const distance = document.getElementById('distance')
const travel = document.getElementById('travel')


const moon = document.getElementById('moon')
moon.classList.toggle('moon')
moon.onclick = () =>{
    moon.classList.add('moon')
    mars.classList.remove('mars')
    europa.classList.remove('europa')
    titan.classList.remove('titan')
    
    async function changeName(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const name = data.destinations[0].name
        title.innerText = name.toUpperCase()
    }
        changeName()
    
    async function changeImg(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const image = data.destinations[0].images.png
        img[0].src = image
    }
    changeImg()

    async function changeText(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const txt = data.destinations[0].description
        text.innerText = txt
    }
    changeText()    

    async function changeFooter(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const distanceAPI = data.destinations[0].distance
        distance.innerText = distanceAPI.toUpperCase()
        const travelAPI = data.destinations[0].travel
        travel.innerText = travelAPI.toUpperCase()
    }
    changeFooter()
}



const mars = document.getElementById('mars')
mars.onclick = () =>{
    moon.classList.remove('moon')
    mars.classList.add('mars')
    europa.classList.remove('europa')
    titan.classList.remove('titan')

    async function changeName(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const name = data.destinations[1].name
        title.innerText = name.toUpperCase()
    }
        changeName()
    
    async function changeImg(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const image = data.destinations[1].images.png
        img[0].src = image
    }
    changeImg()

    async function changeText(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const txt = data.destinations[1].description
        text.innerText = txt
    }
    changeText()    

    async function changeFooter(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const distanceAPI = data.destinations[1].distance
        distance.innerText = distanceAPI.toUpperCase()
        const travelAPI = data.destinations[1].travel
        travel.innerText = travelAPI.toUpperCase()
    }
    changeFooter()
}

const europa = document.getElementById('europa')
europa.onclick = () =>{
    moon.classList.remove('moon')
    mars.classList.remove('mars')
    europa.classList.add('europa')
    titan.classList.remove('titan')

    async function changeName(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const name = data.destinations[2].name
        title.innerText = name.toUpperCase()
    }
        changeName()
    
    async function changeImg(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const image = data.destinations[2].images.png
        img[0].src = image
    }
    changeImg()

    async function changeText(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const txt = data.destinations[2].description
        text.innerText = txt
    }
    changeText()    

    async function changeFooter(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const distanceAPI = data.destinations[2].distance
        distance.innerText = distanceAPI.toUpperCase()
        const travelAPI = data.destinations[2].travel
        travel.innerText = travelAPI.toUpperCase()
    }
    changeFooter()
}



const titan = document.getElementById('titan')
titan.onclick = () =>{
    moon.classList.remove('moon')
    mars.classList.remove('mars')
    europa.classList.remove('europa')
    titan.classList.add('titan')

    async function changeName(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const name = data.destinations[3].name
        title.innerText = name.toUpperCase()
    }
        changeName()
    
    async function changeImg(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const image = data.destinations[3].images.png
        img[0].src = image
    }
    changeImg()

    async function changeText(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const txt = data.destinations[3].description
        text.innerText = txt
    }
    changeText()    

    async function changeFooter(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const distanceAPI = data.destinations[3].distance
        distance.innerText = distanceAPI.toUpperCase()
        const travelAPI = data.destinations[3].travel
        travel.innerText = travelAPI.toUpperCase()
    }
    changeFooter()
}