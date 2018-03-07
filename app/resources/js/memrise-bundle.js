/**
 * This file build and invoke all memrise's custom scripts needed for every page
 * on document ready.
 */
(function (M) {
    // Raven reports js errors, so load it first
    require('./configs/raven')(M, Raven);

    // polyfills to silence sentry errors
    require('./utils/polyfills')();

    // i18n goes first
    require('./configs/i18n')($, M, i18n);

    // Plugins
    require('./plugins/jquery/jquery.cursorPosition')($);
    require('./plugins/jquery/jquery.dataAttr')($, _);
    require('./plugins/jquery/jquery.getUrlVar')($);
    require('./plugins/jquery/jquery.loadIfNDefScript')($, M, _);
    require('./plugins/lodash/observer')(_);
    require('./plugins/handlebars/helpers')($, _, Handlebars, M);

    // Configs
    require('./configs/csrf')($, M, m, Cookies);
    require('./configs/sounds')(soundManager, M);
    require('./configs/facebook')($, M);
    require('./configs/segment')(M);
    require('./configs/moment-locales');
    window.KEY_CODES = require('./configs/key-codes');
    window.uuidV4 = require('uuid/v4');
    M.CONSTANTS = require('./configs/constant-vars');

    // Our global apps
    window.datetime = require('./apps/datetime')(_);
    M.renderer = require('./apps/renderer')($, M, _, Handlebars, markdown);
    require('./apps/header')($, M);
    require('./apps/video-player')($, videojs);
    require('./apps/audio-player')($, M, soundManager);
    require('./apps/social/sharing')($, M);

    // UI components
    require('./ui/buttons')($);
    require('./ui/modal')($, M);
    require('./ui/slideshow')(_, $, M, Class);
    require('./ui/whitebox')($, M);
    require('./ui/lang-changer.js')($, M);

    // garden apps
    require('../../garden/static/garden/js/courses')(_, $, M);
    M.leaderboard = require('../../garden/static/garden/js/leaderboard')($, M, m, _);
    require('../../garden/static/garden/js/mems')($, M, _, Handlebars);
    require('../../garden/static/garden/js/memstream')(Class, _, $, M);
    require('../../garden/static/garden/js/profile')($, M);
    require('../../garden/static/garden/js/users')($, M);
    require('../../garden/static/garden/js/learning-preferences')($, M);
    require('../../garden/static/garden/js/learning-performance')($, M);
    require('../../garden/static/garden/js/mem-editor/base')($, M);
    require('../../garden/static/garden/js/ui/hovercard')(_, Class, $, M);
    require('../../garden/static/garden/js/ui/modal-slides')(_, Class, $, M, KEY_CODES);

    // analytics apps
    require('../../accounts/static/accounts/js/analytics')($, M);
    require('../../accounts/static/accounts/js/payment/analytics')($, M);
}(MEMRISE));
