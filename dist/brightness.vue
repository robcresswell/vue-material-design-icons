<template>
  <div class="material-design-icon" id="brightness-icon" role="img" aria-labelledby="brightness-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="brightness-title">Brightness icon</title>
      <path d="M 3.99999,4.00001L 8.68633,4.00001L 12.0001,0.686277L 15.3138,4.00001L 20,4.00001L 20,8.68623L 23.3138,12L 20,15.3137L 20,20L 15.3137,20L 12,23.3137L 8.68633,20L 3.99999,20L 3.99999,15.3137L 0.686322,12L 3.99999,8.68634L 3.99999,4.00001 Z M 12,6L 12,18C 15.3137,18 18,15.3137 18,12C 18,8.6863 15.3137,6 12,6 Z "></path>
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
