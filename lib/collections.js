
Connections = new Meteor.Collection('connections');
Everylink = new Meteor.Collection('everylink');
Contacts = new Meteor.Collection('contacts');
Groups = new Meteor.Collection('groups');

GroupsIndex = new EasySearch.Index({
  engine: new EasySearch.MongoDB({
    sort: function() {
      return {createdAt: -1};
    },
    selector: function(searchObject, options, aggregation) {
      "use strict";
      let selector = this.defaultConfiguration().selector(searchObject, options, aggregation),
      categoryFilter = options.search.props.categoryFilter;

      if(_.isString(categoryFilter) && !_.isEmpty(categoryFilter)) {
        selector.category = categoryFilter;
      }

      return selector;
    }
  }),
  collection: Groups,
  fields: ['groupname','groupdesc'], //fields to search through, add groupdesc
  defaultSearchOptions: {
      limit: 8 //display 8 results
  },
  permission: () => { //new way to write function
    return true;
  }
});
