const { createProxyMiddleware } = require('http-proxy-middleware');
console.log('===================================================');
console.log(`即将代理请求到:http://xxxxxx`);
console.log('===================================================');

module.exports = function(app) {
    app.use(
        '/r',
        createProxyMiddleware({
            target: 'http://xxxxxx',
            changeOrigin: true,
            cookieDomainRewrite: { 'http://xxxxxx': 'http://localhost:3000' },
            // onProxyRes: function(proxyRes, req, res) {
            //     var cookies = proxyRes.headers['set-cookie'];
            //     var cookieRegex = /domain=\.12301\.local/i;
            //     if (cookies) {
            //         var newCookie = cookies.map(function(cookie) {
            //             if (cookieRegex.test(cookie)) {
            //                 return cookie.replace(cookieRegex, 'domain=localhost');
            //             }
            //             return cookie;
            //         });
            //         delete proxyRes.headers['set-cookie'];
            //         proxyRes.headers['set-cookie'] = newCookie;
            //         cookies = newCookie.join(' ');
            //     }
            // },
        }),
    );
};
