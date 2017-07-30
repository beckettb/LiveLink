Meteor.publish('everylink', function(){
  return Everylink.find();
})

Meteor.publish('connections', function(){
  return Connections.find();
})
