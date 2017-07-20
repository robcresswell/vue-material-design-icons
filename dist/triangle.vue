<template>
  <div class="material-design-icon" id="triangle-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 1.00125,21.0012L 22.9975,21.0012L 12.0025,2.0025"> 
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
