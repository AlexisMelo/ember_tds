import Route from '@ember/routing/route';
import EmberObject, {computed} from '@ember/object';

const Note = EmberObject.extend({
  content:'',
  MAX: 25,
  info : null,
  style : 'bg-warning',
  alertVisible : true,
  sizeused: computed('content', function(){
    return this.content.length;
  }),
  sizeleft: computed('content', function() {
    return this.MAX-this.content.length;
  }),
  sizeinterdit : computed('content', function() {
    if (this.MAX-this.content.length < 0 ){
      return 'interdit';
    }
    else
    {
      return this.MAX-this.content.length;
    }
  })
})

export default Route.extend({
  model() {
    return new Note();
  }
});
