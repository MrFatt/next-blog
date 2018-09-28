import MyLayout from "../components/MyLayout";

const markdownIt = require("markdown-it");
const hljs = require("highlight.js");

export default props => {
  const {
    url: {
      query: { content }
    },
    meta
  } = props;

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

  const postHTML = markdownIt(markdownConfig).render(content);

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
            background-color: rgba(27, 31, 35, 0.05);
            border-radius: 3px;
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo,
              Courier, monospace;
          }

          pre {
            margin-top: 0;
            margin-bottom: 0;
            background-color: #f6f8fa;
          }

          pre > :global(code) {
            margin-top: 0;
            margin-bottom: 0;
            word-break: normal;
            overflow: auto;
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo,
              Courier, monospace;
            font-size: 85%;
            line-height: 1.45;
            border-radius: 3px;
          }
        `}
      </style>
    </MyLayout>
  );
};
