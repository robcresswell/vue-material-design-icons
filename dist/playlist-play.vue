<template>
  <div class="material-design-icon" id="playlist-play-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 19,9L 2,9L 2,11L 19,11L 19,9 Z M 19,5L 2,5L 2,7L 19,7L 19,5 Z M 2,15L 15,15L 15,13L 2,13L 2,15 Z M 17,13L 17,19L 22,16L 17,13 Z "></path>
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
