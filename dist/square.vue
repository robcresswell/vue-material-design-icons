<template>
  <div class="material-design-icon" id="square-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 3,3L 3,21L 21,21L 21,3"> 
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
