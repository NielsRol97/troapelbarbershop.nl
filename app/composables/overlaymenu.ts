import { ref, watchEffect, onMounted, onUnmounted } from 'vue'

export const useOverlayMenu = () => {
  const isOpen = ref(false)

  const open = () => {
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
  }

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  /* Body scroll lock */
onMounted(() => {
  watchEffect(() => {
    document.body.style.overflow = isOpen.value ? 'hidden' : ''
  })
})



  /* ESC to close */
  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen.value) {
      close()
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', onKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown)
  })

  return {
    isOpen,
    open,
    close,
    toggle,
  }
}
