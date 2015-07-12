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
    res.view('admin/pages');
  },

  articles: function (req, res) {
    res.view('admin/articles');
  }
};

