<template>
  <div class="material-design-icon" id="loading-icon" role="img" aria-labelledby="loading-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="loading-title">Loading icon</title>
      <path d="M 12,4L 12,2C 6.5,2 2,6.5 2,12L 4,12C 4,7.6 7.6,4 12,4 Z "></path>
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
