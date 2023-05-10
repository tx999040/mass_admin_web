    


Vue.directive('numeral', {
  bind: function (el: { hasChildNodes: () => any; getElementsByTagName: (arg0: string) => any[]; addEventListener: (arg0: string, arg1: (e: any) => void) => void },
    binding: { value: any; arg: any }) {
      // 找到绑定元素下的input元素
      const input = el.hasChildNodes() ? el.getElementsByTagName('input')[0] : el
      const { value: fn, arg } = binding
      if (typeof fn !== 'function') {
        return console.error(
          'The value of directive "v-numeral" must be a function!'
        )
      }
      el.addEventListener('change', function(e) {
        let value = e.target.value
  
        let float = parseFloat(value)
        if (isNaN(float)) {
          fn('')
          return
        }
        numeralHandlers.adapt(arg, float, fn)
      })
    }
  })
  
  