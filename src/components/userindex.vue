<template>
  <div>
<v-text-field
v-model="user.name"
>

</v-text-field>

<v-btn  @click="changeuser">
수정 완료
</v-btn>













    
  </div>
</template>



<script>
import { eventbus } from "../main"



export default {

  props: ['name'],


  data () {
    return {
      user: {}
    }
  },

  created() {
   this.user.name = this.name   
  },

  methods: {
    changeuser() {
     this.$emit("change", this.user)
    //  eventbus.$emit("edit", new Date())
    eventbus.edit(new Date())
    }
  },
  





















}
</script>

