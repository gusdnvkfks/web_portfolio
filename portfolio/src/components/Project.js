import React from "react";

// css
import "../css/Project.css";

function Project() {
  return (
    <>
      <div className="project-container">
        <div className="project-title">Project!</div>
        <div className="project-contents">
          <div className="first-section">
            <div className="project-first"></div>
            <div className="first-desc">
              보고싶은 영화의 정보, 예고편 등을 볼 수 있는 넷플릭스 클론코딩
              프로젝트입니다.
            </div>
          </div>
          <div className="project-empty"></div>
          <div className="second-section">
            <div className="project-second"></div>
            <div className="second-desc">
              병원의 솔직한 리뷰와 간단한 상담 또는 가까운 병원을 찾을 수 있는
              위치기반 병원리뷰 서비스 입니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
