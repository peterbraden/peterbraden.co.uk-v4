function(doc) {
  if(doc.type == "post" && doc.tags && doc.tags.length) {
    for(var idx in doc.tags) {
      if (doc.tags[idx]){ 
        emit([doc.tags[idx].toLowerCase(), doc.meta.created_at], doc);
      }
    }
  }
}
