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
  },
  'groups.insert'(groupinfo) {
    Groups.insert(groupinfo);
  },
   'groups.addmember'(groupid, personalid) { //personalid = Meteor.userId()
     Groups.update({_id:groupid}, {$addToSet: {members: personalid}});
  },
  'groups.edit' (groupid, editgrpname, editgrpdesc, editgrploc){
    Groups.update({_id:groupid}, {$set: {groupname: editgrpname, groupdesc: editgrpdesc, grouploc: editgrploc}});
  }
})
