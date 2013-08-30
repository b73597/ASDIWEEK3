function(doc) {
	if (doc._id.substr(0,7) === "source:") {
		emit(doc._id);
	}
};