export const asyncApiStyles = `
  .capitalize {
    text-transform: capitalize;
  }
  .text-sm {
    font-size: 0.875rem;
  }
  .text-teal {
    color: #4dc0b5;
  }
  .text-red {
    color: #c53030;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-italic {
    font-style: italic;
  }
  .px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .p-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .p-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .flex {
    display: flex;
  }
  .flex-1 {
    flex: 1 1 0%;
  }
  .no-underline {
    text-decoration: none;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .normal-case {
    text-transform: none;
  }
  .text-black {
    color: #22292f;
  }
  .text-white {
    color: #fff;
  }
  .text-gray-600 {
    color: #718096;
  }
  .my-0 {
    margin-top: 0;
    margin-bottom: 0;
  }
  .ml-2 {
    margin-left: 0.5rem;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .bg-yellow-dark {
    background-color: #f2d024;
  }
  .bg-purple-dark {
    background-color: #794acf;
  }
  .bg-red-700 {
    background-color: #c53030;
  }

  /* CURRENT THEME BASED ON KYMA STYLES */

  .asyncapi {
    font-family: sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    background: #ffffff;
  }

  .asyncapi__toggle {
    cursor: pointer;
  }
  .asyncapi__toggle > .asyncapi__toggle-body {
    display: none;
  }

  .asyncapi__toggle--expanded {
    cursor: default;
  }
  .asyncapi__toggle--expanded > .asyncapi__toggle-body {
    display: block;
  }

  .asyncapi__toggle--no-children {
  }
  .asyncapi__toggle--no-children > .asyncapi__toggle-header {
    cursor: default;
  }

  .asyncapi__toggle-header {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .asyncapi__toggle-header-content {
    flex-grow: 1;
    padding: 12px;
  }
  .asyncapi__toggle-header-content > h1,
  .asyncapi__toggle-header-content > h2,
  .asyncapi__toggle-header-content > h3,
  .asyncapi__toggle-header-content > h4 {
    margin: 0;
    padding: 0;
    display: flex;
  }

  .asyncapi__toggle-button {
    border: none;
    background: none;
    height: 100%;
    cursor: pointer;
  }

  .asyncapi__toggle-arrow {
    content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA4IDEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc2IC0zNDM4KSI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCAzMzc4KSI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY4IDU0KSI+Cjxwb2x5Z29uIHBvaW50cz0iMCAwIDI0IDAgMjQgMjQgMCAyNCIvPgo8cG9seWdvbiBwb2ludHM9IjEwIDYgOC41OSA3LjQxIDEzLjE3IDEyIDguNTkgMTYuNTkgMTAgMTggMTYgMTIiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8L2c+CjwvZz4KPC9nPgo8L3N2Zz4KCg==');
    display: inline-block;
    position: relative;
    transform-origin: 50% 50%;
    transition: 0.35s ease;
    cursor: pointer;
  }
  .asyncapi__toggle-arrow--expanded {
    transform: rotate(-90deg);
  }

  .asyncapi__components {
  }

  .asyncapi__anchor {
  }
  .asyncapi__anchor:hover > .asyncapi__anchor-content {
    text-decoration: underline;
  }

  .asyncapi__anchor-content {
    display: inline-block;
  }

  .asyncapi__anchor-icon {
    content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxOCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwNSAtMjg5KSI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCAxMDApIj4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAyIDE4NikiPgo8cG9seWdvbiBwb2ludHM9IjAgMCAyNCAwIDI0IDI0IDAgMjQiLz4KPHBhdGggZD0ibTE5IDE5aC0xNHYtMTRoN3YtMmgtN2MtMS4xMSAwLTIgMC45LTIgMnYxNGMwIDEuMSAwLjg5IDIgMiAyaDE0YzEuMSAwIDItMC45IDItMnYtN2gtMnY3em0tNS0xNnYyaDMuNTlsLTkuODMgOS44MyAxLjQxIDEuNDEgOS44My05LjgzdjMuNTloMnYtN2gtN3oiIGZpbGw9IiMwYjc0ZGUiLz4KPC9nPgo8L2c+CjwvZz4KPC9nPgo8L3N2Zz4KCg==');
    display: inline-block;
    margin-left: 6px;
  }

  .asyncapi__markdown {
  }
  .asyncapi__markdown > div > ul {
    margin: 0;
    padding-left: 16px;
  }
  .asyncapi__markdown > div > p {
    margin: 0;
  }
  .asyncapi__markdown > div > p > code {
    display: inline-block;
    font-weight: bold;
    font-size: 10px;
    line-height: 14px;
    border-radius: 3px;
    padding: 0px 5px;
    text-align: center;
    background: #e2eaf2;
    color: #18873d;
  }

  .asyncapi__table {
    margin: 0 0 20px 0;
    width: 100%;
    border-spacing: 0;
    font-size: 13px;
  }

  .asyncapi__table--nested {
    margin: 10px 10px 10px auto;
    width: calc(100% - 45px);
    border-spacing: 0;
    font-size: 13px;
    border-radius: 5px;
    border: solid 1px #d4d4d4;
    background-color: #f9fafa;
  }

  .asyncapi__table-header {
    width: 100%;
    color: #939698;
    background: #f9fafa;
    text-transform: uppercase;
  }

  .asyncapi__table-header--nested {
    color: #939698;
    border-bottom: solid 1px #d4d4d4;
    font-weight: bold;
    text-align: left;
    padding: 6px 0;
    font-size: 12px;
  }

  .asyncapi__table-header-title {
    line-height: 30px;
  }

  .asyncapi__table-header-title--nested {
    color: #939698;
  }
  .asyncapi__table-header-title--nested > td {
    border-bottom: solid 1px #d4d4d4;
    padding: 8px 20px;
    font-size: 12px;
    color: #818487;
  }

  .asyncapi__table-header-columns {
    font-weight: lighter;
    font-size: 11px;
  }

  .asyncapi__table-header-columns--nested {
    color: #939698;
  }

  .asyncapi__table-header-column {
    padding: 12px;
    text-align: left;
  }

  .asyncapi__table-header-column--nested {
    width: 20%;
    padding: 8px 20px;
    font-size: 12px;
    border-bottom: solid 1px #d4d4d4;
  }

  .asyncapi__table-body {
    color: #000;
  }

  .asyncapi__table-body--nested {
    color: #000;
  }

  .asyncapi__table-row {
  }

  .asyncapi__table-row--nested {
    color: #333;
    border-bottom: solid 1px #d4d4d4;
  }
  .asyncapi__table-row--nested:last-child > td {
    border-bottom: none;
  }

  .asyncapi__table-row-accordion {
    display: none;
  }

  .asyncapi__table-row-accordion--open {
    display: table-row;
  }

  .asyncapi__table-cell {
    padding: 12px;
    vertical-align: top;
    border-bottom: 1px solid #efeff0;
  }
  .asyncapi__table-cell > p {
    margin-top: 0;
  }

  .asyncapi__table-cell--nested {
    padding: 8px 20px;
    vertical-align: top;
    font-size: 13px;
    border-bottom: solid 1px #d4d4d4;
  }

  .asyncapi__tree-space {
    display: inline-block;
    width: 20px;
  }

  .asyncapi__tree-leaf {
    display: inline-block;
    position: relative;
    width: 25px;
  }

  .asyncapi__tree-leaf:before {
    content: '';
    position: absolute;
    top: -15px;
    width: 13px;
    height: 10px;
    border-left: #aaa 2px solid;
    border-bottom: #aaa 2px solid;
    border-radius: 0 0 0 70%;
  }

  .asyncapi__badge {
    display: inline-block;
    font-weight: bold;
    font-size: 11px;
    line-height: 18px;
    border-radius: 3px;
    padding: 0px 5px;
    text-align: center;
    text-transform: uppercase;
    background: #e2eaf2;
  }

  .asyncapi__badge--publish {
    color: #18873d;
  }

  .asyncapi__badge--subscribe {
    color: #107ee3;
  }

  .asyncapi__badge--deprecated {
    margin-left: 10px;
    color: #f59702;
  }

  .asyncapi__badge--required {
    font-size: 9px;
    line-height: 14px;
    color: #f59702;
    border-radius: 3px;
    margin-left: 10px;
  }

  .asyncapi__badge--generated {
    font-size: 9px;
    line-height: 14px;
    color: #18873d;
    border-radius: 3px;
    margin-left: 10px;
  }

  .asyncapi__tag {
    display: inline-block;
    mix-blend-mode: multiply;
    border-radius: 4px;
    background-color: #e2eaf2;
    font-size: 11px;
    font-family: sans-serif;
    text-transform: uppercase;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #73787d;
    padding: 3px 8px;
    margin: 0 5px 0 0;
  }

  .asyncapi__code {
    border: solid 1px rgba(137, 145, 154, 0.675);
    border-radius: 5px;
    background: #fff;
  }

  .asyncapi__code-header {
    padding: 12px 20px;
    border-bottom: 1px solid rgba(137, 145, 154, 0.675);
  }

  .asyncapi__code-header > h4 {
    margin: 0;
    color: #32363a;
    font-size: 13px;
  }

  .asyncapi__code-pre {
    overflow-x: auto;
    margin: 0;
    font-size: 13px;
    padding: 12px;
    background: #fafafa;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .asyncapi__code-body {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    margin: 0;
    font-size: 12px;
  }

  .asyncapi__info {
    background: #fff;
    border-radius: 5px;
    padding: 16px;
    border: solid 1px rgba(151, 151, 151, 0.26);
  }

  .asyncapi__info-header-main {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }
  .asyncapi__info-header-main > h1 {
    flex-grow: 1;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .asyncapi__collapse-button {
    border-radius: 0.25rem;
    border: 1px solid #0071d4;
    display: inline-block;
    color: #0b74de;
    font-weight: 700;
    transition: all 0.125s ease-in;
    padding: 10px 12px;
    font-size: 14px;
    cursor: pointer;
  }
  .asyncapi__collapse-button:hover {
    background-color: #085caf;
    color: #fff;
  }
  .asyncapi__collapse-button:focus {
    outline: none;
  }

  .asyncapi__info-header-version {
    display: inline-block;
    margin-left: 6px;
  }

  .asyncapi__info-description {
  }

  .asyncapi__info-list {
    margin: 0 0 20px 0;
    padding: 0;
    list-style-type: none;
  }
  .asyncapi__info-list > li {
    border-radius: 0.25rem;
    border: 1px solid #0071d4;
    margin: 6px 6px 0 0;
    display: inline-block;
    color: #0b74de;
    font-weight: 500;
    transition: all 0.125s ease-in;
  }
  .asyncapi__info-list > li:hover {
    background-color: #085caf;
  }
  .asyncapi__info-list > li a {
    padding: 3px 12px;
    display: inline-block;
    text-decoration: none;
    color: #0b74de;
    transition: all 0.125s ease-in;
  }
  .asyncapi__info-list > li:hover,
  .asyncapi__info-list > li:hover a {
    color: #fff;
  }
  .asyncapi__info-list > li:hover .asyncapi__anchor-icon {
    filter: invert(100%) grayscale(100%) brightness(200%);
  }
  .asyncapi__info-list .asyncapi__anchor:hover > .asyncapi__anchor-content {
    text-decoration: none;
  }

  .asyncapi__messages {
  }
  .asyncapi__messages > div {
    margin-top: 24px;
    background: #fff;
    border-radius: 5px;
    padding: 16px;
    border: solid 1px rgba(151, 151, 151, 0.26);
  }

  .asyncapi__messages-toggle .asyncapi__toggle-header-content {
    padding: 0;
  }
  .asyncapi__messages-toggle--expanded > .asyncapi__toggle-header {
    padding-bottom: 12px;
  }

  .asyncapi__messages-header {
  }
  .asyncapi__messages-header > h2 {
    margin: 0 0 24px 0;
  }

  .asyncapi__messages-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .asyncapi__messages-list-item {
    margin-bottom: 16px;
  }
  .asyncapi__messages-list-item:last-child {
    margin-bottom: 0;
  }

  .asyncapi__messages-oneOf-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .asyncapi__messages-oneOf-list-item {
  }

  .asyncapi__message-raw-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .asyncapi__message-raw-list-item {
  }
  .asyncapi__message {
    position: relative;
    border-radius: 4px;
    border: solid 1px rgba(151, 151, 151, 0.26);
    background-color: #ffffff;
  }
  .asyncapi__message:last-child {
    margin-bottom: 0;
  }

  .asyncapi__message-header {
    background-color: #fafafa;
    padding: 0px;
  }
  .asyncapi__message-header-title > h3 {
    color: #0b74de;
    padding: 12px;
    margin: 0px;
  }

  .asyncapi__message-header-title {
    background-color: #fafafa;
  }

  .asyncapi__message-header-summary {
    font-size: 14px;
    font-weight: 500;
    border-top: solid 1px rgba(151, 151, 151, 0.26);
    padding: 12px;
  }

  .asyncapi__message-header-deprecated-badge {
  }

  .asyncapi__message-summary {
    padding: 12px;
  }

  .asyncapi__message-description {
    padding: 12px;
    font-size: 14px;
    border-top: solid 1px rgba(151, 151, 151, 0.26);
  }

  .asyncapi__message-headers {
  }

  .asyncapi__message-headers-header {
    color: #32363a;
    background-color: #fafafa;
    border-top: solid 1px rgba(151, 151, 151, 0.26);
  }
  .asyncapi__message-headers-header > h4 {
    padding: 12px;
    margin: 0;
  }

  .asyncapi__message-headers-schema {
    margin: 0;
  }
  .asyncapi__message-headers-schema > .asyncapi__schema {
    padding: 0;
    border: none;
  }
  .asyncapi__message-headers-schema > .asyncapi__schema:before {
    content: '';
    position: relative;
    border: none;
  }

  .asyncapi__message-payload-oneOf {
  }

  .asyncapi__message-payload-toggle > .asyncapi__message-payload-header {
    padding: 12px;
    border: none;
  }
  .asyncapi__message-payload-toggle .asyncapi__message-payload-header h4 {
    padding: 0;
  }
  .asyncapi__message-payload-toggle .asyncapi__message-payload-header {
    border: none;
    background-color: inherit;
  }

  .asyncapi__message-payload-oneOf-header {
    color: #32363a;
    background-color: #fafafa;
  }
  .asyncapi__message-payload-oneOf-header > h4 {
    padding: 12px;
    margin: 0;
  }

  .asyncapi__message-payload-oneOf-list {
    margin: 0;
    padding: 16px;
    list-style-type: none;
  }

  .asyncapi__message-payload-oneOf-list-item {
    margin-bottom: 16px;
  }
  .asyncapi__message-payload-oneOf-list-item:last-child {
    margin-bottom: 0;
  }
  .asyncapi__message-payload-oneOf-list-item .asyncapi__message-payload {
    position: relative;
    border-radius: 4px;
    border: solid 1px rgba(151, 151, 151, 0.26);
    background-color: #ffffff;
  }
  .asyncapi__message-payload-oneOf-list-item
    .asyncapi__message-payload:last-child {
    margin-bottom: 0;
  }

  .asyncapi__message-payload-anyOf {
  }

  .asyncapi__message-payload-anyOf-header {
    color: #32363a;
    background-color: #fafafa;
  }
  .asyncapi__message-payload-anyOf-header > h4 {
    padding: 12px;
    margin: 0;
  }

  .asyncapi__message-payload-anyOf-list {
    margin: 0;
    padding: 16px;
    list-style-type: none;
  }

  .asyncapi__message-payload-anyOf-list-item {
    margin-bottom: 16px;
  }
  .asyncapi__message-payload-anyOf-list-item:last-child {
    margin-bottom: 0;
  }
  .asyncapi__message-payload-anyOf-list-item .asyncapi__message-payload {
    position: relative;
    border-radius: 4px;
    border: solid 1px rgba(151, 151, 151, 0.26);
    background-color: #ffffff;
  }
  .asyncapi__message-payload-anyOf-list-item
    .asyncapi__message-payload:last-child {
    margin-bottom: 0;
  }

  .asyncapi__message-payload {
    margin: 0;
  }

  .asyncapi__message-payload-header {
    color: #32363a;
    background-color: #fafafa;
    border-top: solid 1px rgba(151, 151, 151, 0.26);
  }
  .asyncapi__message-payload-header > h4 {
    padding: 12px;
    margin: 0;
  }

  .asyncapi__message-payload-schema {
    margin: 0;
  }
  .asyncapi__message-payload-schema > .asyncapi__schema {
    padding: 0;
    border: none;
  }
  .asyncapi__message-payload-schema > .asyncapi__schema:before {
    content: '';
    position: relative;
    border: none;
  }

  .asyncapi__message-tags {
    margin: 20px 0;
  }

  .asyncapi__message-tags-header {
    color: #32363a;
  }
  .asyncapi__message-tags-header > h4 {
    margin: 0 0 8px 0;
  }

  .asyncapi__message-tags-list {
  }

  .asyncapi__message-tags-list-item {
  }

  .asyncapi__schemas {
  }
  .asyncapi__schemas > div {
    margin-top: 24px;
    background: #fff;
    border-radius: 5px;
    padding: 16px;
    border: solid 1px rgba(151, 151, 151, 0.26);
  }

  .asyncapi__schemas-header {
  }

  .asyncapi__schemas-toggle .asyncapi__toggle-header-content {
    padding: 0;
  }
  .asyncapi__schemas-toggle--expanded .asyncapi__toggle-header {
    padding-bottom: 12px;
  }

  .asyncapi__schemas-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .asyncapi__schemas-list-item {
    margin-bottom: 16px;
  }
  .asyncapi__schemas-list-item:last-child {
    margin-bottom: 0;
  }

  .asyncapi__schema {
    position: relative;
    border-radius: 4px;
    border: solid 1px rgba(151, 151, 151, 0.26);
    background-color: #ffffff;
  }
  .asyncapi__schema:last-child {
    margin-bottom: 0;
  }

  .asyncapi__schema-header {
    padding: 12px;
  }

  .asyncapi__schema-header-title {
    font-size: 14px;
  }

  .asyncapi__schema-table {
    border-top: solid 1px rgba(151, 151, 151, 0.26);
  }
  .asyncapi__schema-table > table {
    margin: 0;
  }

  .asyncapi__schema-example {
    padding: 16px;
  }

  .asyncapi__schema-example-header {
  }

  .asyncapi__schema-example-header-title {
  }

  .asyncapi__schema-example-header-generated-badge {
    display: inline-block;
  }

  .asyncapi__security {
    margin-top: 24px;
    background: #fff;
    border-radius: 5px;
    padding: 16px;
  }

  .asyncapi__security-header {
  }
  .asyncapi__security-header > h2 {
    margin: 0 0 24px 0;
  }

  .asyncapi__security-table {
    margin: 0;
  }

  .asyncapi__servers {
  }
  .asyncapi__servers > div {
    margin-top: 24px;
    background: #fff;
    border-radius: 5px;
    padding: 16px;
    border: solid 1px rgba(151, 151, 151, 0.26);
  }

  .asyncapi__servers-toggle .asyncapi__toggle-header-content {
    padding: 0;
  }
  .asyncapi__servers-toggle--expanded .asyncapi__toggle-header {
    padding-bottom: 12px;
  }

  .asyncapi__servers-header {
  }
  .asyncapi__servers-header > h2 {
    margin: 0 0 24px 0;
  }

  .asyncapi__servers-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .asyncapi__servers-list-item {
    margin-bottom: 16px;
  }
  .asyncapi__servers-list-item:last-child {
    margin-bottom: 0;
  }

  .asyncapi__server {
    position: relative;
    border-radius: 4px;
    border: solid 1px rgba(151, 151, 151, 0.26);
    background-color: #ffffff;
  }

  .asyncapi__server-header {
    padding: 12px;
  }

  .asyncapi__server-header-stage {
    color: #107ee3;
    margin-right: 6px;
  }

  .asyncapi__server-header-protocol {
    color: #18873d;
    margin-right: 6px;
  }

  .asyncapi__server-description {
    border-top: solid 1px rgba(151, 151, 151, 0.26);
    padding: 12px;
  }

  .asyncapi__servers-table {
    margin-bottom: 0;
  }
  .asyncapi__servers-table > .asyncapi__table {
    margin: 0;
  }

  .asyncapi__server-variables {
  }

  .asyncapi__server-variables-header {
    color: #32363a;
    background-color: #fafafa;
    border-top: solid 1px rgba(151, 151, 151, 0.26);
  }
  .asyncapi__server-variables-header > h4 {
    padding: 12px;
    margin: 0;
  }

  .asyncapi__server-variables-table {
    border-top: solid 1px rgba(151, 151, 151, 0.26);
  }
  .asyncapi__server-variables-table > table {
    margin: 0;
  }
  .asyncapi__server-variables-table .asyncapi__table-body > tr:last-child td {
    border-bottom: none;
  }

  .asyncapi__server-variables-table-cell {
    padding: 0;
    border-bottom: none;
  }

  .asyncapi__server-expand-icon {
    display: inline-block;
    position: relative;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    transform-origin: 50% 50%;
    transition: 0.5s ease;
    cursor: pointer;
  }
  .asyncapi__server-expand-icon:before {
    content: '';
    font-family: sans-serif;
    position: absolute;
    color: #0071d4;
    font-size: 12px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .asyncapi__server-expand-icon--open {
    transform: rotate(90deg);
  }

  .asyncapi__server-variables-enum-list {
    margin: 0 0 0 15px;
    padding: 0;
  }

  .asyncapi__server-variables-enum-list-item {
  }

  .asyncapi__server-security {
  }

  .asyncapi__server-security-header {
    color: #32363a;
    background-color: #fafafa;
    border-top: solid 1px rgba(151, 151, 151, 0.26);
  }
  .asyncapi__server-security-header > h4 {
    padding: 12px;
    margin: 0;
  }

  .asyncapi__server-security-table {
    border-top: solid 1px rgba(151, 151, 151, 0.26);
  }
  .asyncapi__server-security-table > table {
    margin: 0;
  }
  .asyncapi__server-security-table .asyncapi__table-body > tr:last-child td {
    border-bottom: none;
  }

  .asyncapi__server-security-table-cell {
    padding: 0;
    border-bottom: none;
  }

  .asyncapi__server-security-flows-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .asyncapi__server-security-flows-list a {
    color: #0b74de;
  }

  .asyncapi__server-security-flows-list-item {
    margin-top: 12px;
  }
  .asyncapi__server-security-flows-list-item:first-child {
    margin-top: 0;
  }

  .asyncapi__server-security-flow {
    background: #fafafa;
    border: 1px solid #dae1e7;
    padding: 12px;
    border-radius: 5px;
  }

  .asyncapi__server-security-flow-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .asyncapi__server-security-flow-list-item {
    padding: 3px 0;
  }
  .asyncapi__server-security-flow-list-item > span {
    margin-left: 12px;
  }
  .asyncapi__server-security-flow-list-item > a {
    margin-left: 12px;
  }

  .asyncapi__server-security-flows-table-cell {
    border-bottom: solid 1px #d4d4d4;
    padding: 12px;
  }

  .asyncapi__server-security-oauth2 {
    border-bottom: none;
  }
  .asyncapi__server-security-oauth2 > td {
    border-bottom: none;
  }

  .asyncapi__server-security-scopes-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: inline-block;
    margin-left: 6px;
  }

  .asyncapi__server-security-scopes-list-item {
    display: inline-block;
    margin-right: 6px;
  }

  .asyncapi__server-security-scope {
    display: inline-block;
    font-weight: bold;
    font-size: 11px;
    line-height: 18px;
    border-radius: 3px;
    padding: 0px 5px;
    text-align: center;
    text-transform: uppercase;
    background: #e2eaf2;
    color: #18873d;
  }

  .asyncapi__channels {
  }
  .asyncapi__channels > div {
    margin-top: 24px;
    background: #fff;
    border-radius: 5px;
    padding: 16px;
    border: solid 1px rgba(151, 151, 151, 0.26);
  }

  .asyncapi__channels-toggle .asyncapi__toggle-header-content {
    padding: 0;
  }
  .asyncapi__channels-toggle--expanded .asyncapi__toggle-header {
    padding-bottom: 12px;
  }

  .asyncapi__channels-header {
  }
  .asyncapi__channels-header > h2 {
    margin: 0 0 24px 0;
  }

  .asyncapi__channels-list {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  .asyncapi__channels-list-item {
    margin-bottom: 16px;
  }
  .asyncapi__channels-list-item:last-child {
    margin-bottom: 0;
  }

  .asyncapi__channel {
    position: relative;
    border-radius: 4px;
    border: solid 1px rgba(151, 151, 151, 0.26);
    background-color: #ffffff;
  }

  .asyncapi__channel-header {
    padding: 12px;
  }
  .asyncapi__channel-header > h3 {
    color: #0b74de;
    font-size: 15px;
  }

  .asyncapi__channel-header-badges {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: inline-block;
  }

  .asyncapi__channel-header-badges > li {
    display: inline-block;
    margin-right: 6px;
  }

  .asyncapi__channel-header-badges-deprecated-badge {
    display: inline-block;
    margin-right: 6px;
  }

  .asyncapi__channel-header-badges-publish-badge {
    display: inline-block;
    margin-right: 6px;
  }

  .asyncapi__channel-header-badges-subscribe-badge {
    display: inline-block;
    margin-right: 6px;
  }

  .asyncapi__channel-header-title {
    font-size: 14px;
  }

  .asyncapi__channel-operations {
  }

  .asyncapi__channel-operations .asyncapi__message {
    margin: 12px;
  }

  .asyncapi__channel-operations-header {
    color: #32363a;
    background-color: #fafafa;
    border-top: solid 1px rgba(151, 151, 151, 0.26);
  }
  .asyncapi__channel-operations-header > h4 {
    padding: 12px;
    margin: 0;
  }

  .asyncapi__channel-operations-header-oneOf {
    border-top: solid 1px rgba(151, 151, 151, 0.26);
  }

  .asyncapi__channel-operations-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .asyncapi__channel-operations-list .asyncapi__messages {
    padding: 16px;
  }
  .asyncapi__channel-operations-list .asyncapi__messages-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .asyncapi__channel-operations-list .asyncapi__messages-list-item {
    margin-bottom: 16px;
  }
  .asyncapi__channel-operations-list .asyncapi__messages-list-item:last-child {
    margin-bottom: 0;
  }
  .asyncapi__channel-operations-list
    .asyncapi__messages-list-item
    .asyncapi__message {
    position: relative;
    border-radius: 4px;
    border: solid 1px rgba(151, 151, 151, 0.26);
    background-color: #ffffff;
  }

  .asyncapi__channel-operations-list-item {
  }

  .asyncapi__channel-operations-subscribe {
  }

  .asyncapi__channel-operation-message > .asyncapi__bindings {
    border-radius: 4px;
    border: solid 1px rgba(151, 151, 151, 0.26);
    margin: 12px;
  }
  .asyncapi__channel-operation-message
    > .asyncapi__bindings
    > .asyncapi__bindings-header
    > h4 {
    margin: 0px;
    border-top: 0px;
  }

  .asyncapi__channel-operation-message-header {
    color: #32363a;
    border-top: solid 1px rgba(151, 151, 151, 0.26);
  }
  .asyncapi__channel-operation-message-header > h4 {
    padding: 12px;
    margin: 0;
  }
  .asyncapi__channel-operation-message-header > h4 > .asyncapi__badge {
    margin-right: 6px;
  }

  .asyncapi__channel-operation-message .asyncapi__message-header-title {
    border-top: 0px;
  }

  .asyncapi__channel-operation-oneOf-subscribe > .asyncapi__bindings {
    border-radius: 4px;
    border: solid 1px rgba(151, 151, 151, 0.26);
    margin: 12px;
  }
  .asyncapi__channel-operation-oneOf-subscribe
    > .asyncapi__bindings
    > .asyncapi__bindings-header
    > h4 {
    margin: 0px;
    border-top: 0px;
  }

  .asyncapi__channel-operation-oneOf-subscribe-header {
    color: #32363a;
    border-top: solid 1px rgba(151, 151, 151, 0.26);
  }
  .asyncapi__channel-operation-oneOf-subscribe-header > h4 {
    padding: 12px;
    margin: 0;
  }
  .asyncapi__channel-operation-oneOf-subscribe-header > h4 > .asyncapi__badge {
    margin-right: 6px;
  }

  .asyncapi__channel-operation-oneOf-subscribe .asyncapi__message-header-title {
    border-top: 0px;
  }

  .asyncapi__channel-operation-oneOf-publish > .asyncapi__bindings {
    border-radius: 4px;
    border: solid 1px rgba(151, 151, 151, 0.26);
    margin: 12px;
  }
  .asyncapi__channel-operation-oneOf-publish
    > .asyncapi__bindings
    > .asyncapi__bindings-header
    > h4 {
    margin: 0px;
    border-top: 0px;
  }

  .asyncapi__channel-operation-oneOf-publish-header {
    color: #32363a;
    border-top: solid 1px rgba(151, 151, 151, 0.26);
  }
  .asyncapi__channel-operation-oneOf-publish-header > h4 {
    padding: 12px;
    margin: 0;
  }
  .asyncapi__channel-operation-oneOf-publish-header > h4 > .asyncapi__badge {
    margin-right: 6px;
  }

  .asyncapi__channel-operation-oneOf-publish .asyncapi__message-header-title {
    border-top: 0px;
  }

  .asyncapi__channel-operation {
  }

  .asyncapi__message-headers {
  }

  .asyncapi__bindings {
  }

  .asyncapi__bindings-header {
    color: #32363a;
  }
  .asyncapi__bindings-header > h4 {
    background-color: #fafafa;
    border-top: solid 1px rgba(151, 151, 151, 0.26);
    border-bottom: solid 1px rgba(151, 151, 151, 0.26);
    padding: 12px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-top: 10px;
  }

  .asyncapi__binding {
  }
  .asyncapi__binding-protocol {
    color: #18873d;
    margin-right: 6px;
  }

  .asyncapi__binding-table {
    border-top: solid 1px rgba(151, 151, 151, 0.26);
  }
  .asyncapi__binding-table > table {
    margin: 0;
  }
  .asyncapi__binding-field-name {
    font-weight: bold;
    padding-left: 0px;
  }

  .asyncapi__binding-field-schema {
    margin: 0;
  }
  .asyncapi__binding-field-schema > .asyncapi__schema {
    padding: 0;
    border: none;
  }

  .asyncapi__binding-field-schema .asyncapi__schema-table {
    border-top: none;
  }
  .asyncapi__binding-field-schema > .asyncapi__schema:before {
    content: '';
    position: relative;
    border: none;
  }
  .asyncapi__channel-operation-description {
    padding: 12px 12px 0;
  }

  .asyncapi__channel-description {
    padding: 0 16px 16px;
  }

  .asyncapi__channel-parameters {
  }

  .asyncapi__channel-parameters-header {
    color: #32363a;
    background-color: #fafafa;
    border-top: solid 1px rgba(151, 151, 151, 0.26);
  }
  .asyncapi__channel-parameters-header > h4 {
    padding: 12px;
    margin: 0;
  }

  .asyncapi__channel-parameters-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .asyncapi__channel-parameters-list-item {
  }

  .asyncapi__channel-parameter {
    position: relative;
  }

  .asyncapi__channel-parameter-header {
  }

  .asyncapi__channel-parameter-header-description {
  }

  .asyncapi__channel-parameter-schema {
  }
  .asyncapi__channel-parameter-schema > .asyncapi__schema {
    padding: 0;
    border: none;
  }
  .asyncapi__channel-parameter-schema > .asyncapi__schema:before {
    content: '';
    position: relative;
    border: none;
  }

  .asyncapi__error {
    background-color: #ffffff;
    border-left: 6px solid #f44336;
    border-radius: 4px;
    color: #32363a;
    font-family: sans-serif;
    font-size: 13px;
    margin-bottom: 24px;
    border: solid 1px rgba(151, 151, 151, 0.26);
  }

  .asyncapi__error-header {
    padding: 16px;
    box-shadow: inset 0 -1px 0 0 rgba(115, 121, 128, 0.15);
    font-weight: bold;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }
  .asyncapi__error-header h2 {
    flex-grow: 1;
    padding: 0;
    margin: 0;
  }
  .asyncapi__error-header > .asyncapi__toggle-header-content {
    padding: 0;
  }

  .asyncapi__error-body {
    font-weight: normal;
    position: relative;
  }

  .asyncapi__error-body-pre {
    margin: 0;
    padding: 12px;
    background-color: #263238;
    white-space: pre-wrap;
    word-break: break-word;
    color: #fff;
    border-bottom-right-radius: 4px;
    font-size: 11px;
  }

  .asyncapi__error-body-code {
    font-family: monospace;
    display: block;
  }

  .asyncapi__enum {
    line-height: 2;
    border-style: solid;
    border-color: #dae1e7;
    border-radius: 0.25rem;
    border-width: 1px;
    padding: 0 0.5rem;
    color: #f6993f;
  }
`;
