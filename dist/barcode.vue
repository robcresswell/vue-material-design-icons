<template>
  <div class="material-design-icon" id="barcode-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 2,6L 4,6L 4,18L 2,18L 2,6 Z M 5,6.00001L 6,6.00001L 6,18L 5,18L 5,6.00001 Z M 7,6.00001L 10,6.00001L 10,18L 7,18L 7,6.00001 Z M 11,6L 12,6L 12,18L 11,18L 11,6 Z M 14,6L 16,6L 16,18L 14,18L 14,6 Z M 17,6L 20,6L 20,18L 17,18L 17,6 Z M 21,6L 22,6L 22,18L 21,18L 21,6 Z "> 
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
