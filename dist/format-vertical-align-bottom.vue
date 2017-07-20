<template>
  <div class="material-design-icon" id="format-vertical-align-bottom-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 16,13L 13,13L 13,3L 11,3L 11,13L 8,13L 12,17L 16,13 Z M 4,19L 4,21L 20,21L 20,19L 4,19 Z "> 
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
