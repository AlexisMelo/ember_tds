import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ex2', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ex2');
    assert.ok(route);
  });
});
