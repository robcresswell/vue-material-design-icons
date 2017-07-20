<template>
  <div class="material-design-icon" id="format-vertical-align-top-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 8,11L 11,11L 11,21L 13,21L 13,11L 16,11L 12,7L 8,11 Z M 4,3L 4,5L 20,5L 20,3L 4,3 Z "> 
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
