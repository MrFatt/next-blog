import { Component } from "react";
import { withRouter } from "next/router";

import MyLayout from "../components/MyLayout";
import PostList from "../components/PostList";
import SideBar from "../components/SideBar";
import Pagination from "../components/Pagination";
import summary from "../summary.json";

class Page extends Component {
  constructor() {
    super(...arguments);
  }

  static async getInitialProps(props) {
    const {
      query: { cur = 1 }
    } = props;
    const posts = await Promise.all(
      summary.posts.slice((cur - 1) * 5, cur * 5).map(async ({ title }) => {
        const post = await import(`../posts/${title}.md`);
        return { title: title, content: post.default };
      })
    );
    return { posts, summary: summary };
  }

  render() {
    const { tags } = summary;

    const {
      posts,
      router: {
        query: { cur }
      }
    } = this.props;

    return (
      <MyLayout>
        <div className="home-container">
          <div className="content-with-pagination">
            <PostList list={posts} />
            <Pagination
              pageCount={Math.ceil(summary.posts.length / 5)}
              currentPage={cur}
            />
          </div>
          <SideBar tags={tags} />
        </div>
        <style global jsx>{`
          .home-container {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          }
          .content-with-pagination {
            margin-right: 100px;
          }
          .post-list-container {
            flex: 1 auto;
          }
          .sidebar-container {
            min-width: 150px;
          }
        `}</style>
      </MyLayout>
    );
  }
}

export default withRouter(Page);
