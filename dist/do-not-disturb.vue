<template>
  <div class="material-design-icon" id="do-not-disturb-icon" role="img" aria-labelledby="do-not-disturb-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="do-not-disturb-title">Do not disturb icon</title>
      <path d="M 12,2C 6.48,2 2,6.48 2,12C 2,17.52 6.48,22 12,22C 17.52,22 22,17.52 22,12C 22,6.48 17.52,2 12,2 Z M 17,13L 7,13L 7,11L 17,11L 17,13 Z "></path>
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
