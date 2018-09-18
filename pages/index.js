import MyLayout from "../components/MyLayout";
import PostList from "../components/PostList";
import SideBar from "../components/SideBar";

export default () => {
  const testPostList = [
    {
      data: "2018-09-11",
      content: "I should start with a disclaimer — I’m not an expert. I’ve only ever landed one hacking job, which is my current one — and I haven’t even been here long! But I did spend a lot of time in other sectors of IT wishing I was in security. As a result, I’ve read a lot of stuff and spoken to a lot of people. Basically, it all boils down to this:\n" +
      "\n" +
      "There is no one-size-fits-all approach to getting your first infosec role. There was a recent Twitter hashtag that did the rounds, #MyWeirdPathToInfosec, where a whole bunch of infosec professionals revealed the paths they took to an eventual infosec role. They varied widely, some spent time in federal prison (not recommended), some were musicians, some scored an infosec role straight out of college, some were offered jobs after illegally hacking a company and then telling the company how they did it (also not recommended). This technique may have worked for some people in the 90s, now it will probably land you in jail.",
      title: "Post One"
    },
    {
      data: "2018-09-12",
      content: "I remember my first experience with “hacking.” I was about 10 years old, and I discovered the ability to save webpages locally. I headed straight to Google, downloaded the home page, and edited my local copy in notepad.exe to contain the words “Luke was ‘ere!”. When I opened up the edited page, my stomach dropped. I thought I had defaced Google. How long until the FBI kick in my door? Should I tell my parents before they find out?\n" +
      "\n" +
      "Back in myyy daaaay, there were no hacking challenge sites. In fact, there was barely any information out there, at least that I could find. My first resource was a website by Carolyn Meinel, titled “The Guides to (mostly) Harmless Hacking.” The guides were written in Comic Sans, the token font of that bad design genre that can only be found in the 90s and early 00s. These guides included such classics as “Telnet: the Number One Hacking Tool” and “How to Hack with Windows XP part I: The Magic of DOS.” They can still be found here.\n" ,
      title: "Post Two"
    },
    {
      data: "2018-09-13",
      content: "Upon finishing school I scored my first job in IT and started a computer science degree, almost finished, dropped out, got made redundant, moved out of home, acquired Bachelor of Music, became a full-time musician, spent a couple of years performing on cruise ships, met my wife, lived in the UK, got married, moved back to Australia, and started working as a full-time web developer.\n" +
      "\n" +
      "Throughout all this, my passion for hacking never really subsided, and development was never something I loved. I had a wonderful job with great people, but the actual tasks of my job weren’t sparking me. As it turns out, I was on a project which involved e-commerce and sensitive data, so my boss offered for me to take a security related course. I emailed the CEO of a local penetration testing firm and asked what the best security course was, and he recommended OSCP. So I did it!",
      title: "Post Three"
    },
    {
      data: "2018-09-14",
      content: "Completing my OSCP was a turning point for me. I spent every spare moment of those 60 days learning as much as possible about the art of hacking. Even when I was exhausted, I had trouble sleeping because my brain wouldn’t stop thinking about the challenge boxes in the labs. That’s how I knew it should probably be my job, instead of development, which I had grown tired of. (I wrote a three-part blog series about the OSCP too, if you’re into that.)\n" +
      "\n" +
      "Only a month or two after completing OSCP, I landed my first penetration testing job through a great infosec recruiter after solving a hacking challenge they posted online. You can read more about that story here.",
      title: "Post Four"
    },
    {
      data: "2018-09-15",
      content: "You can have every hacking certification under the sun, but if you walk into the interview gloating about some illegal stunt you pulled, nobody will risk hiring you. The white hat community often deal with highly sensitive data — your employer and your clients need to be able to trust you.\n" +
      "\n" +
      "On that note, when you’re in an interview and you don’t know the answer to a technical question, it’s better to say “sorry, I don’t know, but I will be sure to research that later!” than to try to bluff your way through an answer. The person interviewing you will be able to tell, and they are probably more interested in you being honest and genuine than correct. At this point in time, experienced security professionals are rare, so many companies are hiring less experienced staff with the right mindset and attitude, then putting them through training to learn the technical skills.",
      title: "Post Five"
    }
  ];

  const categories = [
    { name: "Category1", count: 3 },
    { name: "Category2", count: 2 },
    { name: "Category3", count: 4 },
    { name: "Category4", count: 1 },
    { name: "Category5", count: 6 },
  ];
  return (
    <MyLayout>
      <div className="home-container">
        <PostList list={testPostList} />
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
        }
        .sidebar-container {
          width: 200px;
        }
      `}</style>
    </MyLayout>
  );
};
