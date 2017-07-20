<template>
  <div class="material-design-icon" id="priority-high-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 14,19L 22,19L 22,17L 14,17L 14,19 Z M 14,13.5L 22,13.5L 22,11.5L 14,11.5L 14,13.5 Z M 14,8L 22,8L 22,6L 14,6L 14,8 Z M 2,12.5C 2,8.92 4.92,6 8.5,6L 9,6L 9,4L 12,7L 9,10L 9,8L 8.5,8C 6.02,8 4,10.02 4,12.5C 4,14.98 6.02,17 8.5,17L 12,17L 12,19L 8.5,19C 4.92,19 2,16.08 2,12.5 Z "></path>
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
