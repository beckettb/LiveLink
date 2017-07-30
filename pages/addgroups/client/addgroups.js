Template.addgroup.events({
  'click button'(elt,instance) {
    const username = instance.$('#username').val();
    instance.$('#username').val("");
    elt.preventDefault();

    /*{{#if currentUser}}
      Contacts.insert({
        userId: Meteor.userId()
        status: not available yet
      });
    {{/if}}*/
  }
})
