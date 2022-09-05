<template>
  <div id="main" class="flex">
    <div class="generated__container flex">
      <div>
        <h3>Nick Generator by <span class="created"> ToxiCraft </span></h3>
      </div>
      <div class="generated__content flex">
        <div class="generated__right">
          <div class="generated__container__input">
            <label for="select mode">Select mode: </label>
            <select v-model="mode" class="generated__select" name="select mode">
              <option value="gradient">Gradient</option>
              <option value="normal" selected>Normal</option>
            </select>
          </div>
          <div class="generated__container__input">
            <label for="text">Text: </label>
            <input v-model="nameUser" type="text" class="generated__text" />
          </div>
          <div v-if="mode === 'normal'" class="generated__container__input">
            <label for="text">Select Color: </label>
            <div class="generated__content__botton">
              <button
                v-for="({ name, colorClass }, index) in colors"
                :key="index"
                @click="selectColor(name)"
                class="botton__color"
                :style="colorClass"
              >
                {{ name }}
              </button>
            </div>

            <label class="margin-top" for="text">Select text type: </label>
            <div class="generated__content__botton">
              <button
                v-for="({ textClass, name, type }, index) in textType"
                :key="index"
                @click="selectTextType(type)"
                class="botton__text__type"
                :style="textClass"
              >
                {{ name }}
              </button>
            </div>
          </div>
          <div v-else class="generated__container__input">
            <!-- <label for="text">Gradient select: </label>
            <input type="text" class="generated__text" /> -->
            <p class="coming__soon">Proximamente...</p>
          </div>
        </div>
        <div class="generated__left">
          <div class="left__content">
            <label for="preview">Preview: </label>
            <p class="preview">{{ nameUser }}</p>
          </div>
          <div class="left__content">
            <label for="code">Code: </label>
            <textarea readonly v-model="codePreview" class="left__textarea"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useApp from "@/composables/useApp";
import { ref, watch } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    const mode = ref("normal");
    const {
      colors,
      textType,
      code,
      nameUser,
      codePreview,
      selectColor,
      selectTextType,
    } = useApp();
    watch(nameUser, (newValue, oldValue) => {
      console.log('newValue', newValue)
      console.log('oldValue', oldValue)
      if (newValue) {
        // console.log(`${codePreview.value.concat(newValue)}`);
        return codePreview.value += newValue 
      }
    }, { deep: true });
    return {
      mode,
      nameUser,
      code,
      colors,
      textType,
      codePreview,
      selectColor,
      selectTextType,
    };
  },
};
</script>

<style scoped>
/* globar class */

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Class utils */

.created {
  color: greenyellow;
}

.coming__soon {
  font-size: 30px;
}

#main {
  width: 100vw;
  height: 100vh;
}

/* Class Container */

.generated__container {
  width: 74%;
  height: 95%;
  flex-direction: column;
}

.generated__content {
  width: 100%;
  height: 95%;
  flex-direction: row;
}

.generated__right,
.generated__left {
  width: 50%;
  height: 100%;
}

/* Class container right */

.generated__container__input {
  width: 80%;
  margin: 20px;
  display: flex;
  flex-direction: column;
}

.generated__select,
.generated__text {
  height: 35px;
}

.generated__content__botton {
  margin: 3px 0 0 0;
}

.margin-top {
  margin: 20px 0 0 0;
}

.botton__color,
.botton__text__type {
  background-color: white;
  border: 1px black solid;
  width: 30px;
  height: 30px;
  margin: 0 5px 5px 0;
  cursor: pointer;
}

.botton__text__type {
  width: 100px;
}

/* Class left */

.left__content {
  width: 90%;
  margin: 20px;
  display: flex;
  flex-direction: column;
}

.left__content:nth-child(2) {
  height: 49%;
}

.preview {
  font-size: 25px;
  margin: 5px 0 0 0;
}

.left__textarea {
  height: 100%;
  resize: none;
  margin: 5px 0 0 0;
  padding: 10px;
}
</style>
