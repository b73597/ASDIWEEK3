function(doc) {
	if (doc._id.substr(0,8) === "painting:") {
		emit(doc._id.substr(8), {
			"material": doc.material,
			"frame": doc.frame,
			"price": doc.price
		});
	}
};