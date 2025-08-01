
function startBot() { fetch('/start', {method: 'POST'}).then(() => alert('Bot started')); }
function stopBot() { fetch('/stop', {method: 'POST'}).then(() => alert('Bot stopped')); }
function restartBot() { fetch('/restart', {method: 'POST'}).then(() => alert('Bot restarted')); }
