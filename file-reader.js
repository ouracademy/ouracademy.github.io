const path = require('path')
const {
  readdir,
  readFile,
  readdirSync,
  readFileSync,
  writeFileSync
} = require('fs')
const extractPost = require('./extract-post')

const getProps = postPath =>
  readdirSync(postPath).map(fileName =>
    Object.assign(
      extractPost(readFileSync(path.join(postPath, fileName), 'utf-8')),
      { path: path.parse(fileName).name }
    )
  )

const writeJSON = dirname => (name, object) =>
  writeFileSync(
    path.join(dirname, name + '.json'),
    JSON.stringify(object),
    'utf8'
  )

module.exports = {
  getProps,
  writeJSON
}

/*
const readFiles = (dirname, onFileContent, onError) => {
  readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    
    filenames.forEach(function(fileName) {
      readFile(path.join(postPath, fileName), 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(fileName, content);
      });
    });
  });
}

 module.exports = () => {
    const posts = []
    
    readFiles(
        postPath,
        (fileName, content) => posts.push(extractPost(content)),
        e => console.error(e)
    )
    
    return posts
 }*/
