import Controller from '@ember/controller';
import { task } from 'ember-concurrency';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class MeetingsEditOutroController extends Controller {
  @service router;
  @tracked editor;

  get dirty() {
    return this.model.outro !== this.editor.htmlContent;
  }

  @action
  initEditor(editor) {
    this.editor = editor;
  }

  @action
  closeModal() {
    this.router.transitionTo('meetings.edit');
  }

  @action
  async saveAndQuit() {
    await this.saveTextTask.perform();
    this.closeModal();
  }

  saveTextTask = task(async () => {
    const zitting = this.model;
    zitting.outro = this.editor.htmlContent;
    await zitting.save();
  });
}
