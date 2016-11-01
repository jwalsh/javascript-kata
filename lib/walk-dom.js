var walk = (node, cb) => {
  cb(node);

  let n = node.firstChild;
  while (n) {
    walk(n, cb);
    n = n.nextSibling;
  }
}

walk(document.body, (n) => { console.log(n.nodeType); });
