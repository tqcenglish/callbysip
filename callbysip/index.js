// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
let app = new Vue({
  el: '#app',
  data: {
    server: "",
    myExtension: "",
  },
  created: function (params) {
    chrome.storage.local.get(['server', 'myExtension'], result => {
        this.server = result.server;
        this.myExtension = result.myExtension;
    });
  },
  mounted: function (params) {

  },
  methods: {
    saveSetting: function () {
      // console.log("save setting", this.server, this.myExtension);
      chrome.storage.local.set({
         server: this.server,
         myExtension: this.myExtension,
        }, () => {
        console.log('save success');
        chrome.runtime.reload();
      });
    }
  }
})