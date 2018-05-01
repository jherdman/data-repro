import DS from 'ember-data';

export default DS.Model.extend({
  drivers: DS.hasMany('driver'),

  name: DS.attr('string'),
});
