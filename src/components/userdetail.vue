<template>
  <div>
done

{{ name }}
{{ sayhello }}

{{ editeddate }}










    
  </div>
</template>


<script>
import { eventbus } from '../main'


export default {
  props: ['name'],


  data () {
    return {
      editeddate: null
    }
  },
  computed: {
    sayhello () {
      return this.name + '안녕하세요'
    }
  },
  created() {
    eventbus.$on('edit', date => {
      this.editeddate = date
    })
  },
  


}





</script>

