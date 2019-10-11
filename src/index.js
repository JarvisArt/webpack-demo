import _ from 'loadsh';
import $ from 'jquery';

const dom = $('<div>');
dom.html(_.join(['Jarvis', 'Art', 'to'], '-'));
$('body').append(dom)