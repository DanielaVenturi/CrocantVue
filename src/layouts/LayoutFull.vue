<script setup>
  import { useLayout } from '@/composable/layout';
  const { layout } = useLayout();
</script>
<template>
  <component :is="layout" />
</template>