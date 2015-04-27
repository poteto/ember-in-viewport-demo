import Ember from 'ember';
import InViewportMixin from 'ember-in-viewport';

const {
  on,
  setProperties
} = Ember;

const { log } = Ember.Logger;

export default Ember.Component.extend(InViewportMixin, {
  tagName           : 'li',
  classNames        : [ 'kittenCard-container' ],
  classNameBindings : [ 'viewportEntered:active:inactive' ],

  viewportOptionsOveride: on('didInsertElement', function() {
    setProperties(this, {
      viewportScrollSensitivity: 20,
      viewportListeners: [
        { context: window, event: 'scroll.scrollable' },
        { context: window, event: 'resize.resizable' },
        { context: document, event: 'touchmove.scrollable' },
        { context: '#ember-application', event: 'scroll.scrollable' }
      ]
    });
  }),

  didEnterViewport() {
    log('entered');
  },

  didExitViewport() {
    log('exited');
  },

  didScrollUp(direction) {
    log(direction);
  },

  didScrollDown(direction) {
    log(direction);
  },

  didScrollLeft(direction) {
    log(direction);
  },

  didScrollRight(direction) {
    log(direction);
  }
});
