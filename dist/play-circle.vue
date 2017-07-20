<template>
  <div class="material-design-icon" id="play-circle-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 10,16.5L 10,7.50001L 16,12M 12,2.00001C 6.477,2.00001 2.00001,6.477 2.00001,12C 2.00001,17.523 6.477,22 12,22C 17.523,22 22,17.523 22,12C 22,6.477 17.523,2.00001 12,2.00001 Z "></path>
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
