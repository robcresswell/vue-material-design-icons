<template>
  <div class="material-design-icon" id="watermark-icon" role="img" aria-labelledby="watermark-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="watermark-title">Watermark icon</title>
      <path d="M 21,3L 3,3C 1.9,3 1,3.9 1,5L 1,19C 1,20.1 1.9,21 3,21L 21,21C 22.1,21 23,20.1 23,19L 23,5C 23,3.9 22.1,3 21,3 Z M 21,19L 12,19L 12,13L 21,13L 21,19 Z "></path>
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
