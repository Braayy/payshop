<template>
<div class='about'>
  <div class='text center'>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi ea eligendi est illo ipsa, iste natus nobis non obcaecati officia, placeat quidem reiciendis sapiente tenetur totam vero. Corporis, cumque!</p>
  </div>
  <div class='image'>
    <!--<img src='../assets/home.jpg' />-->
    <img src='https://via.placeholder.com/400'>
    <img src='https://via.placeholder.com/400'>
    <img src='https://via.placeholder.com/400'>
  </div>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About'
});
</script>

<style lang='scss' scoped>
.about {
  width: 80%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  .text {
    width: 50%;
    font-size: 30px;
    text-align: center;
  }

  .image {
    width: 50%;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

    img {
      width: 400px;
      border-radius: 10px;
      margin-bottom: 40px;
    }
  }
}
</style>
