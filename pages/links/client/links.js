const links =
  [
    {name:"Link1"    , status: "status1" },
    {name:"Link2" , status: "status2" }
  ];

  Template.setstatus.events({
    'click button'(elt,instance) {
      const yourstatus = instance.$('#yourstatus').val();
      const userId = Meteor.userId;
      instance.$('#yourstatus').val("");
      elt.preventDefault();
      for(item of Connections.find().fetch()){Connections.remove(item._id)}; //removes previous entries

      Meteor.call('connections.remove',)

      var insstatus = {yourstatus:yourstatus,
        userId:userId,
        owner:Meteor.userId()
      };
      Meteor.call('connections.insert',insstatus)
      //Connections.insert(insstatus);

      var inseverylink = {yourstatus:yourstatus,
        userId:userId,
        owner:Meteor.userId()
      };
      Meteor.call('everylink.insert',inseverylink)
      //Everylink.insert(inseverylink);
      //for(item of Everylink.find().fetch()){Everylink.remove(item._id)};

      //check if user beforehand
      Contacts.insert({
        name: "",
        userId: Meteor.userId()
      });

    }
  })

  Template.showyour.helpers({
    showing() {return Connections.find()},
  })

  Template.showevery.helpers({
    showingevery() {return Everylink.find()},
  })

  Template.linkrow.events({
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

Template.links.helpers(
 {
   links
 }
)
