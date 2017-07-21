<template>
  <div class="material-design-icon" id="solid-icon" role="img" aria-labelledby="solid-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="solid-title">Solid icon</title>
      <path d="M 0,0L 24,0L 24,24L 0,24"></path>
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
