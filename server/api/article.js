const { Article } = require('../mongoose/model')

// CREATE
const articleCreate = async (req, res) => {
  const { content } = req.body
  const newArticle = await Article({ content })
  const saveRequest = await newArticle.save()
  console.log('create Article', saveRequest)
  res.send(saveRequest)
}

// READ
const articleRead = async (req, res) => {
  const articles = await Article.find({})
  res.send(articles)
}
// FindOne
const articleFindOne = async (req, res) => {
  const { id } = req.params
  const articles = await Article.findById(id)
  console.log('FIND ONE', articles)
  res.send(articles)
}

// UPDATE
const articleUpdate = async (req, res) => {
  const { id, content } = req.body
  console.log(` { id, content } = ${id}, ${content} `)
  const updatedArticle = await Article.findByIdAndUpdate(id, { content })
  console.log('updatedArticle = ', updatedArticle)
  res.send(updatedArticle)
}

// DELETE
const articleDelete = async (req, res) => {
  const { id } = req.params
  const deletedArticles = await Article.findByIdAndDelete(id)
  res.send(deletedArticles)
}

module.exports = {
  articleCreate,
  articleRead,
  articleFindOne,
  articleUpdate,
  articleDelete,
}
