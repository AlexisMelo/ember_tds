import Controller from '@ember/controller';

export default Controller.extend({

  copyArrayElements(from,to) {
      to.pushObjects(from);
      from = [];

    },

  removeArrayElements(from,asup) {

    asup.forEach(function(item,i) {

      console.log(item);
      console.log(from[i]);

      if(from.includes(item))
      {
        from.splice(i,1);
      }
    });
  },

  actions: {
    addToIncluded(model) {
      this.copyArrayElements(model.dispoItems_ ,model.includedItems);

      this.removeArrayElements(model.dispoItems,model.dispoItems_);

    },

    addAllToIncluded(model) {
      this.copyArrayElements(model.dispoItems ,model.includedItems);
    },

    removeFromIncluded(model) {
      this.copyArrayElements(model.includedItems_ ,model.dispoItems);
    },
    RemoveAllFromIncluded(model) {
      this.copyArrayElements(model.includedItems ,model.dispoItems);
    }


  }
});
