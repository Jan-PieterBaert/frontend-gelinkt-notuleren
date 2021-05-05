import RSVP from 'rsvp';
import Route from '@ember/routing/route';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class AgendapointsEditRoute extends Route {
  @service currentSession;  
  async model(params){
    if(!this.currentSession.canWrite && this.currentSession.canRead) {
      this.transitionTo('agendapoints.show', params.id);
      return;
    }
    const container = await this.store.findRecord('document-container', params.id, { include: 'status' });
    return RSVP.hash({
      documentContainer: container,
      editorDocument: await container.get('currentVersion')
    });
  }
  setupController(controller, model) {
    super.setupController(controller, model);
    controller._editorDocument = null;
  }
  @action
  error(error /*, transition */) {
    if (error.errors && error.errors[0].status === "404") {
      this.transitionTo('route-not-found');
    } else {
      // Let the route above this handle the error.
      return true;
    }
  }
}
