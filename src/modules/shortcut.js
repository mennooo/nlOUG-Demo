/* global demo apex $ */
demo.shortcut = {}

;(() => {
  function showHelp () {
    apex.server.process('get_help_url', {}, {
      dataType: 'text'
    })
      .then((url) => {
        apex.navigation.redirect(url)
      })
  };

  // add the shortcut on pageload
  $(document).ready(() => {
    apex.actions.add({
      name: 'show-help',
      label: 'Show help',
      action: showHelp,
      shortcut: 'Alt+H'
    })
  })
})()
