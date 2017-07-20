<template>
  <div class="material-design-icon" id="content-save-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 15,9L 5,9L 5,5L 15,5M 12,19C 10.34,19 9,17.66 9,16C 9,14.34 10.34,13 12,13C 13.66,13 15,14.34 15,16C 15,17.66 13.66,19 12,19 Z M 17,3L 5,3C 3.89,3 3,3.9 3,5L 3,19C 3,20.1 3.89,21 5,21L 19,21C 20.1,21 21,20.1 21,19L 21,7L 17,3 Z "></path>
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
