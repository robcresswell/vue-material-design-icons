<template>
  <div class="material-design-icon" id="reorder-vertical-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 9,3L 9,21L 11,21L 11,3L 9,3 Z M 5,3L 5,21L 7,21L 7,3L 5,3 Z M 13,3L 13,21L 15,21L 15,3L 13,3 Z M 19,3L 17,3L 17,21L 19,21L 19,3 Z "></path>
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
