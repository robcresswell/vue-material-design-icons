<template>
  <div class="material-design-icon" id="shield-icon" role="img" aria-labelledby="shield-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="shield-title">Shield icon</title>
      <path d="M 12,1L 3,5L 3,11C 3,16.55 6.84,21.74 12,23C 17.1602,21.74 21,16.55 21,11L 21,5L 12,1 Z "></path>
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
