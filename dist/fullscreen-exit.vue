<template>
  <div class="material-design-icon" id="fullscreen-exit-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 14,14L 19,14L 19,16L 16,16L 16,19L 14,19L 14,14 Z M 5,14L 10,14L 10,19L 8,19L 8,16L 5,16L 5,14 Z M 8,5L 10,5L 10,10L 5,10L 5,8L 8,8L 8,5 Z M 19,8L 19,10L 14,10L 14,5L 16,5L 16,8L 19,8 Z "></path>
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
