  Template.showyour.onCreated(function() {
  //this.state = new ReactiveDict();
  Meteor.subscribe('everylink');
  Meteor.subscribe('connections');
  });

  Template.setstatus.events({
    'click button'(elt,instance) {
      const yourstatus = instance.$('#yourstatus').val();
      const youruser = instance.$('#youruser').val();



      const userId = Meteor.userId;
      elt.preventDefault();
      for(item of Connections.find().fetch()){Connections.remove(item._id)}; //removes previous entries


      var insstatus = {yourstatus:yourstatus,
        youruser:youruser,
        owner:Meteor.userId()
      };
      //Meteor.call('connections.insert',insstatus)
      //Meteor.call('connections.update',insstatus)
      //Connections.insert(insstatus);

      var inseverylink = {yourstatus:yourstatus,
        youruser:youruser,
      };

      if (Connections.findOne({owner:Meteor.userId()})){    //NOT WORKING, CHANGE
        Meteor.call('connections.remove',) //CHANGE TO REMOVE ONLY THINGS FROM THIS USER
        Meteor.call('connections.insert', insstatus)
      }

      if (!Everylink.findOne({owner:Meteor.userId()})) {//if no post by this user
        console.log("inserting"+JSON.stringify(insstatus))
        Meteor.call('everylink.insert',insstatus)
        console.dir(Everylink.findOne({owner:Meteor.userId()}));
      }else {
        Meteor.call('everylink.update',insstatus)
        console.dir(Everylink.findOne({owner:Meteor.userId()}));
      }

      instance.$('#yourstatus').val("");
      instance.$('#youruser').val("");

      //Everylink.insert(inseverylink);

      //for(item of Everylink.find().fetch()){Everylink.remove(item._id)};

      //check if user beforehand
      // Contacts.insert({
      //   name: "Not available yet",
      //   userId: Meteor.userId()
      // });

    }
  })

  Template.showyour.helpers({
    showing() {
      var thiseverylink = Everylink.findOne({owner:Meteor.userId()});
      console.log(thiseverylink)
      return thiseverylink
    },
  })

  // Template.showevery.helpers({
  //   showingevery() {return Everylink.find()},
  // })
  //
  // Template.linkrow.events({
  //   'click span'(elt,instance) {
  //     console.dir(this);
  //     console.log(this);
  //     console.log(this.l._id);
  //
  //     var removeall = this.l._id;
  //     if (Meteor.userId()==this.l.owner){
  //       Meteor.call('everylink.remove', removeall, this.l)
  //     }
  //   }
  // })
