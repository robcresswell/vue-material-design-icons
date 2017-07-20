<template>
  <div class="material-design-icon" id="image-filter-center-focus-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 12,9C 10.34,9 9,10.34 9,12C 9,13.66 10.34,15 12,15C 13.66,15 15,13.66 15,12C 15,10.34 13.66,9 12,9 Z M 19,19L 15,19L 15,21L 19,21C 20.1,21 21,20.1 21,19L 21,15L 19,15M 19,3L 15,3L 15,5L 19,5L 19,9L 21,9L 21,5C 21,3.9 20.1,3 19,3 Z M 5,5L 9,5L 9,3L 5,3C 3.9,3 3,3.9 3,5L 3,9L 5,9M 5,15L 3,15L 3,19C 3,20.1 3.9,21 5,21L 9,21L 9,19L 5,19L 5,15 Z "></path>
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
