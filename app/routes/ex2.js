import Route from '@ember/routing/route';
import EmberObject, {computed} from '@ember/object';
import { filterBy } from '@ember/object/computed';

const Services = EmberObject.extend({
  services: null,
  tentativePromo : null,
  codesPromos: null,
  codesPromosActifs: filterBy('codesPromos','active',true),
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
  }),
  sommeRemises : computed('codesPromosActifs', function() {
    let total = 0;
    this.codesPromosActifs.forEach(function (s) {
      if (s.active) {
        total += s.price;
      }
    });
    return total;
  }),
  sommeAvecRemise : computed('sommeRemises','sommeActifs',function () {
    if (this.sommeActifs - this.sommeRemises < 0 ) return 0;
    return this.sommeActifs - this.sommeRemises;
  })
})

const Service = EmberObject.extend({
  name : 'default',
  price : 0,
  active : false
})

const codePromo = EmberObject.extend({
  name : '',
  reduction : 0,
  active : false
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
          price : 2000
        }),Service.create({
          name : 'Integration',
          price : 650
        }),Service.create({
          name : 'Formation',
          price : 1200
        })
      ],
      codesPromos:[
        codePromo.create({
          name : 'HyperCodePromo',
          price : 1000
        }),
        codePromo.create({
          name : 'SuperCodePromo',
          price : 500
        }),
        codePromo.create({
          name : 'PetitCodePromo',
          price : 100
        }),
        codePromo.create({
          name : 'CodeSympa',
          price : 1200
        }),
        codePromo.create({
          name : 'LeCode',
          price : 250
        }),
        codePromo.create({
          name : 'AZ',
          price : 1
        })
      ]

    });
  }
});

