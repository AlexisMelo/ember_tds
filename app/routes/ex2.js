import Route from '@ember/routing/route';
import EmberObject, {computed} from '@ember/object';
import { filterBy } from '@ember/object/computed';

const Services = EmberObject.extend({
  services: null,
  codePromo: null,
  listeActifs: filterBy('services', 'active', true),
  sommeActifs : computed('listeActifs', function() {
    let total = 0;
    this.listeActifs.forEach(function(s){
      if (s.active){
        total += s.price;
      }
    });
    return total;
  }),
  informationServicesSelectionnes : computed('listeActifs', function() {
    switch (this.listeActifs.length) {
      case 0 : return 'Aucun service selectionné';
      case 1 : return '1 service sélectionné';
      default :
        return this.listeActifs.length + ' services sélectionnés';
    }
  })
})

const Service = EmberObject.extend({
  name : 'default',
  price : 0,
  active : true
})

export default Route.extend({

  model(){

    return Services.create({
      services:[
        Service.create({
          name : 'Web développement',
          price : 3000,
          active : true
        }),
        Service.create({
          name : 'Design',
          price : 2000,
          active : false
        }),Service.create({
          name : 'Integration',
          price : 650,
          active : false
        }),Service.create({
          name : 'Formation',
          price : 1200,
          active : false
        })
      ],
      codePromo: {
        "B22":0.05,
        "AZ":0.01,
        "UBOAT":0.02
      }

    });
  }
});

