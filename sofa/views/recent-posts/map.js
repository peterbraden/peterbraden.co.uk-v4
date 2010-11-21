function(doc) {
  if (doc.meta.type == "post") {
    emit(new Date(doc.meta.created_at), doc);
  }
};
