import PageHeader from "./component-library/page-header.vue";
import SuperButton from "./component-library/SuperButton.vue";
import SuperPug from "./component-library/SuperPug.vue";
import emitter from "./lib/emitter";
import "./set-public-path";
import "./global.css";

// You can export Vue components from this file and import them into your microfrontends
export { PageHeader, SuperButton, emitter, SuperPug };
