// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";
var CONTEXT_MENU_CONTENTS = {
  forSelection: [
    '拨打',
  ],

}

function setUpContextMenus() {
  CONTEXT_MENU_CONTENTS.forSelection.forEach(function (commandId) {
    // chrome.contextMenus.create({
    //   type: "separator",
    //   id: 'sep1',
    //   contexts: ['selection']
    // });
    chrome.contextMenus.create({
      title: commandId + ' "%s"',
      id: commandId,
      contexts: ['selection']
    });
  });
}

chrome.runtime.onInstalled.addListener(function () {
  // When the app gets installed, set up the context menus
  setUpContextMenus();
});

chrome.contextMenus.onClicked.addListener(function (itemData) {
  switch (itemData.menuItemId) {
    case '拨打': {
      let number = itemData.selectionText;
      let url = `https://192.168.11.66:8080/coocenter-api/plugin-asterisk/extension/click-number`;
      let myExtension = '710'

      // let formData = new FormData();
      // formData.append('dst', number);
      // formData.append('src', myExtension);
      // formData.append('limitSec', 99);
      
      // application/x-www-form-urlencoded
      let formData =  new URLSearchParams({
        'dst': number,
        'src': myExtension,
        'limitSec': 99
      })

      fetch(url, {
        body: formData,
        method: "post"
      }).then(r => r.text()).then(result => {
        console.log(result)
      })
    }
  }
});

chrome.storage.local.get(['open'], result => {
  let params = {
    open: result.open,
  };
});
