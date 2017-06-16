const ourSponsors = [
 {name:"Google",amt:"$50 million"},
 {name:"Apple",amt:"$20 million"},
 {name:"Facebook",amt:"$40 million"},
 {name:"Beckett's dog",amt:"A dirty lick and foul breath"}
]

Template.sponsors.helpers({
	sponsorData: ourSponsors,
  today: new Date()
})
