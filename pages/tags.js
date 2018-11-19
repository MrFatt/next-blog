import { Component } from "react";
import { withRouter } from "next/router";
import Link from "next/link";

import MyLayout from "../components/MyLayout";
import summary from "../summary.json";

class Tags extends Component {
  constructor() {
    super(...arguments);
  }

  static async getInitialProps(props) {
    const {
      query: { tag }
    } = props;
    const filteredPosts = summary.posts.filter(post => post.tag.includes(tag));
    return { filteredPosts, tag };
  }

  render() {
    const { filteredPosts, tag } = this.props;

    return (
      <MyLayout>
        <div className="tags-content">
          <div className="tag-name">{tag}</div>

          {filteredPosts.map(post => (
            <div key={post.key} className="post">
              <span className="post-timestamp">{post.timestamp}</span>
              <Link as={`/post/${post.key}`} href={`/post/${post.key}`}>
                <span className="post-title">{post.title}</span>
              </Link>
            </div>
          ))}
        </div>
        <style jsx>{`
          font-family: "Roboto";
          .tag-name {
            margin-top: 30px;
            margin-bottom: 30px;
            font-size: 30px;
          }
          .tags-content {
            min-width: 1000px;
          }
          .post {
            font-size: 19px;
            margin-bottom: 10px;
          }
          .post-timestamp {
            color: #999999;
          }
          .post-title {
            margin-left: 20px;
          }
          .post-title:hover {
            color: blue;
            opacity: 0.6;
            cursor: pointer;
          }
        `}</style>
      </MyLayout>
    );
  }
}

export default withRouter(Tags);
