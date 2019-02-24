import './app.scss'

const button = document.createElement("button")
button.textContent = 'Open chat'
document.body.appendChild(button)

button.onclick = () => {
 console.log('working')
}
if (module.hot) {
    module.hot.accept()
}