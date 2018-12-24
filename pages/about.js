import Link from "next/link";
import MyLayout from "../components/MyLayout";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { backendUrl }
} = getConfig();

export default () => (
  <MyLayout>
    <div className="container">
      <img className="avatar" src={`${backendUrl}/static/avatar.jpeg`} />
      <div className="introduce">
        <div className="name">
          Yingjian Li
          <Link href="https://github.com/MrFatt">
            <a target="_blank">
              <img
                className="logo"
                src={`${backendUrl}/static/GitHub-logo.png`}
              />
            </a>
          </Link>
          <Link href="mailto://mrfatlee5@gmail.com">
            <a target="_blank">
              <img
                className="logo"
                src={`${backendUrl}/static/mail-logo.png`}
              />
            </a>
          </Link>
        </div>
        <div className="location-container">
          <img className="location" src={`${backendUrl}/static/locate.png`} />
          Xi'an
        </div>
        <div className="bio">
          一个升级中的全栈工程师
          <s>（CSS除外）</s>。
        </div>
      </div>
    </div>

    <style jsx>{`
      .container {
        display: flex;
        flex-direction: row;
        margin-top: 120px;
      }
      .introduce {
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      .name {
        font-weight: bolder;
        font-size: 18px;
      }
      .location-container {
        margin-top: 15px;
      }
      img.avatar {
        max-height: 150px;
        border-radius: 75px;
      }
      img.location {
        height: 13px;
        margin-right: 15px;
      }
      img.logo {
        height: 15px;
        margin-left: 10px;
      }
      .bio {
        margin-top: 20px;
      }
    `}</style>
  </MyLayout>
);
