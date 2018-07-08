<template lang="pug">
nav.panel
  p.panel-heading.tags
    span(v-for="tagObj in TagObjList", :class = "tagObj.color").tag.is-rounded {{ tagObj.name }}
</template>

<script>
export default {
  name: 'tags',
  data() {
    // eslint-disable-next-line
    return { TagObjList };
  },
};
</script>
