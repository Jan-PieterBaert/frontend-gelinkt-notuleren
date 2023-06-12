import Component from '@glimmer/component';
import { service } from '@ember/service';
import ENV from 'frontend-gelinkt-notuleren/config/environment';

export default class SignaturesPublicationConfirmation extends Component {
  @service currentSession;
  publicationBaseUrl = ENV.publication.baseUrl;
}
