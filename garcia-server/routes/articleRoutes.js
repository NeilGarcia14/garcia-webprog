const express = require('express');
const {
  getArticles,
  getArticleByName,
  createArticle,
  updateArticle,
  deleteArticle,
} = require('../controllers/articleControllers');

const router = express.Router();

router.get('/', getArticles);
router.get('/:name', getArticleByName);
router.post('/', createArticle);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);

module.exports = router;
