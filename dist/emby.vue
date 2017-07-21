<template>
  <div class="material-design-icon" id="emby-icon" role="img" aria-labelledby="emby-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="emby-title">Emby icon</title>
      <path d="M 11,2L 6,7L 7,8L 2,13L 7,18L 8,17L 13,22L 18,17L 17,16L 22,11L 17,6L 16,7L 11,2 Z M 10,8.5L 16,12L 10,15.5L 10,8.5 Z "></path>
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
