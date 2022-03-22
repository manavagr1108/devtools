import { PrefsHelper } from "devtools/client/shared/prefs";
const { asyncStoreHelper } = require("devtools/shared/async-store-helper");

import { pref } from "devtools/shared/services";

// app prefs.
pref("devtools.event-listeners-breakpoints", true);
pref("devtools.toolbox-size", "50%");
pref("devtools.view-mode", "non-dev");
pref("devtools.dev-secondary-panel-height", "375px");
pref("devtools.maxHitsDisplayed", 500);
pref("devtools.maxHitsEditable", 200);
pref("devtools.logTelemetryEvent", false);
pref("devtools.showRedactions", false);
pref("devtools.disableLogRocket", false);
pref("devtools.listenForMetrics", false);
pref("devtools.disableCache", false);
pref("devtools.sidePanelSize", "240px");

// app features
pref("devtools.features.columnBreakpoints", false);
pref("devtools.features.darkMode", false);
pref("devtools.features.httpBodies", true);
pref("devtools.features.videoPlayback", false);
pref("devtools.features.commentAttachments", false);
pref("devtools.features.networkRequestComments", false);
pref("devtools.features.useMultipleControllers", false);
pref("devtools.features.multipleControllerUseSnapshots", false);

export const prefs = new PrefsHelper("devtools", {
  eventListenersBreakpoints: ["Bool", "event-listeners-breakpoints"],
  toolboxSize: ["String", "toolbox-size"],
  viewMode: ["String", "view-mode"],
  secondaryPanelHeight: ["String", "dev-secondary-panel-height"],
  maxHitsDisplayed: ["Int", "maxHitsDisplayed"],
  maxHitsEditable: ["Int", "maxHitsEditable"],
  logTelemetryEvent: ["Bool", "logTelemetryEvent"],
  showRedactions: ["Bool", "showRedactions"],
  disableLogRocket: ["Bool", "disableLogRocket"],
  sidePanelSize: ["String", "sidePanelSize"],
  listenForMetrics: ["Bool", "listenForMetrics"],
  disableCache: ["Bool", "disableCache"],
});

export const features = new PrefsHelper("devtools.features", {
  useMultipleControllers: ["Bool", "useMultipleControllers"],
  multipleControllerUseSnapshots: ["Bool", "multipleControllerUseSnapshots"],
  columnBreakpoints: ["Bool", "columnBreakpoints"],
  darkMode: ["Bool", "darkMode"],
  httpBodies: ["Bool", "httpBodies"],
  videoPlayback: ["Bool", "videoPlayback"],
  commentAttachments: ["Bool", "commentAttachments"],
  networkRequestComments: ["Bool", "networkRequestComments"],
});

export const asyncStore = asyncStoreHelper("devtools", {
  eventListenerBreakpoints: ["event-listener-breakpoints", undefined],
  replaySessions: ["replay-sessions", {}],
  commandHistory: ["command-history", []],
});
