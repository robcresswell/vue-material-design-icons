<template>
  <div class="material-design-icon" id="drawing-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 8.5,3C 11.5376,3 14,5.46243 14,8.5C 14,9.82963 13.5282,11.0491 12.7428,12L 21,12L 21,21L 12,21L 12,12.7428C 11.0491,13.5282 9.82963,14 8.5,14C 5.46243,14 3,11.5376 3,8.5C 3,5.46243 5.46243,3 8.5,3 Z "></path>
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
