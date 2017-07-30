Meteor.publish('everylink', function(){
  return Everylink.find();
})

Meteor.publish('connections', function(){
  return Connections.find();
})

Meteor.publish('groups', function(){
  return Groups.find();
})
