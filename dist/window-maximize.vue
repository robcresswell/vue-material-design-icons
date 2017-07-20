<template>
  <div class="material-design-icon" id="window-maximize-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 4,4L 20,4.00001L 20,20L 4,20L 4,4 Z M 6.00001,8L 6,18L 18,18L 18,8L 6.00001,8 Z "> 
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
