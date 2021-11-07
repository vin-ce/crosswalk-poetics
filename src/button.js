import "./styles/button.styl"
import { addLive, addPoemStatus, fetchPoemStatus } from './firebase'

if (window.location.pathname === "/button/" || window.location.pathname === "/button") {
  loadButton()
}

function loadButton () {

  const buttonEl = document.querySelector('.buttonImage')
  buttonEl.addEventListener('click', async () => {

    const latestStatus = await fetchPoemStatus()

    if (!latestStatus) {
      console.log('false', latestStatus)
      addPoemStatus(true)
    }

  })

}