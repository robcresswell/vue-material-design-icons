<template>
  <div class="material-design-icon" id="microsoft-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 2,3L 11,3L 11,12L 2,12L 2,3 Z M 11,22L 2,22L 2,13L 11,13L 11,22 Z M 21,3L 21,12L 12,12L 12,3L 21,3 Z M 21,22L 12,22L 12,13L 21,13L 21,22 Z "> 
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
