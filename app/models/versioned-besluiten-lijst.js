import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class VersionedBesluitenLijstModel extends Model {
  @attr state;
  @attr content;
  @attr('boolean', { defaultValue: false }) deleted;
  @hasMany('signed-resource') signedResources;
  @belongsTo('published-resource') publishedResource;
  @belongsTo('zitting') zitting;
  @belongsTo('editor-document') editorDocument;
}
