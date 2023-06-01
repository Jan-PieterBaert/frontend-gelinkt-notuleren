import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class MeetingsRoute extends Route {
  @service session;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }
}
