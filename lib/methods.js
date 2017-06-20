Meteor.methods({
  'connections.insert'(insstatus) {
    Connections.insert(insstatus)
  },
  'everylink.insert'(inseverylink) {
    Everylink.insert(inseverylink)
  },
  'everylink.remove'(removeall) {
    console.log("userid="+this.userId)
    Everylink.remove(removeall)
  },
  'connections.remove'() {
    Connections.remove({})
  }
})
