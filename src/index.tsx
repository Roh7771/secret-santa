import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './style/main.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/core';
import { App } from './components';

ReactDOM.render(
  <>
    <Global
      styles={css`
        *,
        ::after,
        ::before {
          box-sizing: border-box;
        }

        html {
          font-family: sans-serif;
          line-height: 1.15;
          -webkit-text-size-adjust: 100%;
          -webkit-tap-highlight-color: transparent;
        }

        article,
        aside,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        main,
        nav,
        section {
          display: block;
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Color Emoji';
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #212529;
          text-align: left;
          background-color: #fff;
        }

        [tabindex='-1']:focus:not(:focus-visible) {
          outline: 0 !important;
        }

        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-top: 0;
          margin-bottom: 0.5rem;
        }

        p {
          margin-top: 0;
          margin-bottom: 1rem;
        }

        abbr[data-original-title],
        abbr[title] {
          text-decoration: underline;
          -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
          cursor: help;
          border-bottom: 0;
          -webkit-text-decoration-skip-ink: none;
          text-decoration-skip-ink: none;
        }

        address {
          margin-bottom: 1rem;
          font-style: normal;
          line-height: inherit;
        }

        dl,
        ol,
        ul {
          margin-top: 0;
          margin-bottom: 1rem;
        }

        ol ol,
        ol ul {
          margin-bottom: 0;
        }

        ul ol,
        ul ul {
          margin-bottom: 0;
        }

        dt {
          font-weight: 700;
        }

        dd {
          margin-bottom: 0.5rem;
          margin-left: 0;
        }

        blockquote {
          margin: 0 0 1rem;
        }

        b,
        strong {
          font-weight: bolder;
        }

        small {
          font-size: 80%;
        }

        sub,
        sup {
          position: relative;
          font-size: 75%;
          line-height: 0;
          vertical-align: baseline;
        }

        sub {
          bottom: -0.25em;
        }

        sup {
          top: -0.5em;
        }

        a {
          color: #007bff;
          text-decoration: none;
          background-color: transparent;
        }
        a:hover {
          color: #0056b3;
          text-decoration: underline;
        }
        a:not([href]) {
          color: inherit;
          text-decoration: none;
        }
        a:not([href]):hover {
          color: inherit;
          text-decoration: none;
        }

        code,
        kbd,
        pre,
        samp {
          font-family: SFMono-Regular, Menlo, Monaco, Consolas,
            'Liberation Mono', 'Courier New', monospace;
          font-size: 1em;
        }

        pre {
          margin-top: 0;
          margin-bottom: 1rem;
          overflow: auto;
        }

        figure {
          margin: 0 0 1rem;
        }

        img {
          vertical-align: middle;
          border-style: none;
        }

        svg {
          overflow: hidden;
          vertical-align: middle;
        }

        table {
          border-collapse: collapse;
        }

        caption {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          color: #6c757d;
          text-align: left;
          caption-side: bottom;
        }

        th {
          text-align: inherit;
        }

        label {
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        button {
          border-radius: 0;
          margin: 0;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }
        button:focus {
          outline: 1px dotted;
          outline: 5px auto -webkit-focus-ring-color;
        }

        input,
        optgroup,
        select,
        textarea {
          margin: 0;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }

        button,
        input {
          overflow: visible;
        }

        button {
          text-transform: none;
        }

        select {
          text-transform: none;
          word-wrap: normal;
        }

        [type='button'],
        [type='reset'],
        [type='submit'],
        button {
          -webkit-appearance: button;
        }

        [type='button']:not(:disabled),
        [type='reset']:not(:disabled),
        [type='submit']:not(:disabled),
        button:not(:disabled) {
          cursor: pointer;
        }

        [type='button']::-moz-focus-inner,
        [type='reset']::-moz-focus-inner,
        [type='submit']::-moz-focus-inner,
        button::-moz-focus-inner {
          padding: 0;
          border-style: none;
        }

        input[type='checkbox'],
        input[type='radio'] {
          box-sizing: border-box;
          padding: 0;
        }

        input[type='date'],
        input[type='datetime-local'],
        input[type='month'],
        input[type='time'] {
          -webkit-appearance: listbox;
        }

        textarea {
          overflow: auto;
          resize: vertical;
        }

        fieldset {
          min-width: 0;
          padding: 0;
          margin: 0;
          border: 0;
        }

        legend {
          display: block;
          width: 100%;
          max-width: 100%;
          padding: 0;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
          line-height: inherit;
          color: inherit;
          white-space: normal;
        }

        progress {
          vertical-align: baseline;
        }

        [type='number']::-webkit-inner-spin-button,
        [type='number']::-webkit-outer-spin-button {
          height: auto;
        }

        [type='search'] {
          outline-offset: -2px;
          -webkit-appearance: none;
        }
        [type='search']::-webkit-search-decoration {
          -webkit-appearance: none;
        }

        ::-webkit-file-upload-button {
          font: inherit;
          -webkit-appearance: button;
        }

        output {
          display: inline-block;
        }

        summary {
          display: list-item;
          cursor: pointer;
        }

        template {
          display: none;
        }

        [hidden] {
          display: none !important;
        }
      `}
    />
    <App />
  </>,
  document.getElementById('root'),
);
