<template>
    <div class="card-one">
        <div class="cards ">
           
               <div class="big-one">
                   <router-link :to='{name:"Detail",params:{id:posts[0].id}}'>
                <img src="data:image/jpeg;base64,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OGPS0Kra1JHMyX8gs6fpNpw6tx+TsvX/AE7gotGS87lp0tgACKsOB1a0XKdxua5+n+nNq1G0qaufkh5ytVdWqq5+ak6V2daODj7Ts+mAkF7bigSAYoEgGKBIBigSAYoEgGKBIBigSAYmRJkiTqWNkSZIkGNkSZIkGNkSZIkGNkSZIkGNkSZIkGNkSZIkGNkSZIkGKRVRfI9DYLT4mzoq5p5L6nnJOV061eGtHtfxXyX7kL12FPNx9q/Xl6EA+FttCWazq7vknqUR9vPiJmch1/WLTefhsyTP10OskxXK5ZXMSaIjIx6lKRWuNkSZIkkljZEmSJBjZEmSJBjZEmSJBjZEmSJBjZEmSJBjZEmSJBjZEmSJBiQZIkJNBkiQNBkiQNBkiQNBkiQNBkiQNBkiQNBkiQNBkiQO+6PasajcevtN5Tt+eh13VLV4i0eyvst8k+qnEp1X03SxYWFT5KTJGKRE6prwxW82aDJEklzQZIkDQZIkDQZIkDQZIkDQZIkDQZIkDQZIkDQZIkCQSDrqgSAKBIAoEgCgSAKBIAoEgCgSAKBIAoEgCgSAKBIAoEgCgSAKBIAoEgCgSAKBIAoEgC8GppygwamnKABPDBqacoMGppygAMMGppygwamnKAAwwamnKDBqacoADDBqacoMGppygAMMGppygwamnKAAwwamnKDBqacoADDBqacoMGppygAMMGppygwamnKAAwwamnKDBqacoADDBqacoMGppygAMMGppygwamnKAAwwamnKDBqacoADDBqacoMGppygAMMGppygwamnKAAwwamnKDBqacoADDBqacoMGppygAMMGppygwamnKAAwwamnKDBqacoADH/2Q==" alt="image not found">
                <h4>{{posts[0].title}}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <span>Read More. 4 min read</span>
                 </router-link>
            </div>
           
            <div class="other-card" v-for="(post,index) in posts.slice(1,5) " :key="index">
                
                    <router-link :to='{name:"Detail",params:{id:post.id}}'>
                        <div class="body-car">
                    <h4>{{titleMore(post.title)}}</h4>
                    <p>{{charMore(post.body)}}</p>
                    <span>Read More. {{index*10+5}} min read</span>
                </div></router-link>
                <div class="picture">
                <img src="data:image/jpeg;base64,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OGPS0Kra1JHMyX8gs6fpNpw6tx+TsvX/AE7gotGS87lp0tgACKsOB1a0XKdxua5+n+nNq1G0qaufkh5ytVdWqq5+ak6V2daODj7Ts+mAkF7bigSAYoEgGKBIBigSAYoEgGKBIBigSAYmRJkiTqWNkSZIkGNkSZIkGNkSZIkGNkSZIkGNkSZIkGNkSZIkGNkSZIkGKRVRfI9DYLT4mzoq5p5L6nnJOV061eGtHtfxXyX7kL12FPNx9q/Xl6EA+FttCWazq7vknqUR9vPiJmch1/WLTefhsyTP10OskxXK5ZXMSaIjIx6lKRWuNkSZIkkljZEmSJBjZEmSJBjZEmSJBjZEmSJBjZEmSJBjZEmSJBjZEmSJBiQZIkJNBkiQNBkiQNBkiQNBkiQNBkiQNBkiQNBkiQNBkiQO+6PasajcevtN5Tt+eh13VLV4i0eyvst8k+qnEp1X03SxYWFT5KTJGKRE6prwxW82aDJEklzQZIkDQZIkDQZIkDQZIkDQZIkDQZIkDQZIkDQZIkCQSDrqgSAKBIAoEgCgSAKBIAoEgCgSAKBIAoEgCgSAKBIAoEgCgSAKBIAoEgCgSAKBIAoEgC8GppygwamnKABPDBqacoMGppygAMMGppygwamnKAAwwamnKDBqacoADDBqacoMGppygAMMGppygwamnKAAwwamnKDBqacoADDBqacoMGppygAMMGppygwamnKAAwwamnKDBqacoADDBqacoMGppygAMMGppygwamnKAAwwamnKDBqacoADDBqacoMGppygAMMGppygwamnKAAwwamnKDBqacoADDBqacoMGppygAMMGppygwamnKAAwwamnKDBqacoADH/2Q==" alt="image not found">
                </div>
            </div>
        </div>
                <div class="users">
            <div class="users-info" v-for="user in users" :key="user">
                <div class="user-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdc_pViMeba37-qxWAWLBm1Bn5XeQWZoadWA&usqp=CAU" alt="">
                </div>
                <div class="user-name">
                    <p>{{userName(user.name)}}</p>
                </div>
            </div>
                </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'Cardone',
        data(){
            return{
                
            }
        },
        // call Action 
        mounted(){
            this.$store.dispatch("loadUser");
            
        },
            // get data
        computed:{
            ...mapState(['posts','users']),
          
        },
        methods:{
            
            charMore(value) {
                return value.length > 20 ? value.substring(0,20) + "..." :value
            },
            titleMore(value){
                return value.length > 30? value.substring(0,30) + "...":value
            },
            userName(value){
                return value.length > 10? value.substring(0,10) + "...":value
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables/_variables";
.card-one{
    width: 100%;
    margin-top: 2rem;
    display: flex;
    border-bottom: 1px solid grey;
    padding-bottom: 1rem;
    .cards
    {
        padding-top: 3rem;
        width: 100%;
        height: 90vh;
        display: grid;
        grid-template-columns: 55% 35%;
        grid-template-rows: repeat(3, 23%);
        grid-gap: 2rem;
        border-right: 1px solid $black;
        a{
            text-decoration: none;
        }
        
        .big-one{
            grid-row-start: 1;
            grid-row-end: 3;
            padding-left: .8rem;
            align-items: center;
            img{
                width:450px ;
                height: 300px;
                margin-bottom:1.5rem;
                
            }
        }

        .other-card{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
            padding-left: .8rem;
            grid-column-start: 2; 
            grid-column-end: 3;


            .body-car{
                display: flex;
                flex-direction: column;
            }
            .picture img{
                width: 125px;
                height: 120px;
            }
        }
        
        
    }
    
}

.users{
     display: grid;
     grid-template-columns: repeat(4,20%);
     grid-template-rows: repeat(2,1fr);
     grid-gap: 1rem;
     height:423px;
     width: 50%;
     flex-grow: 1rem;
    

    .users-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        
    }
    
    .user-img{
        img{
            border-radius:100%;
            border: 1px solid $black;
            width:64px;
            height: 64px;
        }
    }
}

</style>