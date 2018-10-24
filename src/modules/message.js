/* global demo apex */
demo.message = {}

;((message) => {
  message.helloWorld = () => {
    apex.message.alert('hello world')
  }
})(demo.message)
