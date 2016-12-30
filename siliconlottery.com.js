var Monitor = require('page-monitor');
var url = 'https://siliconlottery.com/collections/lga-1151';
var opt = {
    page: {
        viewportSize: {
            width: 1920,
            height: 1080
        }
    }
};
var monitor = new Monitor(url, opt);
monitor.on('debug', function (data) {
    console.log('[DEBUG] ' + data);
});
monitor.on('error', function (data) {
    console.error('[ERROR] ' + data);
});

monitor.capture(function (code) {
    console.log('[DONE ] ' + (new Date));
});