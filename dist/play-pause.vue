<template>
  <div class="material-design-icon" id="play-pause-icon" role="img" aria-labelledby="play-pause-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="play-pause-title">Play pause icon</title>
      <path d="M 2.9975,5L 2.9975,18.9988L 11.0013,12.0025M 12.9975,18.9988L 16.0012,18.9988L 16.0012,5L 12.9975,5M 17.9975,5L 17.9975,18.9988L 21.0013,18.9988L 21.0013,5"></path>
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
