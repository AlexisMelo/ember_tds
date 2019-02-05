import Controller from '@ember/controller';

export default Controller.extend({

  actions:{
    save(model){
      //let model= this.get('model');
      // this.modelFor(this.routeName); //recuperer model actif

      model.set('style','bg-success');
      model.set('info','Note enregistrée');
      },
  }
});
