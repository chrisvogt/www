'use strict';

/** @namespace */
const C1V0 = C1V0 || {
  /**
   * Configuration object.
   *
   * Contains endpoints for site components.
   * @type {Object}
   */
  config: {
    analytics: 'UA-33558417-1',
    projects: 'https://chrisvogt.firebaseio.com/projects.json',
    quotes: 'https://cdn.rawgit.com/chrisvogt/49b51791348a09cbddb0/raw/585d1712885dda5c13d63c17b5e093d543640e42/book-quotes.json',
    social: 'https://chrisvogt.firebaseio.com/profiles.json',
    hours: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D%22https%3A%2F%2Fstats.chrisvogt.me%2Freports%2Fdashboard.json%22&diagnostics=true'
  },

  /** Initializer. */
  init: function() {
    $(document).foundation();

    /**
     * Twitter API
     *
     * @link https://dev.twitter.com/overview/documentation
     */
    window.twttr = (function(d, s, id) {
        let js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
            t._e.push(f);
        };

        return t;
    }(document, 'script', 'twitter-wjs'));

    $(document).foundation({
      "magellan-expedition": {
        active_class: 'active',
        threshold: false,
        destination_threshold: 20,
        throttle_delay: 50,
        fixed_top: 0,
        offset_by_height: true
      }
    });

    /**
     * AnswerDash
     *
     * @link http://www.answerdash.com/
     */
    let AnswerDash;
    ! function(e, t, n, s, a) {
        if (!t.getElementById(s)) {
            let i, r = t.createElement(n),
                c = t.getElementsByTagName(n)[0];
            e[a] || (i = e[a] = function() {
                i.__oninit.push(arguments)
            }, i.__oninit = []), r.type = 'text/javascript', r.async = !0, r.src = 'https://p1.answerdash.com/answerdash.min.js?siteid=831', r.setAttribute('id', s), c.parentNode.insertBefore(r, c)
        }
    }(window, document, 'script', 'answerdash-script', 'AnswerDash');

    /**
     * Instagram via instafeed.js
     *
     * @link http://instafeedjs.com/
     */
    const userFeed = new Instafeed({
      get: 'user',
      userId: '1546421127',
      clientId: '7e07fcf783e746b3a236341049fa3cc0',
      accessToken: '1546421127.1677ed0.6d9d503e95e649aab4232a94e0e1dd6f',
      sortBy: 'most-recent',
      limit: 18,
      template: '<li><a href="{{link}}" class="hvr-shadow-radial" title="View on Instagram"><img src="{{image}}" alt="{{caption}}"></a></li>',
      success: function() {
        $('#photos').removeClass('hidden');
        $('#photos .js-load-more').click(function() {
          if (feed && typeof feed.next === 'function') {
            feed.next()
          };
        });
      },
      error: function(data) {
        console.log(data);
        $('#primary-nav a[href="#photos"]').parent('li').addClass('hidden');
      }
    });
    userFeed.run();
    window.feed = userFeed;
  }
};

C1V0.init();
