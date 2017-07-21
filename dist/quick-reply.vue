<template>
  <div class="material-design-icon" id="quick-reply-icon" role="img" aria-labelledby="quick-reply-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="quick-reply-title">Quick reply icon</title>
      <path d="M 13,18L 6,11L 13,4L 13,8C 21,8 24,19 24,19C 24,19 21,14 13,14L 13,18 Z M 7,18L 0,11L 7,4L 7,7L 3,11L 7,15L 7,18 Z "></path>
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
