<template>
  <div class="material-design-icon" id="layers-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 12,16L 19.36,10.27L 21,9L 12,2L 3,9L 4.63,10.27M 11.99,18.54L 4.62,12.81L 3,14.07L 12,21.07L 21,14.07L 19.37,12.8L 11.99,18.54 Z "></path>
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
