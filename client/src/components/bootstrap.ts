import { defineComponent, h } from 'vue';

import 'bootstrap/dist/css/bootstrap.min.css';

export const bContainer = defineComponent({
  name: 'bContainer',

  render() {
    return h('div', {
      class: 'container'
    }, this.$slots?.default?.());
  }
});

export const bCol = defineComponent({
  name: 'bCol',

  props: {
    es: { type: Number, default: -1 },
    sm: { type: Number, default: -1 },
    md: { type: Number, default: -1 },
    lg: { type: Number, default: -1 },
    xl: { type: Number, default: -1 },
    xxl : { type: Number, default: -1 },
  },

  render() {
    const classes = [];

    if (this.es !== -1) {
      classes.push(`col-${this.es}`);
    }

    if (this.sm !== -1) {
      classes.push(`col-sm-${this.sm}`);
    }

    if (this.md !== -1) {
      classes.push(`col-md-${this.md}`);
    }

    if (this.lg !== -1) {
      classes.push(`col-lg-${this.lg}`);
    }

    if (this.xl !== -1) {
      classes.push(`col-xl-${this.xl}`);
    }

    if (this.xxl !== -1) {
      classes.push(`col-xxl-${this.xxl}`);
    }

    if (classes.length === 0) {
      classes.push('col');
    }

    return h('div', {
      class: classes
    }, this.$slots?.default?.());
  }
});

export const bRow = defineComponent({
  name: 'bRow',

  render() {
    return h('div', {
      class: 'row'
    }, this.$slots?.default?.());
  }
});
