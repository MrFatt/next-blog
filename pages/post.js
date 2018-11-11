import { withRouter } from "next/router";
import { Component } from "react";

import {sanitizePost } from "../utils";
import MyLayout from "../components/MyLayout";

const markdownIt = require("markdown-it");
const hljs = require("highlight.js");

class Post extends Component {
  constructor() {
    super(...arguments);
  }

  static async getInitialProps(props) {
    const content = await import(`../posts/${props.query.key}.md`)

    return {
      content: content.default
    }
  }

  render() {
    const markdownConfig = {
      html: true,
      linkify: true,
      typographer: true,
      highlight: function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str, true).value;
          } catch (__) {}
        }

        return ""; // use external default escaping
      }
    };
    const postHTML = markdownIt(markdownConfig).render(sanitizePost(this.props.content));

    return (
      <MyLayout>
        <div dangerouslySetInnerHTML={{ __html: postHTML }} />
        <style global jsx>
          {`
            img {
              max-width: 900px;
            }

            blockquote {
              padding: 0 1em;
              color: #6a737d;
              border-left: 0.25em solid #dfe2e5;
              margin-left: 0;
              margin-bottom: 16px;
              margin-top: 0;
            }

            p,
            li {
              word-wrap: break-word;
              font-size: 18px;
              line-height: 1.58;
              letter-spacing: -0.003em;
            }

            p > :global(code) {
              padding: 0.2em 0.4em;
              margin: 0;
              font-size: 85%;
              border-radius: 3px;
              font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo,
                Courier, monospace;
            }

            pre {
              margin-top: 0;
              margin-bottom: 0;
            }

            pre > :global(code) {
              font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo,
                Courier, monospace;
              line-height: 1.45;
            }
          `}
        </style>
      </MyLayout>
    );
  }
}

export default withRouter(Post);
