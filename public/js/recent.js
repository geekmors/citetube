var app = new Vue({
    el: '#recent',
    data: {
        recent: Data.get('recent') || [],
        ksort:'old'
    },
    methods:{
        clearAll(){
            Data.set('recent',[])
            this.recent = []
        },
        sortRecent(){
            if(this.ksort == 'old'){
                this.ksort = 'new'
                this.recent = this.recent.sort((a,b)=> new Date(b.timestamp) - new Date(a.timestamp)) 
            }
            else{
                this.ksort = 'old'
                this.recent = this.recent.sort((a,b)=> new Date(a.timestamp) - new Date(b.timestamp))
            }
        }
    }
  })