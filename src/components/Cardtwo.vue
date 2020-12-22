<template>
    <div class="cardTwo">
        <div class="allcards">
            <div class="card-twos" v-for="(post,index) in posts.slice(5)" :key="index">
                <router-link :to='{name:"Detail",params:{id:post.id-5}}'><div class="cards">
                  
                        <div class="number-blog
                        ">
                        <span class="fw-bold h1">{{getIndex(index+1)}}</span>
                        </div>
                    <div class="bodycard">
                        <div class="usrs">

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdc_pViMeba37-qxWAWLBm1Bn5XeQWZoadWA&usqp=CAU" alt="img not found">
                            
                            <h5 class="" >{{getUser(index)}}</h5>
                        </div>
                        <h4>{{post.title}}</h4>
                    </div>
                </div></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:"Cardtwo",
        data(){
            return{
                
            }
        },
        
        

        computed:{
            // get data from store state
            ...mapState(['posts','users']),
        },
        methods:{
            // post number
            getIndex(value){
                return value < 10 ? '0'+value:value
            },

            // users loop for 100 posts
            getUser(index){                
              let newIndex = parseInt((''+index).split('').slice(1).join(''))
              return index < 10 ? this.users[index].name: this.users[newIndex].name
                
            }
        }
        
        
    }
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables/_variables";
.cardTwo{
    
    margin-top: 2rem;
    a{
        text-decoration: none;
    }
    .allcards{
        display: grid;
        grid-template-columns: repeat(3,25%);
        justify-content: center;
        grid-gap: 4rem;

        .card-twos{
            
            .cards{
                display: grid;
                grid-template-columns: 20% 80%;

                .number-blog
                {
                    display: flex;
                    width: 100%;
                    justify-content: space-evenly;
                    align-items: center;
                }
                .usrs{
                    display: flex;
                    
                    img{
                       border-radius:100%; 
                       border: 1px solid $black ; 
                       width:32px; 
                       height: 32px;
                       margin-right: 1rem;
                    }
                    }

                    .number-blog{
                        align-items: flex-start;
                        span{
                            color: grey;
                        }
                    }
            }
        }
    }
}

</style>