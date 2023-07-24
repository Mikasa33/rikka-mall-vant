import storage from '@/utils/storage'

const data = storage.info()

export const useThemeStore = defineStore('theme', () => {
  const [show, toggleShow] = useToggle()

  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  const pageAnimate = ref(data.pageAnimate ?? true)
  function setPageAnimate(val: boolean) {
    pageAnimate.value = val
    storage.set('pageAnimate', val)
  }

  const pageAnimateMode = ref(data.pageAnimateMode || 'fade-slide')
  const pageAnimateModeVal = computed(() => unref(pageAnimate) ? unref(pageAnimateMode) : undefined)
  function setPageAnimateMode(val: string) {
    pageAnimateMode.value = val
    storage.set('pageAnimateMode', val)
  }

  return {
    show,
    toggleShow,
    isDark,
    toggleDark,
    pageAnimate,
    setPageAnimate,
    pageAnimateMode,
    pageAnimateModeVal,
    setPageAnimateMode,
  }
})
