<<<<<<< HEAD
/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-e43f5367'], (function (workbox) { 'use strict';

  importScripts();
  self.skipWaiting();
  workbox.clientsClaim();
  workbox.registerRoute("/", new workbox.NetworkFirst({
    "cacheName": "start-url",
    plugins: [{
      cacheWillUpdate: async ({
        request,
        response,
        event,
        state
      }) => {
        if (response && response.type === 'opaqueredirect') {
          return new Response(response.body, {
            status: 200,
            statusText: 'OK',
            headers: response.headers
          });
        }
        return response;
      }
    }]
  }), 'GET');
  workbox.registerRoute(/.*/i, new workbox.NetworkOnly({
    "cacheName": "dev",
    plugins: []
  }), 'GET');

}));
//# sourceMappingURL=sw.js.map
=======
if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>n(e,a),o={module:{uri:a},exports:t,require:r};s[a]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"723e10bcdc051ded24b261f1a5ef163b"},{url:"/_next/static/chunks/117-e881abe2c0a0c050.js",revision:"iqCMsnz71vmczi4MPGm6X"},{url:"/_next/static/chunks/972-25f2910cc6db301c.js",revision:"iqCMsnz71vmczi4MPGm6X"},{url:"/_next/static/chunks/app/_not-found/page-d1916c0b16ebe328.js",revision:"iqCMsnz71vmczi4MPGm6X"},{url:"/_next/static/chunks/app/d-day/page-0ef9d0b73efd8325.js",revision:"iqCMsnz71vmczi4MPGm6X"},{url:"/_next/static/chunks/app/layout-5a5c33cf048c9c26.js",revision:"iqCMsnz71vmczi4MPGm6X"},{url:"/_next/static/chunks/app/offline/page-7312570d77cafb7f.js",revision:"iqCMsnz71vmczi4MPGm6X"},{url:"/_next/static/chunks/app/page-18a65119f69904b4.js",revision:"iqCMsnz71vmczi4MPGm6X"},{url:"/_next/static/chunks/app/percentage-cal/page-4dcb198cd40b374b.js",revision:"iqCMsnz71vmczi4MPGm6X"},{url:"/_next/static/chunks/app/working-day/page-f5a78123be07d408.js",revision:"iqCMsnz71vmczi4MPGm6X"},{url:"/_next/static/chunks/fd9d1056-7d9b70e9456442b8.js",revision:"iqCMsnz71vmczi4MPGm6X"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"iqCMsnz71vmczi4MPGm6X"},{url:"/_next/static/chunks/main-90924605306af99f.js",revision:"iqCMsnz71vmczi4MPGm6X"},{url:"/_next/static/chunks/main-app-26f5a19423862029.js",revision:"iqCMsnz71vmczi4MPGm6X"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"iqCMsnz71vmczi4MPGm6X"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"iqCMsnz71vmczi4MPGm6X"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-8658fdbc42bfbbae.js",revision:"iqCMsnz71vmczi4MPGm6X"},{url:"/_next/static/css/fd770f0d86163c29.css",revision:"fd770f0d86163c29"},{url:"/_next/static/iqCMsnz71vmczi4MPGm6X/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/iqCMsnz71vmczi4MPGm6X/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/ads.txt",revision:"20e2f74bd1ef4ec5306aeb89ab232d5a"},{url:"/images/favicon.png",revision:"38f2e20c83081ff371bd7a648b367015"},{url:"/images/icons/icon-128x128.png",revision:"0523bc9937d095647bb75f761178b9f6"},{url:"/images/icons/icon-192x192.png",revision:"8446ccbe52d01ed21fd0266b69f87f62"},{url:"/images/icons/icon-512x512.png",revision:"7254db1ad2a72b2a57e5e71c9d5026f0"},{url:"/images/icons/icon.jpeg",revision:"42889277b3dcf10236befcb20b470e5a"},{url:"/images/preview.jpeg",revision:"42889277b3dcf10236befcb20b470e5a"},{url:"/offline.html",revision:"c4b30cb3e43da632affdcfe905b73cfb"},{url:"/robots.txt",revision:"a1eae90576c7acfaf2c14fb3a7ca2ebb"},{url:"/sitemap.xml",revision:"eab29f788c6f357823f2530cf1781303"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
>>>>>>> refs/remotes/origin/main
