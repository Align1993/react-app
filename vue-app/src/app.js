Vue.component('li-item', {
  template: '<li>li-item component</li>'
})

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    title: '页面加载于' + new Date().toLocaleString(),
    seen: true,
    count: 0,
    fontSize: '34px',
    styles: {color: 'blue', fontSize: '55px'},
    pink: 'static',
    active: 'active',
    styleObject: {
       fontSize: '18px',
       color: 'yellow'
    },
    isActive: true,
    hasError: false,
    msg: '',
    rawHtml: '<span style="color: red"> red</span>',
    list: [
    {name: 'coco', sex: 'women'},
    {name: 'jack', sex: 'man'}
    ]
  },
   methods: {
    say: function () {
      this.message = this.message.split('').reverse().join('');
    }
  },
  computed: { // 基于所依赖的数据项来缓存
    reverseMessage: function () {
      return this.message.split('').reverse().join('');
    },
    classObject: function() {
      return {
        active: this.isActive && !this.hasError
      }
    }
  },
  watch: {
     count: function() {
        return alert("您点击了" +this.count+ '次');
     }
  }
})
