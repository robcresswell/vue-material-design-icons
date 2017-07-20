<template>
  <div class="material-design-icon" id="format-header-equal-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 4,4L 6,4L 6,10L 10,10L 10,4L 12,4L 12,18L 10,18L 10,12L 6,12L 6,18L 4,18L 4,4 Z M 14,10L 14,8L 21,8L 21,10L 14,10 Z M 14,12L 21,12L 21,14L 14,14L 14,12 Z "></path>
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
