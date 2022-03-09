<template>
  <div class="app-content">
    <div class="content-overlay"></div>
    <div class="content-wrapper">
      <div class="content-body col-12 mt-3">
        <transition name="zoom-fade" mode="out-in">
          <slot />
        </transition>
      </div>
    </div>
  </div>
</template>
