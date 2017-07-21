<template>
  <div class="material-design-icon" id="view-day-icon" role="img" aria-labelledby="view-day-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="view-day-title">View day icon</title>
      <path d="M 2,3L 2,6L 21,6L 21,3M 20,8L 3,8C 2.45,8 2,8.45 2,9L 2,15C 2,15.55 2.45,16 3,16L 20,16C 20.55,16 21,15.55 21,15L 21,9C 21,8.45 20.55,8 20,8 Z M 2,21L 21,21L 21,18L 2,18L 2,21 Z "></path>
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
