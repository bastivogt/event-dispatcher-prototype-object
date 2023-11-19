"use strict";

import Counter from "./sevo/Counter.js";

const counter = Object.create(Counter);
counter.init();

counter.addListener(Counter.getEvents().ON_COUNTER_STARTED, (evt) => {
  console.log(evt.eventType, "count:", evt.target.getCount());
});

counter.addListener(Counter.getEvents().ON_COUNTER_CHANGED, (evt) => {
  console.log(evt.eventType, "count:", evt.target.getCount());
});

counter.addListener(Counter.getEvents().ON_COUNTER_FINISHED, (evt) => {
  console.log(evt.eventType, "count:", evt.target.getCount());
});

counter.run();

console.log(counter);
