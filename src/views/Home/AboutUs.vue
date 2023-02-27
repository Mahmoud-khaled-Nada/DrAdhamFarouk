<template>
  <div class="main">
    <div class="one">
      <div class="card-1 card-cation"></div>
      <div class="card-2 card-cation"></div>
    </div>
    <div class="two">
      <div class="card-3 card-cation"></div>
      <div class="card-4 card-cation"></div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.main {
  position: relative;
  padding: 0;
}

.one {
  widows: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-1 {
  width: 50%;
  background-image: url("../../assets/dd.webp");
  background-size: cover;
  height: 200px;
  margin: 20px;
  border-radius: 40px 40px 5px 40px;
  box-shadow: 3px 5px 12px 0px rgb(92 92 92 / 75%);
  -webkit-box-shadow: 3px 5px 12px 0px rgb(92 92 92 / 75%);
  -moz-box-shadow: 3px 5px 12px 0px rgba(92, 92, 92, 0.75);
}

.card-2 {
  width: 50%;
  background-image: url("../../assets/imagesd.jpeg");
  background-size: cover;
  height: 200px;
  margin: 20px;
  border-radius: 40px 40px 40px 5px;
  box-shadow: 3px 5px 12px 0px rgb(92 92 92 / 75%);
  -webkit-box-shadow: 3px 5px 12px 0px rgb(92 92 92 / 75%);
  -moz-box-shadow: 3px 5px 12px 0px rgba(92, 92, 92, 0.75);
}

.two {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-3 {
  width: 50%;
  background-image: url("../../assets/imagesf.jpeg");
  background-size: cover;
  height: 200px;
  margin: 20px;
  border-radius: 40px 5px 40px 40px;
  box-shadow: 3px 5px 12px 0px rgb(92 92 92 / 75%);
  -webkit-box-shadow: 3px 5px 12px 0px rgb(92 92 92 / 75%);
  -moz-box-shadow: 3px 5px 12px 0px rgba(92, 92, 92, 0.75);
}

.card-4 {
  width: 50%;
  background-image: url("../../assets/images.jpeg");
  background-size: cover;
  height: 200px;
  margin: 20px;
  border-radius: 5px 40px 40px 40px;
  box-shadow: 3px 5px 12px 0px rgb(92 92 92 / 75%);
  -webkit-box-shadow: 3px 5px 12px 0px rgb(92 92 92 / 75%);
  -moz-box-shadow: 3px 5px 12px 0px rgba(92, 92, 92, 0.75);
}
.card-cation:hover {
  transform: scale(1.1);
}

.card-cation::before {
  content: "";
  position: absolute;
  width: 210px;
  height: 210px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 15px solid var(--main-color-1);
  z-index: -1;
  opacity: 0.07;
  transition: 0.5s;
}


</style>
