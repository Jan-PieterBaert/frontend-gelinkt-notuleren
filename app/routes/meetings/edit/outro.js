import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class MeetingsEditOutroRoute extends Route {
  @service currentSession;
  @service router;

  beforeModel() {
    if (!this.currentSession.canWrite) {
      this.router.transitionTo('meetings.edit');
    }
  }
}
