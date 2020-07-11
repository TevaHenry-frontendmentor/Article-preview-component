let isShare = false

const shareContainer = document.querySelector('#share')
const shareBtn = document.querySelector('button')

const handleShare = () => {
  if (!isShare) {
    shareContainer.classList.add('share')
    shareBtn.classList.add('dark')
    isShare = true
  } else {
    shareContainer.classList.remove('share')
    shareBtn.classList.remove('dark')
    isShare = false
  }
}

shareBtn.addEventListener('click', handleShare)