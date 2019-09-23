<template>
  <div class="portrait">
    <div class="heartItems item">
      <div class="item">{{iHeart}}</div>
      <div class="item"><span
          v-for="(item, key) in heartItems"
          :key="key"
        >
          {{item}}<hr class="seperator" />
        </span>
      </div>
    </div>
    <img
      class="item"
      :src="picture"
    >
  </div>
</template>

<script>
export default {
  name: 'Portrait',
  props: {
    picture: {
      type: String,
      required: true
    },
    iHeart: {
      type: String,
      required: false,
      default: "I ❤️"
    },
    heartItems: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.seperator {
  width: 15%;
}

.portrait {
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
}

.portrait img {
  width: 10em;
  border: 0.3em solid black;
  transform: rotate(2deg);
  box-shadow: 5px 10px #888888;
  position: relative;
}

.heartItems {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  word-wrap: none;
}
</style>
