import React from "react";

// css
import "../css/AboutMe.css";

function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-title">About Me!</div>
      <div className="about-contents">
        <div className="about-img"></div>
        <div className="about-describe">
          안녕하세요. 주니어 프론트엔드 개발자 <strong>김경훈</strong> 입니다.
          <br />
          저는 코드스테이츠라는 부트캠프에서 개발자가 되기위한 <br /> 기초
          단계를 수료하였고, 혼자서는 개발을 할 수가 없다는 것을 알기에 <br />{" "}
          페어 프로그래밍, 코드리뷰, 스터디 등의 적극적인 참여를 통해 <br />{" "}
          다른 사람들과 함께 협업하는 법을 배웠습니다. <br /> 또한, 정규 과정이
          끝난 뒤 총 4명으로 이루어진 팀을 만들어 <br /> 2번의 협업 프로젝트를
          진행했습니다. 프로젝트의 팀장을 맡았을 때 <br /> 가장 기본으로 생각한
          팀원들과의 소통을 중요시하여, <br /> 여러 의견을 듣고 모두가
          만족할만한 방향으로 나아가는 것을 <br /> 목표로 팀 프로젝트를
          진행했습니다. 지금 당장이 아니더라도 <br /> 궁극적으로는 개인의
          기량보다는 팀원들과의 소통을 우선시 하는 <br /> 개발자가 되고싶습니다.
          그러기 위해 제가 다른 팀원들에게 <br /> 더 도움을 줄 수 있는 개발자가
          되어야 한다고 생각하기 때문에 <br /> 꾸준한 스터디와, 개인 학습을
          진행하고 있습니다.
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
