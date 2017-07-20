<template>
  <div class="material-design-icon" id="export-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 23,12L 19,8.00003L 19,11L 10,11L 10,13L 19,13L 19,16M 1.00001,18L 1.00001,6.00002C 1.00001,4.89002 1.9,4.00003 3,4.00003L 15,4.00001C 16.1,4.00001 17,4.89001 17,6.00001L 17,9L 15,9L 15,6.00001L 3,6.00002L 3,18L 15,18L 15,15L 17,15L 17,18C 17,19.1 16.1,20 15,20L 3,20C 1.9,20 1.00001,19.11 1.00001,18 Z "></path>
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
