<template>
  <div class="material-design-icon" id="arrow-bottom-right-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 5.00001,6.41002L 6.41001,5.00002L 17,15.59L 17,9L 19,9L 19,19L 9,19L 9,17L 15.59,17L 5.00001,6.41002 Z "></path>
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
