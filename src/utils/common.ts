import router from '@/router'

export function useCommon () {
  /**
     *
     * @param path 路由跳转
     */
  const jumpTo = (path:string) => {
    router.push({ path })
  }

  return { jumpTo }
}
