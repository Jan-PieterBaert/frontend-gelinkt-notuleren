import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class VersionedBehandelingModel extends Model {
  @attr state;
  @attr content;
  @attr uri;
  @attr('boolean', { defaultValue: false }) deleted;
  @hasMany('signed-resource') signedResources;
  @belongsTo('published-resource') publishedResource;
  @belongsTo('zitting') zitting;
  @belongsTo('behandeling-van-agendapunt') behandeling;
}
