import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/styles/hljs'

const codeTheme = github

export default ({ children, language }) => (
  <SyntaxHighlighter style={codeTheme}>{children}</SyntaxHighlighter>
)
