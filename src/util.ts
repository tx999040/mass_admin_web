interface ITime {
  router?: string[]
  callBack?: any
}

class Time implements ITime {
  public router?: any[]
  public callBack?: any
  constructor(options: ITime) {
    this.router = options.router
    this.callBack = options.callBack
  }
  getAllTag(router: any) {
    const list: any = []
    router.forEach((item: any) => {
      const keys: any = Object.keys(item)
      const isChildIndex = keys.indexOf('children')
      for (let i = 0; i < keys.length; i++) {
        if (isChildIndex > -1 && keys[i] == 'children') {
          const childList = this.getAllTag(item[keys[i]])
          list.push(...childList)
        }
        if (isChildIndex == -1 && keys[i] == 'meta' && !item[keys[i]].hidden) {
          list.push(item[keys[i]].title)
        }
      }
    })
    return list
  }
}
export default Time
