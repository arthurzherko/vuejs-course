<template>
  <svg xmlns="http://www.w3.org/2000/svg" style="vertical-align: top;" version="1" :width="width + 'px'" :height="height + 'px'" viewBox="0 0 128 128">
    <g>
      <path d="M59.6 0h8v40h-8V0z" :fill="color"/>
      <path d="M92.19 6.374l6.928 4-20 34.64-6.93-4 20-34.64zM117.226 28.19l4 6.928-34.64 20-4-6.93 34.64-20zM128 59.6v8H88v-8h40zM121.626 92.19l-4 6.928-34.64-20 4-6.93 34.64 20z" :fill="color" fill-opacity=".2"/>
      <path d="M99.81 117.226l-6.928 4-20-34.64 6.93-4 20 34.64z" :fill="color" fill-opacity=".3"/>
      <path d="M68.4 128h-8V88h8v40z" :fill="color" fill-opacity=".4"/>
      <path d="M35.81 121.626l-6.928-4 20-34.64 6.93 4-20 34.64z" :fill="color" fill-opacity=".5"/>
      <path d="M10.774 99.81l-4-6.928 34.64-20 4 6.93-34.64 20z" :fill="color" fill-opacity=".6"/>
      <path d="M0 68.4v-8h40v8H0z" :fill="color" fill-opacity=".7"/>
      <path d="M6.374 35.81l4-6.928 34.64 20-4 6.93-34.64-20z" :fill="color" fill-opacity=".8"/>
      <path d="M28.19 10.774l6.928-4 20 34.64-6.93 4-20-34.64z" :fill="color" fill-opacity=".9"/>
      <animateTransform attributeName="transform" type="rotate" values="0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64" calcMode="discrete" dur="1080ms" repeatCount="indefinite"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'preloader',

  props: {
    color: {
      type: String,
      default: '#ffffff'
    },

    width: {
      type: Number,
      default: 64
    },

    height: {
      type: Number,
      default: 64
    }
  }
}
</script>
