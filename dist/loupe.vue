<template>
  <div class="material-design-icon" id="loupe-icon" role="img" aria-labelledby="loupe-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="loupe-title">Loupe icon</title>
      <path d="M 12,20C 7.59,20 4,16.41 4,12C 4,7.59 7.59,4 12,4C 16.41,4 20,7.59 20,12C 20,16.41 16.41,20 12,20 Z M 12,2C 6.49,2 2,6.49 2,12C 2,17.51 6.49,22 12,22L 20,22C 21.1,22 22,21.1 22,20L 22,12C 22,6.49 17.51,2 12,2 Z M 13,7L 11,7L 11,11L 7,11L 7,13L 11,13L 11,17L 13,17L 13,13L 17,13L 17,11L 13,11L 13,7 Z "></path>
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
