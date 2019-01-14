import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  sortDirection: 'desc',

  actions: {
    sort(identifier) {
      if (this.sortBy === identifier) {
        if (this.sortDirection === 'desc') {
          this.set('sortDirection', 'asc');
        } else {
          this.set('sortDirection', 'desc');
        }
      } else {
        this.set('sortBy', identifier);
      }
    },
  }
});
