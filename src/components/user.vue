<template>
  <div>
hey

{{ $store.state.name }}

{{ hellotomixin }}

<button @click="changename()">
이름 변경
</button>



<userdetail :name="name"></userdetail>


<userindex  :name="name"  

@change="modify"



></userindex>









    
  </div>
</template>
<script>
import userdetail from './userdetail.vue'
import Userindex from './userindex.vue'
import { dateformat } from "../mixins/dateformat"


export default {

  components: { userdetail, Userindex },



  data () {
    return {
     name: '뷰제이에스',
     createdat: null

    }
  },
  computed: {
    hellotomixin() {
      return  this.mixindata + '추천'
     
    }
  },
  methods: {
    changename () {
      this.name = "hoza"
    },
    modify (user) {
      this.name = user.name
    }

  },
  created() {
   this.createdat = new Date()
  },
  mixins: [dateformat]


  }
  






















</script>

