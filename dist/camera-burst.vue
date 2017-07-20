<template>
  <div class="material-design-icon" id="camera-burst-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 1,5L 3,5L 3,19L 1,19L 1,5 Z M 5,5L 7,5L 7,19L 5,19L 5,5 Z M 22,5L 10,5C 9.45,5 9,5.45 9,6L 9,18C 9,18.55 9.45,19 10,19L 22,19C 22.55,19 23,18.55 23,18L 23,6C 23,5.45 22.55,5 22,5 Z M 11,17L 13.5,13.85L 15.29,16L 17.79,12.78L 21,17L 11,17 Z "></path>
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
