<template>
  <div class="material-design-icon" id="view-module-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 16,5L 16,11L 21,11L 21,5M 10,11L 15,11L 15,5L 10,5M 16,18L 21,18L 21,12L 16,12M 10,18L 15,18L 15,12L 10,12M 4,18L 9,18L 9,12L 4,12M 4,11L 9,11L 9,5L 4,5L 4,11 Z "></path>
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
