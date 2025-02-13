const greetingFrame = document.getElementById('data')
const overlay = document.getElementById('overlay')
const closePopup = document.getElementById('closePopup')

function createSnowflake() {
	const snowflake = document.createElement('div')
	snowflake.className = 'snowflake'
	snowflake.style.width = `${Math.random() * 5}px`
	snowflake.style.height = snowflake.style.width
	snowflake.style.left = `${Math.random() * 100}%`
	snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`
	snowflake.style.animationDelay = `${Math.random() * 5}s`
	document.querySelector('.snowflakes-container').appendChild(snowflake)

	snowflake.addEventListener('animationend', () => {
		document.querySelector('.snowflakes-container').removeChild(snowflake)
	})
}

setInterval(createSnowflake, 800)

greetingFrame.addEventListener('click', () => {
	overlay.style.display = 'block'
})

closePopup.addEventListener('click', () => {
	overlay.style.display = 'none'
})

window.addEventListener('click', event => {
	if (event.target === overlay) {
		overlay.style.display = 'none'
	}
})
