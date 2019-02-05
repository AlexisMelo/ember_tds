import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    toggleActive(service) {

      service.set('active', !service.active);

    },

    ajouterPromo(model) {
      model.codesPromos.forEach(function(code) {
        if(model.tentativePromo == code.name)
        {
          code.set('active', true);
        }
      });
    },

    supprimerCode(code) {

      code.set('active',false);

    }
  }
});
