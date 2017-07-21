<template>
  <div class="material-design-icon" id="hackernews-icon" role="img" aria-labelledby="hackernews-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="hackernews-title">Hackernews icon</title>
      <path d="M 2,2L 22,2L 22,22L 2,22L 2,2 Z M 11.25,17.5L 12.75,17.5L 12.75,13.0612L 16,7L 14.5,7L 12,11.6625L 9.5,7.00001L 8,7L 11.25,13.0612L 11.25,17.5 Z "></path>
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
