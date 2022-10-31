const bio = document.getElementById('text')
const img = document.getElementById('img')
const role = document.getElementById('profission')
const name = document.getElementById('name')

const person1 = document.getElementById('person1')
const person2 = document.getElementById('person2')
const person3 = document.getElementById('person3')
const person4 = document.getElementById('person4')

person1.classList.add('person1')

person1.onclick = ()=>{
    person1.classList.add('person1')
    person2.classList.remove('person2')
    person3.classList.remove('person3')
    person4.classList.remove('person4')
    
    async function changeName(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const name = data.crew[0].name
        name.innerText = name.toUpperCase()
    }
        changeName()
    
    async function changeImg(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const image = data.crew[0].images.png
        img.src = image
    }
    changeImg()

    async function changeBio(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const txt = data.crew[0].bio
        bio.innerText = txt
    }
    changeBio()    

    async function changeRole(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const profission = data.crew[0].role
        role.innerText = profission.toUpperCase()
    }
    changeRole()
}

person2.onclick = ()=>{
    person1.classList.remove('person1')
    person2.classList.add('person2')
    person3.classList.remove('person3')
    person4.classList.remove('person4')
    
    async function changeName(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const name = data.crew[1].name
        name.innerText = name.toUpperCase()
    }
        changeName()
    
    async function changeImg(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const image = data.crew[1].images.png
        img.src = image
    }
    changeImg()

    async function changeBio(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const txt = data.crew[1].bio
        bio.innerText = txt
    }
    changeBio()    

    async function changeRole(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const profission = data.crew[1].role
        role.innerText = profission.toUpperCase()

    }
    changeRole()
}

person3.onclick = ()=>{
    person1.classList.remove('person1')
    person2.classList.remove('person2')
    person3.classList.add('person3')
    person4.classList.remove('person4')
    
    async function changeName(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const name = data.crew[2].name
        name.innerText = name.toUpperCase()
    }
        changeName()
    
    async function changeImg(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const image = data.crew[2].images.png
        img.src = image
    }
    changeImg()

    async function changeBio(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const txt = data.crew[2].bio
        bio.innerText = txt
    }
    changeBio()    

    async function changeRole(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const profission = data.crew[2].role
        role.innerText = profission.toUpperCase()

    }
    changeRole()
}

person4.onclick = ()=>{
    person1.classList.remove('person1')
    person2.classList.remove('person2')
    person3.classList.remove('person3')
    person4.classList.add('person4')
    
    async function changeName(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const name = data.crew[3].name
        name.innerText = name.toUpperCase()
    }
        changeName()
    
    async function changeImg(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const image = data.crew[3].images.png
        img.src = image
    }
    changeImg()

    async function changeBio(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const txt = data.crew[3].bio
        bio.innerText = txt
    }
    changeBio()    

    async function changeRole(){
        const res = await fetch('../../data.json')
        const data = await res.json()
        const profission = data.crew[3].role
        role.innerText = profission.toUpperCase()

    }
    changeRole()
}