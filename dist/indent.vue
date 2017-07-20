<template>
  <div class="material-design-icon" id="indent-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 2,3L 22,3L 22,6L 2,6L 2,3 Z M 9,8.00002L 22,8.00001L 22,11L 9,11L 9,8.00002 Z M 9,13L 22,13L 22,16L 9,16L 9,13 Z M 2,18L 22,18L 22,21L 2,21L 2,18 Z M 3,8L 7,12L 3,16L 2,16L 2,8L 3,8 Z "></path>
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
