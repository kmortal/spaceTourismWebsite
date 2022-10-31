const title = document.getElementById('name')
const images = document.getElementById('img')
const description = document.getElementById('description')
const tech1 = document.getElementById('tech1')
const tech2 = document.getElementById('tech2')
const tech3 = document.getElementById('tech3')

tech1.classList.add('tech')

tech1.onclick = ()=>{
    tech1.classList.add('tech')
    tech2.classList.remove('tech')
    tech3.classList.remove('tech')
    
    async function changeName(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const name = data.technology[0].name
        title.innerText = name.toUpperCase()
    }
        changeName()
    
    async function changeImg(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const image = data.technology[0].images.portrait
        images.src = image
    }
    changeImg()

    async function changeDescription(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const txt = data.technology[0].description
        description.innerText = txt
    }
    changeDescription()    

}

tech2.onclick = ()=>{
    tech1.classList.remove('tech')
    tech2.classList.add('tech')
    tech3.classList.remove('tech')
    
    async function changeName(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const name = data.technology[1].name
        title.innerText = name.toUpperCase()
    }
        changeName()
    
    async function changeImg(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const image = data.technology[1].images.portrait
        images.src = image
    }
    changeImg()

    async function changeDescription(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const txt = data.technology[1].description
        description.innerText = txt
    }
    changeDescription()    
}

tech3.onclick = ()=>{
    tech1.classList.remove('tech')
    tech2.classList.remove('tech')
    tech3.classList.add('tech')
    
    async function changeName(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const name = data.technology[2].name
        title.innerText = name.toUpperCase()
    }
        changeName()
    
    async function changeImg(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const image = data.technology[2].images.portrait
        images.src = image
    }
    changeImg()

    async function changeDescription(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const txt = data.technology[2].description
        description.innerText = txt
    }
    changeDescription()    

}