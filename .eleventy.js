var moment = require('moment');
const util = require('util');


module.exports = function ( conf ) {
    // Format a date using supplied formatting, or use the default one
    conf.addFilter("formatDate", 
    (value, format = "dd Do, MMM YYYY") => {
        return moment(value).format(format);
    })

    // Get the keys from an object 
    conf.addFilter("getKeysNumber",
    (obj) => {
        return Object.keys(obj).length;
    });

    // Setting up assets copy
    conf.addPassthroughCopy("public/media");
    conf.addPassthroughCopy("public/css");
    conf.addPassthroughCopy("public/assets");

    // Setting un markdown interpreter
    let md = require('markdown-it')({
        html:         true,        // Enable HTML tags in source
        xhtmlOut:     true,        // Use '/' to close single tags (<br />).
                                    // This is only for full CommonMark compatibility.
        breaks:       true,        // Convert '\n' in paragraphs into <br>
        langPrefix:   'lang-',  // CSS language prefix for fenced blocks. Can be
                                    // useful for external highlighters.
        linkify:      false,        // Autoconvert URL-like text to links
      
        // Enable some language-neutral replacement + quotes beautification
        typographer:  true,
      
        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: '“”‘’',
      
        // Highlighter function. Should return escaped HTML,
        // or '' if the source string is not changed and should be escaped externally.
        // If result starts with <pre... internal wrapper is skipped.
        // highlight: function (/*str, lang*/) { return ''; }
    })
        //.use(require('markdown-it-container'), 'name', { })
        .use(require('markdown-it-ins'))
        .use(require('markdown-it-mark'));

        conf.addWatchTarget("./public/");

    return {
        dir : {
            input : "_src",
            output : "_build",
            includes : "_includes",
            data : "_data"
        },
        markdownTemplateEngine: "njk",
        templateFormats : ["md", "njk"]
    };
};