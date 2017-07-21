<template>
  <div class="material-design-icon" id="application-icon" role="img" aria-labelledby="application-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="application-title">Application icon</title>
      <path d="M 19,4C 20.11,4 21,4.9 21,6L 21,18C 21,19.1 20.1,20 19,20L 5,20C 3.89,20 3,19.1 3,18L 3,6C 3,4.9 3.89,4 5,4L 19,4 Z M 19,18L 19,8L 5,8L 5,18L 19,18 Z "></path>
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
