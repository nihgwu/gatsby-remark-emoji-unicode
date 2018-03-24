const emoji = require('node-emoji')
const Promise = require('bluebird')

exports.mutateSource = async ({ markdownNode }) => {
  markdownNode.internal.content = emoji.emojify(markdownNode.internal.content)
}
