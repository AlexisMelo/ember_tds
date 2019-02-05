import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    toggleActive(service) {

      service.set('active', !service.active);

    }
  }
});
