<template>
  <div class="material-design-icon" id="skip-next-icon" role="img" aria-labelledby="skip-next-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="skip-next-title">Skip next icon</title>
      <path d="M 16,18L 18,18L 18,5.99999L 16,5.99999M 6,18L 14.5,12L 6,5.99999L 6,18 Z "></path>
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
