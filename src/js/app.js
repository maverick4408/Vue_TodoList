//src/js/app.js

import Vue from 'vue'

// new Vue({
//   el: '#maap1',
//   data: {
//     task: 'Todo Here',
//     isDone: false,
//     classObject: {
//       active: true,
//       // 'text-danger': true,
//       origin: false
//     }
//   },
//   methods: {
//     changeIsDone: function () {
//       this.isDone = !this.isDone;
//       // jQueryのように「書き換え先のDOMを取得する」「値を取得する」「DOMを書き換える」というコードを書く必要がなくなる！
//       // this.classObject = !this.classObject;
//     }
//   }
// })

new Vue ({
  el: '#addTask',
  data:{
    todos: [{text:'a',isDone:false},{text:'B', isDone: false}],
    newTask:''
  },
  methods: {
    addTodo: function(){

    },
    addTask: function () {
      this.todos.push({
        text:this.newTask,
        isDone: false
      })
      this.newTask=''
    }
  }
})

Vue.component('todo_task', {
  props: ['post','title','text'],
  data: function(){
      return {
        id: 0
      }
  },
  template: `
      <div :class="{ origin: post.isDone }">{{ title }}
        <div></div>
<!--        <i @click="post.changeIsDone()" class="far fa-square" v-if="!post.isDone"></i>-->
        <span>id:{{ post.id }} </span>
        <i @click="$emit('change')" class="far fa-square" v-if="!post.isDone"></i>
        <i @click="$emit('change')" class="far fa-check-square" v-if="post.isDone"></i>
        <span>{{ post.task }}</span>
        <i @click="$emit('trash_task')" class="fas fa-trash"></i>
<!--        <i @click="id++" class="far fa-square"> {{ id }}</i>-->
<!--        <i @click="$emit('back_number')" class="far fa-check-square"></i>-->
<!--        <div>{{ post }}</div>-->
<!--        <i @click="id" class="fas fa-feather-alt"></i>-->
      </div>
  `
})

new Vue ({
  el: '#appTodoTasks',
  data: {
    posts:[{id:0, isDone: false, task: "jjjjj"},{id:1, isDone: true , task: "task2"}],
    // postFontSize: 'abc'
  },
  computed: {
    computedTodos: function(){
      return this.posts
    }
  },
  methods: {
    changeIsDone: function(post,index){
      console.log('this', this)
      console.log('index', index)
      console.log('this.posts', this.posts)
      console.log('post', post)
      console.log('post.isDone', post.isDone)
      // console.log(this.posts[0].id)

      this.posts[index].isDone= !this.posts[index].isDone
      this.task = "SS"
      this.isDone = !this.isDone
    },
    backNumber: function(post){
      console.log('bbb')
      console.log('post', post)
      return post
    },
    insertTask: function(){
      this.tasks.push({
      })
    },
    trashTask: function () {

    }
  }
})

Vue.component('test_task', {
  props:['item'],
  template:`
      <div>a{{ item }}</div>
  `
})
//
// new Vue({
//   el:'#dapp',
//   data:{
//     items:["item1","item2","item3"]
//   },
//   methods: {
//     edit(index){
//       console.log('index', index)
//     }
//   }
// })

//
// import Vue from 'vue'
// //=======================================
// // Vue.jsの特徴
// //=======================================
// // 1. ドキュメントが日本語で整理されていて見やすい
// // 2. React.jsよりも高速
// // 3. 双方向データバインディングで、書くコードが少なくなる
// // 4. 細かなアニメーションにも対応
//
// new Vue({
//   el: '#maap1',
//   data: {
//     warcry: 'ウォークライ'
//   }
// })
//
// new Vue ({
//   el: "#maap-a",
//   data: {
//     title2 : 'ざまぁwwww'
//   }
// })
//
// new Vue({
//   el:'#maap2',
//   data: {
//     donkey: 'donkeyでーす',
//     classObject: {
//       'tekido': true
//     },
//     classObject2 : {
//       'danger-zone': true
//     }
//   }
// })
//
// new Vue ({
//   el:'#maap3',
//   data: {
//     message: '見えるか？',
//     isShow: true
//   }
// })
//
// new Vue({
//   el:'#maap4',
//   data: {
//     pilot: [
//       {text: 'ordley'},
//       {text: 'wattz'},
//       {text: 'banage'}
//     ]
//   }
// })
//
// new Vue ({
//   el:"#maap-b",
//   data: {
//     piyo: 'piyoっと飛び出る',
//     message: 'カモンなう'
//   }
// })
//
// new Vue ({
//   el:"#maap5",
//   data:{
//     ms: 'ゼータガンダム'
//   },
//   methods: {
//     tranceForm: function(){
//     this.ms = this.ms + 'ウェイブライダー形態'
//     }
//   }
// })
//
// new Vue({
//   el: '#maap6',
//   data: {
//     message: 'データ バインバインディング 双方向　おっぱい'
//   }
// })
//
//
//
// // Vueの基本の書き方
// new Vue({ // Vueインスタンス生成
//   el: '#app1', // elでスコープを指定
//   data: { // dataの中にプロパティを定義しておけば、vueの中で保持して使いまわせる。今回はテンプレートに表示している。
//     message: 'vueのテンプレートの構文。{{}}で囲って処理が書ける。'
//   }
// })
//
// // v-bindをつかった属性のバインド　// v-bindは:という省略記号で書ける
// new Vue({
//   el: '#app2',
//   data: {
//     message: 'このページをロードしたのは ' + new Date().toLocaleString(),
//     classObject: {
//       active: true,
//       'text-danger': true
//     }
//   }
// })
//
// // v-ifで条件分岐と表示・非表示切り替え
// new Vue({
//   el: '#app3',
//   data: {
//     isShow: true
//   }
// })
//
// // v-forでループ
// new Vue({
//   el: '#app4',
//   data: {
//     todos: [
//       { text: 'v-forを使うと' },
//       { text: 'こうやってデータやhtmlをループして' },
//       { text: '生成できる' }
//     ]
//   }
// })
//
// // v-onを使ってユーザーからのイベントを発火させる　// v-onは@という省略記号で書ける
// new Vue({
//   el: '#app5',
//   data: {
//     message: 'Hello Vue.js!'
//   },
//   methods: {
//     changeMessage: function () {
//       this.message = this.message + 'を変えちゃった！'
//       // jQueryのように「書き換え先のDOMを取得する」「値を取得する」「DOMを書き換える」というコードを書く必要がなくなる！
//     }
//   }
// })
//
// // v-modelで双方向データバインディング
// new Vue({
//   el: '#app6',
//   data: {
//     message: 'これが、双方向データバインディング' // 入力された内容が自動でデータへ更新され、データが更新されると自動で出力内容も変わる。
//   }
// })
//
// Vue.config.devtools =true;
