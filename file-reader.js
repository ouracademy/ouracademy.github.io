const path = require('path')
const {
  readdir,
  readFile,
  readdirSync,
  readFileSync,
  writeFile
} = require('fs')
const extractPost = require('./extract-post')

const postPath = path.join(__dirname, 'pages', 'posts')

const posts = readdirSync(postPath).map(fileName =>
  Object.assign(
    extractPost(readFileSync(path.join(postPath, fileName), 'utf-8')),
    { path: path.parse(fileName).name }
  )
)

module.exports = () =>
  writeFile(
    path.join(__dirname, 'static', 'posts.json'),
    JSON.stringify({ posts }),
    'utf8',
    () => {}
  )

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
