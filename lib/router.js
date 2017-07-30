Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('/', {name: 'home'});
Router.route('credits');
Router.route('addgroups');
Router.route('status');
Router.route('contact');
Router.route('createGroup');
Router.route('groupPage/:_id', {
	path: 'groupPage/:_id',
	template: 'groupPage',
	waitOn: function(){
		return [Meteor.subscribe('groups'), Meteor.subscribe('everylink')];
	},
	data: function(){
		//return Groups.findOne({_id: this.params._id});
		const z = Groups.findOne({_id: this.params._id});
		return z;
	}
});
Router.route('yourGroups', {
	waitOn: function(){
		return Meteor.subscribe('groups');
	}
});
Router.route('groupsearch', {
	waitOn: function(){
		return Meteor.subscribe('groups');
	}
});

/*Router.route('pokemonData/:_id',
{name:"pokemonData",
 data: function(){
	 const c = Pokedex.findOne(this.params._id);
	 return c;
 }});*/
