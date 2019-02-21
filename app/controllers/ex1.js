import Controller from '@ember/controller';

export default Controller.extend({

  actions:{
    save(model){
      document.cookie="note="+model.get('content');
      model.set('info',"Note enregistrée");
      model.set('alertVisible',true);
      model.set('styleAlerte',"#27ae60");
      },

    clear(model) {
      model.set('content','');

      //obligé de mettre un délai parceque le model.set au dessus déclenche la fonction "updateinfo" qui met l'alerte visible
      //et apparement ça se déclenche après qu'on cache l'alerte avec le model.set en dessous
      setTimeout(function() {
        model.set('alertVisible',false)
      }, 1);

    }
  }
});
