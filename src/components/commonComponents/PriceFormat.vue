<template functional>
  <span>{{ Math.round(props.value) }} <span>₽</span></span>
</template>

<script>
export default {
  props: {
    value: { type: Number, required: true },
  },
}
</script>
