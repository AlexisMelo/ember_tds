import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ex3', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ex3');
    assert.ok(route);
  });
});
