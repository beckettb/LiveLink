Meteor.methods({
  'connections.insert'(insstatus) {
    Connections.insert(insstatus)
  },
  'everylink.insert'(inseverylink) {
    inseverylink.owner = Meteor.userId();
    Everylink.insert(inseverylink)
  },
  'everylink.update'(inseverylink) {
    Everylink.update({owner:Meteor.userId()},
    {$set:{youruser:inseverylink.youruser, yourstatus:inseverylink.yourstatus}})
  },
  'everylink.remove'(removeall) {
    console.log("userid="+this.userId)
    Everylink.remove(removeall)
  },
  'connections.remove'() {
    Connections.remove({})
  }
})
