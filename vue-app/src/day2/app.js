Vue.component('click-counter', {
    data: function() {
       return {
         count: 0
       }
    },
    template: '<button @click="count++">你点击了{{count}}次</button>'
})
Vue.component('component-b', {
       props: ['title'],
       template: '<h1>{{title}}</h1>'
    });
var componentA = {
    data: function() {
       return {
          txt: 'text'
       }
    },
    template: '<a href="">{{txt}}</a>'
}
var vm = new Vue({
  el: '#app',
  data: {
   ok: true,
   loginType: 'email',
   obj1: {},
   title: "prop title",
   list: [
     {name: 'coco', sex: 'women'},
     {name: 'jack', sex: 'man'}
   ],
   obj: {
     name: 'cc',
     sex: 'women'
   },
   numbers: [
     1,4,8,9,10
   ]
  },
  components: {
    'component-a': componentA
  },
  methods: {
    changeLoginType: function() {
      if(this.loginType == 'email') {
         this.loginType = 'username'
      } else {
        this.loginType = 'email'
      }
    }
  }, 
  computed: {
     evenNumbers: function () {
       return this.numbers.filter(function(number) {
         return number % 2 === 0;
       })
     }
  }
})

vm.$set(vm.list,0, {name: 'kiko', sex: 'women'})
vm.list.splice(1, 1, {name: 'xiaoming', sex: 'man'});
vm.$set(vm.obj1, 'name', 'miki');
vm.obj['name2'] = 'yoyo';
Object.assign(vm.obj1, {
   age: '18',
   city: 'hangzhou'
})


