Template.showGroups.helpers({
//   Meteor.call('groupsowned', Meteor.userId())
//   // "groupsOwned": function(){
//   //   allGroups = Groups.find({owner : Meteor.userId() }).fetch();
//   //   console.dir(allGroups);
//   // },

  memberOfGroups(){
    var yourOwnId = Meteor.userId();
    var everyGroup = Groups.find({}).fetch();
    var everyGroupLength = everyGroup.length;
    var memberOfGroups = [];
    for (var i=0; i<everyGroupLength; i++){
      if ($.inArray(yourOwnId, everyGroup[i].members) != -1){
        // console.log('found in array')
        memberOfGroups[i] = everyGroup[i];
      } else {
        // console.log('not found in array')
      }
    }
    console.log(memberOfGroups)
    return memberOfGroups;
  }
})
