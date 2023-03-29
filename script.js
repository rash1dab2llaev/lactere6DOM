/* let container = document.querySelector('.container')
let h1 = document.createElement('h1')
let btn = document.createElement('button')

h1.innerHTML = 'hello'
btn.innerHTML = 'submit'

container.appendChild(h1)
container.appendChild(btn)

btn.onclick = () => {
    container.classList.toggle('addAndRemove')
}
 */


let container = document.querySelector('.container')
let creatSecondDiv = document.createElement('div')

container.appendChild(creatSecondDiv)

let person = [
    {
        'name': 'Rashid',
        'soreName': 'Abdullaev',
        'age': 21,
        'course': 3
    },
    {
        'name': 'Rashid',
        'soreName': 'Abdullaev',
        'age': 20,
        'course': 2
    }
]
function getName() {
    person.forEach(elem => {
       console.log(elem.name);
    });
}
getName()






