<template>
  <div class="material-design-icon" id="import-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 14,12L 10,8L 10,11L 2.00001,11L 2.00001,13L 10,13L 10,16M 20,18L 20,6.00002C 20,4.89002 19.1,4.00002 18,4.00002L 6,4.00001C 4.9,4.00001 4,4.89001 4,6.00001L 4,9L 6,9L 6,6.00001L 18,6.00002L 18,18L 6,18L 6,15L 4,15L 4,18C 4,19.1 4.9,20 6,20L 18,20C 19.1,20 20,19.11 20,18 Z "></path>
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
