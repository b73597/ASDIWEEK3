function(doc) {
	if (doc._id.substr(0,7) === "member:") {
		emit(doc._id, {
			"fname": doc.fname,
			"lname": doc.lname,
			"art": doc.art
		});
	}
};