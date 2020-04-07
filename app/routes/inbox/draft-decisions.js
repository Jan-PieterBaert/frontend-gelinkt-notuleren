import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default Route.extend(DataTableRouteMixin, {
  modelName: 'document-container',
  queryParams: {
    page: { refreshModel: true },
    size: { refreshModel: true },
    sort: { refreshModel: true },
    filter: { refreshModel: true },
    // filter params
    title: { refreshModel: true }
  },
  mergeQueryOptions(params) {
    const query = {
      include: 'status,current-version',
      'filter[folder][:id:]': 'ae5feaed-7b70-4533-9417-10fbbc480a4c' // draft decisions
    };

    if (params.title && params.title.length > 0)
      query['filter[current-version][title]'] = params.title;

    return query;
  }
});
