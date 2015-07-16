/**
 * AdminController
 *
 * @description :: Server-side logic for managing Admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
    res.view('admin/index');
  },

  pages: function (req, res) {
    var idVal = parseInt(req.param('id'));
    if (req.method == 'GET' && idVal === 0) {
      res.view('admin/page', {
        page: {}
      });
    } else if (req.method == 'POST' && idVal === 0) {
      var params = req.params.all();
      Page.create({
        title: params.title,
        description: params.description,
        slug: params.slug
      }).exec(function (err, page) {
        res.redirect('/admin/pages/' + page.id);
      });
    } else if (req.method == 'POST' && idVal > 0) {
      // Save edit
    } else if (req.param('id') > 0) {
      var page = Page
        .findOne({
          id:idVal
        }).then(function (page) {
          res.view('admin/page', {page: page.toJSON()});
        }).catch(function(err) {

        }
      );
    } else {
      // List pages
      res.view('admin/pages', {
        page: {}
      });
    }
  },

  articles: function (req, res) {
    res.view('admin/articles', {
      article: {}
    });
  }
};

