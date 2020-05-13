var myapp1 = new Vue({
    // マウントする要素
    el: '#myapp1',
    
    // アプリケーションで使用するデータ
    data: {
        myMessage: 'Hello, Vue.js',
        mylist: ['りんご','ばなな','いちご'],

        myformtext: 'ここの文字列が同期',
        mynumber1: 2,
        mynumber2: 3,

        myShowFlag: true,
        myTransition: true,
    },
    
    // アプリケーションで使用するメソッド
    methods: {
        myhandleClick: function(event) {
            alert(event.target)
        },
    },
    
    // 算出プロパティ
    computed: {
            // beforeCreate
            // beforeMount
            // mounted
            // beforeUpdate
            // updated
            // beforeDestroy
            // destroyed
            // errorCaptured
    },
    
    // ライフサイクルフック
    created: function() {
        
    },
})




var myapp2 = new Vue({
    // マウントする要素
    el: '#myapp2',
    
    // アプリケーションで使用するデータ
    data: {
        myMessage: {
            value: 'Hello Vue.js!'
        },
        myList: ['html', 'javascript', 'jquery', 'vuejs'],
        mynum1: 2,
        mynum2: 7,
        myBindValue: 'テキスト文字列',

        myCount: 0,

        myClassObject: {
            myClassName1: true,
            'my-class-name': false,
        },
        myStyleObject: {
            color: 'red',
            backgroundColor: 'lightgray',
        },
        myItem: {
            href: 'https://www.google.com/?hl=ja',
            name: 'myName',
            target: '_blank',
        },

        myRadius: 50,

        myType: 'B',

        myTables: [
            {id: 1, name: 'hoge', score: 100 },
            {id: 2, name: 'fuga', score: 200 },
            {id: 3, name: 'piyo', score: 500 },
        ],
        myGoods: {
            name: '項目名',
            score: 289,            
        },
        myGoodsList: [
            {id: 1, name: 'hoge', score: 100 },
            {id: 2, name: 'fuga', score: 200 },
            {id: 3, name: 'piyo', score: 500 },
        ],

        myHTML: '<strong>fuga</strong>'
    },
    
    // アプリケーションで使用するメソッド
    methods: {
        myIncrement: function() {
            this.myCount += 1
        },

        myAddGoods: function() {
            // IDの最大値を取得
            var max = this.myGoodsList.reduce(function(a,b) {
                return a.id > b.id ? a.id : b.id
            }, 0)
            //push()で配列にデータを追加
            this.myGoodsList.push({
                id: max + 1,
                name: this.myGoods.name,
                score: this.myGoods.score,
            })
        },
        myRemoveGoods: function(index) {
            // spliceで受け取ったindexの位置から1個の要素を削除
            this.myGoodsList.splice(index, 1)
        },
    },
    
    // 算出プロパティ
    computed: {

    },
    
    // ライフサイクルフック
    // created: function() {
    //     axios.get('mylist.json').then(function(response) {
    //         this.myJsonData = response.data
    //     }.bind(this)).catch(function(e) {
    //         console.error(e)
    //     })
    // },
})


var myapp3 = new Vue({
    // マウントする要素
    el: '#myapp3',
    
    // アプリケーションで使用するデータ
    data: {
        myCount: 0,

        myMessage: '',
    },
    
    // アプリケーションで使用するメソッド
    methods: {
        myClick: function() {
            alert('クリックしました')
        },
        
        myHandleInput: function(event) {
            alert('入力した文字は '+event.target.value+' です')
            this.myMessage = event.target.value
        },

        myNestHandler: function(comment) {
            alert(comment+'をクリックしました')
        },
        myclose: function() {
            alert(comment+'をクリックしました')
        },
    },
    
    // 算出プロパティ。関数で処理された結果をデータとして返す
    computed: {
        
    },
    
    // ライフサイクルフック。特定のタイミングで自動的に呼び出される関数
    created: function() {

    },
})