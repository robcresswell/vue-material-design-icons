<template>
  <div class="material-design-icon" id="rotate-3d-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 12,5C 16.9706,5 21,7.68629 21,11C 21,12.6803 19.964,14.1992 18.2946,15.2884C 19.3629,14.4172 20,13.3188 20,12.125C 20,9.29454 16.4183,7 12,7L 12,10L 8,6L 12,2L 12,5 Z M 12,19C 7.02943,19 3,16.3137 3,13C 3,11.3197 4.03602,9.80081 5.70542,8.7116C 4.63712,9.58278 4,10.6812 4,11.875C 4,14.7055 7.58172,17 12,17L 12,14L 16,18L 12,22L 12,19 Z "></path>
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
