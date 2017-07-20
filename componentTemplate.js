<template>
  <div class="material-design-icon" id="{{name}}-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path{{{path}}}> 
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
