import DS from 'ember-data';

export default DS.Model.extend({
  car: DS.belongsTo('car'),

  name: DS.attr('string'),
});
