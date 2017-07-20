<template>
  <div class="material-design-icon" id="animation-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 4,2C 2.892,2 2,2.892 2,4L 2,14L 4,14L 4,4L 14,4L 14,2L 4,2 Z M 8,6C 6.892,6 6,6.892 6,8L 6,18L 8,18L 8,8L 18,8L 18,6L 8,6 Z M 12,10C 10.892,10 10,10.892 10,12L 10,20C 10,21.108 10.892,22 12,22L 20,22C 21.108,22 22,21.108 22,20L 22,12C 22,10.892 21.108,10 20,10L 12,10 Z "></path>
    </svg>
  </div>
</template>

<style>
  .material-design-icon {
    display: inline-flex;
    align-self: center;
    position: relative;
    height: 1em;
    width: 1em;

    > svg {
      height: 1em;
      width: 1em;
      bottom: -0.125em;
      position: absolute;
      fill: currentColor;
    }
  }
</style>
