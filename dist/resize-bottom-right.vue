<template>
  <div class="material-design-icon" id="resize-bottom-right-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 22,22L 20,22L 20,20L 22,20L 22,22 Z M 22,18L 20,18L 20,16L 22,16L 22,18 Z M 18,22L 16,22L 16,20L 18,20L 18,22 Z M 18,18L 16,18L 16,16L 18,16L 18,18 Z M 14,22L 12,22L 12,20L 14,20L 14,22 Z M 22,14L 20,14L 20,12L 22,12L 22,14 Z "> 
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
