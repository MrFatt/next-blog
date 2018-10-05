import MyLayout from "../components/MyLayout";
import PostList from "../components/PostList";
import SideBar from "../components/SideBar";
import { Component } from "react";

export default class Page extends Component {
  constructor() {
    super(...arguments);
  }

  static async getInitialProps(props) {
    const posts = await Promise.all(
      props.query.posts.map(async ({ title }) => {
        const post = await import(`../posts/${title}.md`);
        return { title: title, content: post.default };
      })
    );
    return { posts };
  }

  render() {
    const categories = [
      { name: "类别1", count: 3 },
      { name: "类别2", count: 2 },
      { name: "类别3", count: 4 },
      { name: "类别4", count: 1 },
      { name: "类别5", count: 6 }
    ];

    return (
      <MyLayout>
        <div className="home-container">
          <PostList list={this.props.posts} />
          <SideBar categories={categories} />
        </div>
        <style global jsx>{`
          .home-container {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          }
          .post-list-container {
            flex: 1 auto;
            margin-right: 100px;
          }
          .sidebar-container {
            min-width: 150px;
          }
        `}</style>
      </MyLayout>
    );
  }
}
