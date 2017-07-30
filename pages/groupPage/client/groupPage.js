Template.groupPage.helpers({
  isMember(){
    return Groups.findOne({"_id":this._id}).members.includes(Meteor.userId());
  },
})

Template.groupMain.helpers({
  isMember(){
    return Groups.findOne({"_id":this._id}).members.includes(Meteor.userId());
  },
  isGroupOwner(){
    if (Groups.findOne({"_id":this._id}).owner == Meteor.userId()){
      return true;
    }else{
      return false;
    }
  }
})

Template.groupMain.events({
     'click button#js-requestjoingroup'(elt,instance) {
        elt.preventDefault();
        Meteor.call('groups.addmember', this._id, Meteor.userId());
        console.dir(this);
    },
    'click button#js-editGroup'(elt,instance) {
      elt.preventDefault();
      instance.$(".groupMainDiv").css("display", "none");
      instance.$(".groupEditDiv").css("display", "block");
    },
    'click button#js-saveGroup' (elt,instance) {
      console.log('testing this');
      console.dir(this);
      elt.preventDefault();

      const editgrpname = instance.$('.editgroupname').val();
      const editgrpdesc = instance.$('.editgroupdesc').val();
      const editgrploc = instance.$('.editgrouploc').val();
      instance.$('.editgroupname').val("");
      instance.$('.editgroupdesc').val("");
      instance.$('.editgrouploc').val("");

      instance.$(".groupMainDiv").css("display", "block");
      instance.$(".groupEditDiv").css("display", "none");

      Meteor.call('groups.edit', this._id, editgrpname, editgrpdesc, editgrploc)

      console.log('testing this');
      console.dir(this);

      // var groupinfo =
      //   { groupname:editgrpname,
      //     groupdesc:editgrpdesc,
      //     grouploc:editgrploc,
      //   }
    }
})

Template.boxOfLinks.helpers({
  showinglinks() {
    var thisgroup = Groups.findOne({_id:this._id});
    var thisgroupmems = thisgroup.members;
    console.log('this group mems: ')
    console.log(thisgroupmems);
    var thisgroupmemslength = thisgroupmems.length;
    //
    //
    // var alloflinks = Everylink.find().fetch();
    // console.log('all of links:')
    // console.log(alloflinks)
    // var alloflinkslength = alloflinks.length;
    var grouplinks = [];
    for (var i=0; i<thisgroupmemslength; i++){
        var thismemberlink = Everylink.findOne({owner:thisgroupmems[i]});
        grouplinks[i] = thismemberlink;
    }
    console.log('grouplinks')
    console.log(grouplinks)
    console.dir(grouplinks)
    return grouplinks;
  },
})

Template.grouplinkrow.helpers({
  isLinkOwner(link) {
    if (link.owner == Meteor.userId()) {
      return true;
    } else {
      return false;
    }
  },
})

Template.grouplinkrow.events({
  'click span'(elt,instance) {
    console.dir(this);
    console.log(this);
    console.log(this.l._id);

    var removeall = this.l._id;
    if (Meteor.userId()==this.l.owner){
      Meteor.call('everylink.remove', removeall, this.l)
    }
  }
})

// User.findOne({owner: object.messagesArray.messageOwner})

// Template.groupPage.onCreated(function() {
//    Meteor.subscribe('groups');
// })
