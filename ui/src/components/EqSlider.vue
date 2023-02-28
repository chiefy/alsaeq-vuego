<style lang="less">
.slider {
  color: rgb(200, 167, 255) ;
  background-color: #5b5b5b;
  padding: 1em 0;
  margin: 0 1em;
  width: 2.6em;
  border-radius: 0.25em;
  .slider-value {
    text-align: center;
    width: 100%;
    margin-bottom: 1em;
    font-family: sans-serif;
  }
  .slider-label {
    font-size: 0.8em;
    text-align: center;
    width: 100%;
    margin: 1em 0 0 0;
    font-family: sans-serif;
  }
  .slider-hit-area {
    height: 10em;
    width: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    .slider-container {
      width: 3px;
      height: 100%;
      background-color: #939393;
      position: relative;
      .filled {
        background-color: rgb(175, 128, 218);
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
      }
      .handle {
        width: 1em;
        height: 1em;
        border-radius: 100%;
        background-color: rgb(78, 39, 139);
        position: absolute;
        left: 50%;
        transform: translate(-50%, 50%);
      }
    }
  }
}
</style>
<template>
  <div class="slider">
    <div class="slider-value">{{ Math.round(value) }}</div>
    <div class="slider-hit-area" @click="onClick">
      <div class="slider-container" ref="container">
        <div class="filled" :style="{ height: value + '%' }"></div>
        <div
          class="handle"
          :style="{ bottom: value + '%' }"
          @mousedown="onMouseDown"
        ></div>
      </div>
    </div>
    <div class="slider-label">{{ freq }}{{ label }}</div>
  </div>
</template>

<script>

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

export default {
  data() {
    return {
      freq: 50,
      label: 'kHz',
      value: 30,
      dragging: false
    };
  },
  mounted() {
    document.addEventListener("mousemove", (e) => {
      if (!this.dragging) return;
      this.update(e);
    });
    document.addEventListener("mouseup", (e) => {
      this.dragging = false;
    });
  },
  methods: {
    onMouseDown() {
      this.dragging = true;
    },
    getRect() {
      const container = this.$refs.container;
      return container.getBoundingClientRect();
    },
    update(e) {
      const rect = this.getRect();
      this.value =
        100 -
        ((clamp(e.clientY, rect.top, rect.bottom) - rect.top) / rect.height) *
          100;
    },
    onClick(e) {
      this.update(e);
    }
  }
};
</script>
