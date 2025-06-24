const React = require("react")

const Layout = require("./src/components/layouts/layout").default

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents([
    <script
      data-ad-client="ca-pub-1149332608171839"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    />,
  ])

  setPreBodyComponents([
    React.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: `var vglnk = {key: 'de3d3757987fc8a894399a9c82c60612'};
    
        (function(d, t) {
    
            var s = d.createElement(t);
    
                s.type = 'text/javascript';
    
                s.async = true;
    
                s.src = '//cdn.viglink.com/api/vglnk.js';
    
            var r = d.getElementsByTagName(t)[0];
    
                r.parentNode.insertBefore(s, r);
    
        }(document, 'script'));`,
      },
    }),
    React.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: `
          (() => {    
            window.__onThemeChange = function() {};                
            function setTheme(newTheme) {                  
              window.__theme = newTheme;                  
              preferredTheme = newTheme;                  
              document.body.className = newTheme;                 
              window.__onThemeChange(newTheme);                
            }

            let preferredTheme
            try {
              preferredTheme = localStorage.getItem('theme')
            } catch (err) {}

            window.__setPreferredTheme = newTheme => {
              setTheme(newTheme)
              try {
                localStorage.setItem('theme', newTheme)
              } catch (err) {}
            }

            let darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
            darkQuery.addListener(e => {
              window.__setPreferredTheme(e.matches ? 'light' : 'dark')
            })

            setTheme(preferredTheme || (darkQuery.matches ? 'light' : 'dark'))
          })()
        `,
      },
    }),
  ])
}
