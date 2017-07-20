<template>
  <div class="material-design-icon" id="close-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 19,6.41L 17.59,5L 12,10.59L 6.41,5L 5,6.41L 10.59,12L 5,17.59L 6.41,19L 12,13.41L 17.59,19L 19,17.59L 13.41,12L 19,6.41 Z "></path>
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
