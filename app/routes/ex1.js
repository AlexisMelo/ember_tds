import Route from '@ember/routing/route';
import EmberObject, {computed} from '@ember/object';

const Note = EmberObject.extend({
  content: '',
  MAX: 100,
  info: '',
  styleAlerte: '#3498db',
  alertVisible: false,
  sizeused: computed('content', function () {
    this.updateinfo();
    return this.content.length;
  }),
  sizeleft: computed('content', function () {
    return this.MAX - this.content.length;
  }),
  pourcentageAvancement: computed('content', function () {
    return (this.sizeused * 100) / this.MAX;
  }),
  styleBarre : computed('content', function() {
    if (this.pourcentageAvancement < 25) {
      return "#27ae60";

    } else if (this.pourcentageAvancement < 50) {
      return "#f1c40f";

    } else if (this.pourcentageAvancement < 75) {
      return "#e67e22";

    } else {
      return "#e74c3c";

    }
  }),
  updateinfo() {
    if (this.content != document.cookie.split('note=')[1]) {
      this.set('info', "Note modifiée");
      this.set('alertVisible', true);
      this.set('styleAlerte', "#3498db");

    }
  }
})

export default Route.extend({
  model() {
    if(document.cookie.split('note=')[1] != null)
    {
      return Note.create({
        content: document.cookie.split('note=')[1]
      });
    }
    return new Note();
  }
});
