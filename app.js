

//DOM
const imgEL = document.querySelector('.dog-img')
const button = document.querySelector('button')

const breads = document.getElementById('breads')

const base_url = 'https://dog.ceo/api'

const api = {
    list_all_bredes: '/breeds/list/all',
    by_breed: '/breed/'
}

button.onclick = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
            return response.json()
        })
        .then((dog) => {
            button.innerText = 'кутуптур ж...'
            console.log(dog);
            imgEL.src = dog.message
            alert('макулсунбу ')
        })
}

function getAllDogBreads() {
    fetch(base_url + api.list_all_bredes)
        .then((res) => res.json())
        .then((all_bredes) => {
            console.log(all_bredes)
            const breadList = Object.keys(all_bredes.message);
            console.log(breadList);
            breads.innerHTML = breadList.map(name => {
                return `<button>${name}</button>`
            }).join('')

            document.querySelectorAll('#breads button')
                .forEach(btn => {
                    btn.onclick = () => {
                        let url = btn.innerText + '/images/random/1'
                        console.log(btn.innerText);
                        button.innerText = 'Loading.....'
                        fetch(base_url + api.by_breed + url)
                            .then((response) => {
                                return response.json()
                            })
                            .then((dog) => {
                                button.innerText = 'кутуптур ж...'
                                console.log(dog);
                                imgEL.src = dog.message
                                alert('макулсунбу ')
                            })
                    }
                })

        })
}




getAllDogBreads()





