import Ember from 'ember';
import InViewportMixin from 'ember-in-viewport';

const {
  on,
  setProperties
} = Ember;

export default Ember.Component.extend(InViewportMixin, {
  tagName           : 'li',
  classNames        : [ 'kittenCard-container' ],
  classNameBindings : [ 'viewportEntered:active:inactive' ],

  viewportOptionsOveride: on('didInsertElement', function() {
    setProperties(this, {
      viewportSpy: true,
      viewportTolerance: {
        top    : 200,
        bottom : 200
      }
    });
  })
});
