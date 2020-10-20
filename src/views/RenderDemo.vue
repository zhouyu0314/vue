<template>
    <div id="app">
        <input type="radio" value="1"  v-model.number="selectlevel" name="bigsize"/>1
        <input type="radio" value="2"  v-model.number="selectlevel" name="bigsize"/>2
        <input type="radio" value="3"  v-model.number="selectlevel" name="bigsize"/>3
        <input type="radio" value="4"  v-model.number="selectlevel" name="bigsize"/>4
        <input type="radio" value="5"  v-model.number="selectlevel" name="bigsize"/>5
        <input type="radio" value="6"  v-model.number="selectlevel" name="bigsize"/>6
        <br>
        内容大小:
        {{ selectlevel }}
        <render-sub :level="selectlevel">
            balabala...balabala...balabala...balabala...balabala...
            balabala...balabala...balabala...balabala...balabala...
            balabala...balabala...balabala...balabala...balabala...
            balabala...balabala...balabala...balabala...balabala...
            balabala...balabala...balabala...balabala...balabala...
            balabala...balabala...balabala...balabala...balabala...
        </render-sub>


    </div>
</template>

<script>
   import RenderSub from "../components/RenderSub";
    export default {
        data (){
            return {
                selectlevel : 1
            }
        },
        components:{
            RenderSub
        }
    };
</script>