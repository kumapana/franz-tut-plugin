module.exports = (Franz, options) => {
    let first_stmt = $($('#statements .statement')[0]).attr('class');

    function getMessages() {
        const res = $('new-res-notice-text').text().match(/新着レス(\d+)?が個あります/);
        var reply = 0;
        if (res) {
            reply = res[0];
        }

        Franz.setBadge(reply);
    }

    Franz.loop(getMessages);
}