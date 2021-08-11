const accordion = document.querySelector('.accordion')

/* when click anywhere of accordion, open the hidden part */

// accordion.addEventListener('click', function(e) {
//   console.log(e.target)
//   const targetEl = e.target.closest('.item')

//   console.log(targetEl)
//   if (!targetEl) return
 
//   targetEl.classList.toggle('open')
// })


/* when click anywhere of arrow icon, open the hidden part */

const arrows = [...document.querySelectorAll('.chevron-down')]

accordion.addEventListener('click', function(e) {

  if (!arrows.includes(e.target)) return

  const targetEl = e.target.closest('.item')

  if (!targetEl) return
 
  targetEl.classList.toggle('open')
})


/* same to above, but set eventListener on each element */

// const arrows = [...document.querySelectorAll('.chevron-down')]

// arrows.forEach((arrow) => {
//   arrow.addEventListener('click', function(e) {
//     console.log(e.target)
//     const targetEl = e.target.closest('.item')
    
//     if (!targetEl) return

//     targetEl.classList.toggle('open')
//   })
// })