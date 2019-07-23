```
<!-- Place where you want the widget to display -->
<div id="rp-root"></div>

<!-- Place before your last </body> tag -->
<!-- Squarespace users: Settings > Advanced > Code Injection > FOOTER -->
<script type="text/javascript" src="https://getradplaid.com/widget/index.js"></script>
<script type="text/javascript">
  (function () {
    if (typeof EmbeddableWidget !== 'undefined') {
      EmbeddableWidget.mount({

      	// Element ID to place widget
        parentElement: '#rp-root',

        // Theme (ie. light, dark, color)
        theme: 'light',

        // Widget Title (Optional)
        title: '',

        // Optional. Uses window height if not provided
        maxHeight: '80vh',

        // Show Query
        query: '',
        venue: '',
        location: 'Portland, ME',
        cost: '',
        tag: '',
        genre: '',

        // Style Adjustments
        primaryColor: '',
        accentColor: '',
        keylineColor: '',
        buttonTextColor: '',
        buttonBackground: '',
        logoColor: '',
      })
    }
  })()
</script>
```
