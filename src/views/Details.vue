<template>
<div>

  <div class="about" v-if="showModalDelete === false && showModalUpdate === false">
    <h1>Details post</h1>
    <hr>
    <div class="container">
      <h3>Post Title:</h3>
      <p>{{title}}</p>
      <hr>
      <h3>Post Body:</h3>
      <p>{{body}}</p>
      <hr>
    <button class="btn btn-success " @click="showModalUpdate = !showModalUpdate">Update</button> 
    <button class="btn btn-danger " @click="showModalDelete = !showModalDelete" >Delete</button> 
    </div>
    



  </div>
  <div class="w-80" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="showModalDelete">
  <div class="modal-dialog" >
    <div class="modal-content ">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Are you sure?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="showModalDelete = false"></button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="showModalDelete = false">Back</button>
        <button type="button" class="btn btn-danger" @click="deleteData">Delete</button>
      </div>   
  </div>
  </div>
</div>


<!-- Update -->
  <div class="w-80" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="showModalUpdate">
  <div class="modal-dialog" >
    <div class="modal-content ">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Informations</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="showModalUpdate
 = false"></button>
      </div>
      <div class="modal-body">
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Title</label>
    <input type="text" class="form-control" id="exampleInputTitle" v-model="title" >
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Body:</label>
    <textarea class="form-control" aria-label="With textarea" v-model="body"></textarea>
  </div>
  <button type="submit" class="btn btn-primary" @click="submit">Submit</button>
</form>

      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="showModalUpdate
 = false">Back</button>
      </div>   
  </div>
  </div>
</div>
</div>
</template>


<script>

  export default {
    title:"Details",
    comments:{},
    data(){
      return{
        
        title:"",
        body:"",
        showModalDelete:false,
        showModalUpdate:false,
      }
    },
    created(){
     fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
     .then(res => res.json())
     .then(data => {       
       window.localStorage.setItem('title',data.title)
       window.localStorage.setItem('body',data.body)
     })
     .catch(err => console.log(err))
      
    },
    mounted(){
      if(localStorage.title){
        this.title = localStorage.title
      }
      if(localStorage.body){
        this.body = localStorage.body
      }
    },
    methods:{
      submit(){
        localStorage.setItem('title',this.title)
        localStorage.setItem('body',this.body)
        // this.postById.title = localStorage.title        
        // this.postById.body = localStorage.body        
        this.showModalUpdate = false; 
      },
      deleteData(){
        localStorage.removeItem('title')
          localStorage.removeItem('body')
        this.showModalDelete = false; 
      }
    }
    



  }
</script>

<style lang="scss" scoped>
button{
  margin:2rem 1rem;
}
</style>
