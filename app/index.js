/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

import $ from 'jquery';

// ================================
// START YOUR APP HERE
// ================================

// info-box toggle

$('.program-info__button').on('click', function (e) {
    const buttonEl = $(this).parent().find('.program-info__button');

    $(this).parent().toggleClass('program-info__open');
    buttonEl.toggleClass('hidden');

});